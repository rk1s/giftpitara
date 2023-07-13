import User from '@/models/User';
import bcrypt from 'bcrypt';

import dbConnect from '@/lib/db';

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password: pass } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(pass, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const { password, ...userData } = user._doc;

    return new Response(JSON.stringify(userData), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error.message), { status: 500 });
  }
}
