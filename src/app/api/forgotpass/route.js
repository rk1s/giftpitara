import User from '@/models/User';
import bcrypt from 'bcrypt';
import otpGenerator from 'otpgenerator';
import nodemailer from 'nodemailer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import dbConnect from '@/lib/db';

// Configure Nodemailer to use Gmail SMTP server
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rkj12rs@gmail.com', // Your Gmail email address
    pass: '6260853535', // Your Gmail password or application-specific password
  },
});

// Configure react-toastify
toast.configure();

export async function POST(req) {
  try {
    await dbConnect();

    const { email } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    // Generate a random OTP using otpgenerator
    const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });

    // Hash the OTP using bcrypt
    const hashedOTP = await bcrypt.hash(otp, 10);

    // Store the hashed OTP in the user's document in the database
    user.otp = hashedOTP;
    await user.save();

    // Send the OTP to the user via email
    await sendOTPByEmail(email, otp);

    // Show success toast notification
    toast.success('OTP sent to email');

    return new Response(JSON.stringify({ message: 'OTP sent to email' }), { status: 200 });
  } catch (error) {
    // Show error toast notification
    toast.error('Failed to send OTP email');

    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}

// Helper function to send OTP to user's email
async function sendOTPByEmail(email, otp) {
  try {
    const mailOptions = {
      from: 'rkj12rs@gmail.com', // Sender's email address (should be your Gmail email)
      to: email, // Recipient's email address
      subject: 'Password Reset OTP', // Email subject
      text: `Your OTP for password reset is: ${otp}`, // Email body
    };

    // Send the email using the configured Nodemailer transporter
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error('Failed to send OTP email');
  }
}
