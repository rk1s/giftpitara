import User from '@/models/User';
import bcrypt from 'bcrypt';
import { toast } from 'react-toastify';
import randomstring from 'randomstring';
import nodemailer from 'nodemailer';

import dbConnect from '@/lib/db';

// Configure Nodemailer to use Gmail SMTP server
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your Gmail email address
    pass: 'your-password', // Your Gmail password or application-specific password
  },
});

export async function POST(req) {
  try {
    await dbConnect();

    const { email, otp } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    const isOTPValid = await bcrypt.compare(otp, user.otp);

    if (!isOTPValid) {
      throw new Error('Invalid OTP');
    }

    // Generate a new password
    const newPassword = generateNewPassword();

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password field
    user.password = hashedPassword;

    // Clear the OTP field in the user's document
    user.otp = undefined;
    await user.save();

    // Send the new password to the user via email
    await sendNewPasswordByEmail(email, newPassword);

    toast.success('OTP verified successfully. Password reset instructions sent to your email');

    return new Response(JSON.stringify({ message: 'OTP verified successfully' }), {
      status: 200,
    });
  } catch (error) {
    toast.error(error.message);

    // Clear the input fields
    const script = `
      document.getElementById('email').value = '';
      document.getElementById('otp').value = '';
    `;

    return new Response(JSON.stringify(error.message), {
      status: 500,
      headers: {
        'Content-Type': 'application/javascript',
      },
      body: script,
    });
  }
}

// Helper function to generate a new password
function generateNewPassword() {
  // Generate a random alphanumeric password with a length of 8 characters
  return randomstring.generate({
    length: 8,
    charset: 'alphanumeric',
  });
}

// Helper function to send the new password to the user via email
async function sendNewPasswordByEmail(email, newPassword) {
  try {
    const mailOptions = {
      from: 'your-email@gmail.com', // Sender's email address (should be your Gmail email)
      to: email, // Recipient's email address
      subject: 'Password Reset', // Email subject
      text: `Your new password is: ${newPassword}`, // Email body
    };

    // Send the email using the configured Nodemailer transporter
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error('Failed to send new password email');
  }
}
