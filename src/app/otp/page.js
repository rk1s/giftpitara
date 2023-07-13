'use client'
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OTPPage = () => {
  const [password, setPassword] = useState('');

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();

    if (password === '') {
      toast.error('Please enter a new password');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/reset-password', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ password }),
      });

      console.log(await res.json());

      if (res.ok) {
        toast.success('Password updated successfully');
        window.location.href = '/login'; // Redirect using window.location.href
        return;
      } else {
        toast.error('Failed to update password');
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 w-1/3 mx-auto border my-20">
      <form onSubmit={handlePasswordUpdate}>
        <div className="text-black font-bold text-sm sm:text-sm md:text-2xl font-serif uppercase text-center sm:text-start">
          Enter New Password
        </div>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-1">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password" // Change the input type to password
            className="border shadow-lg p-2 outline-[#ff8f9c] mt-1"
            placeholder="     Enter New Password"
          />
        </div>

        <div className="mt-7 text-center grid grid-cols-1 md:grid-cols-1 items-center py-3 my-3 px-7 pb-2.5 pt-3 text-sm font-medium text-white shadow-[0_4px_9px_-4px_#3b71ca] bg-[#ff8f9c] hover:bg-[#212121]">
          <button type="submit">Update Password</button>
        </div>
      </form>
    </div>
  );
};

export default OTPPage;
