/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConditionalLoginComponent = () => {
  const [user, setUser] = useState(null);
  const [user1, setUser1] = useState(null);

  const signup = () => {
    //normally connect to db or api
    setUser(true);
  };

  const pass = () => {
    setUser1(true);
  };

  const login = () => {
    setUser(null);
  };
  // register api function

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === '' || email === '' || password === '') {
      toast.error('Fill all fields');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
      });

      console.log(await res.json());
      if (res.ok) {
        toast.success('Successfully registered the user');
        setTimeout(() => {
          // signIn()
        }, 1500);
        return;
      } else {
        toast.error('Error occured while registering');
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // registernapi function end
  // login api start

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      toast.error('Fill all fields');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/login', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        const { role } = data;
        if (role === 'user') {
          toast.success('Successfully logged in as a user');
          setTimeout(() => {
            // Redirect to user dashboard
            window.location.href = '/userdash';
          }, 1500);
        } else if (role === 'admin') {
          toast.success('Successfully logged in as an admin');
          setTimeout(() => {
            // Redirect to admin dashboard
            window.location.href = '/admindash';
          }, 1500);
        } else {
          toast.error('Invalid role');
        }
        return;
      } else {
        toast.error('Invalid email or password');
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  // forgotpassword api end
  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (email === '') {
      toast.error('Please enter your email');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/forgotpass ', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      console.log(await res.json());

      if (res.ok) {
        toast.success('Password reset instructions sent to your email');
        return;
      } else {
        toast.error('Failed to send password reset instructions');
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // reset password start
  return (
    <>
      <div>
        {user ? (
          <div className=" p-4">
            <form onSubmit={handleSubmit}>
              <div className=" text-black font-bold text-sm sm:text-sm md:text-2xl font-serif uppercase text-center sm:text-start">
                Sign In to Create your account
              </div>
              <p
                onClick={login}
                className=" cursor-pointer mb-3 mt-4 text-center text-base font-semibold"
              >
                Already Have an account?
                <span className="text-red-600 ml-1 hover:underline">Login</span>
              </p>

              <div className="  grid grid-cols-1 md:grid-cols-1 ">
                <label>
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="border  shadow-lg p-2 outline-[#ff8f9c]"
                  placeholder="Enter your  Firstname & Lastname)"
                />
              </div>

              <div className="  grid grid-cols-1 md:grid-cols-1 my-2 ">
                <label>
                  Email id <span className="text-red-500">*</span>
                </label>

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="border  shadow-lg p-2 outline-[#ff8f9c]"
                  placeholder="Enter your Email id"
                />
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-1 py-2">
                <label>
                  Password <span className="text-red-500">*</span>
                </label>

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className=" border  shadow-lg p-2 outline-[#ff8f9c]"
                  placeholder="Enter your password"
                />
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-1 py-2">
                <label>
                  Conform Password <span className="text-red-500">*</span>
                </label>

                <input
                  type="password"
                  className=" border  shadow-lg p-2 outline-[#ff8f9c]"
                  placeholder="Conform your password"
                />
              </div>

              <div className=" text-center  grid grid-cols-1 md:grid-cols-1 items-center my-2 mt-5 rounded-md py-2 px-7 pb-2.5 pt-3 text-sm font-medium  text-white shadow-[0_4px_9px_-4px_#3b71ca] bg-[#ff8f9c]  hover:bg-[#212121]">
                <button>Sign Up</button>
              </div>
            </form>
            {/* <ToastContainer position=" top-right" /> */}
          </div>
        ) : (
          <div>
            {user1 ? (
              <div className=" p-4">
                <form>
                  <div className=" text-black font-bold text-sm sm:text-sm md:text-2xl font-serif uppercase text-center sm:text-start">
                    Reset Your Password
                  </div>

                  <div className="mt-7  grid grid-cols-1 md:grid-cols-1 ">
                    <label>LINK will sent to your registered email id</label>

                    <input
                     
                      type="text"
                      className="border  shadow-lg p-2 outline-[#ff8f9c] mt-1 "
                      placeholder="Enter your Email"
                    />
                  </div>

                  <div className="mt-7 text-center  grid grid-cols-1 md:grid-cols-1 items-center py-3 my-3 px-7 pb-2.5 pt-3 text-sm font-medium  text-white shadow-[0_4px_9px_-4px_#3b71ca] bg-[#ff8f9c]  hover:bg-[#212121]">
                    <button type="submit">Send Link</button>
                  </div>
                </form>
              </div>
            ) : (
              <div className=" p-4">
                <form onSubmit={handleLogin}>
                  {/* <form> */}
                  <div className=" text-black font-bold text-sm sm:text-sm md:text-2xl font-serif uppercase text-center sm:text-start">
                    Login in to complete your order
                  </div>

                  {/* <p onClick={singup} className=" cursor-pointer mb-3 mt-4 text-center text-base font-semibold">Don't have an account?  */}
                  <p
                    onClick={signup}
                    className="cursor-pointer mb-3 mt-4 text-center text-base font-semibold"
                  >
                    Don't have an account?
                    <span className=" text-red-600 ml-1 hover:underline">
                      Sign Up
                    </span>
                  </p>

                  <div className="  grid grid-cols-1 md:grid-cols-1 ">
                    <label>
                      Username <span className="text-red-500">*</span>
                    </label>

                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="border  shadow-lg p-2 outline-[#ff8f9c] "
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className=" grid grid-cols-1 md:grid-cols-1 py-2 mt-1">
                    <label>
                      Password <span className="text-red-500">*</span>
                    </label>

                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className=" border shadow-lg p-2 rounded outline-[#ff8f9c]"
                      placeholder="Enter your password"
                    />
                  </div>
                  {/* <!-- Forgot password link --> */}
                  <h1
                    onClick={pass}
                    className=" cursor-pointer text-right font-normal text-red-500 hover:underline"
                  >
                    Forgot Password ?
                  </h1>
                  <div className=" text-center  grid grid-cols-1 md:grid-cols-1 items-center py-3 my-3 px-7 pb-2.5 pt-3 text-sm font-medium  text-white shadow-[0_4px_9px_-4px_#3b71ca] bg-[#ff8f9c]  hover:bg-[#212121]">
                    <button type="submit">Login</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ConditionalLoginComponent;
