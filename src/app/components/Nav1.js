"use client";
import React, { useState } from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaRupeeSign, FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FcAbout } from "react-icons/fc";
import Login from './Login';
import Link from 'next/link';


const Nav1 = () => {

    const [open, setOpen] = useState(false);

    const close = () => {
        setOpen(false)
    }


    const opentab = () => {

        setOpen(
            <>
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div
                        className="bg-white shadow p-2 border rounded"

                    >
                        <div className="flex justify-between text-black">


                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                                <div
                                    className="flex justify-between bg-[#f2f2f2] shadow p-5 border rounded w-72 sm:w-96 md:w-auto "

                                >
                                    <div className=" text-black ">
                                        <Login />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span onClick={close} className="cursor-pointer uppercase text-lg text-white font-bold fixed top-4 right-4">
                        X
                    </span>
                </div>

            </>

        )
    }



    return (
        <nav className=' p-5 lg:p-4 border border-gray-300 '>
            <div className=' grid grid-cols-2 lg:grid-cols-3 mx-5 lg:mx-20'>
                <div className=' hidden lg:block'>
                    <div className='flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
                        <FaFacebook />
                    </div>
                    <div className='flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
                        <FaTwitter />
                    </div>
                    <div className='flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
                        <FaInstagram />
                    </div>
                    <div className='flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
                        <FaLinkedin />
                    </div>


                </div>
                <div className='grid justify-items-start xl:justify-items-center'>
                    <div className=' text-gray-500 text-sm'>
                        <span className=' font-medium'>FREE SHIPPING</span>
                        <span className=' font-normal'> Today ORDER OVER-$55</span></div>
                </div>
                <div className=' grid justify-items-end '>
                    <div>
                        <div className='flex '>
                            <div className='has-tooltip'>
                                <Link href='/about'>
                                <div className=' grid items-center border border-gray-300 p-2 rounded-full hover:bg-[#ff8f9c] hover:text-white flex-shrink-0 '>

                                    <span className='tooltip rounded shadow-lg p-1 bg-[#ff8f9c] mt-[67px] -ml-4 text-white font-semibold'>About</span>
                                    <FcAbout className=' text-black' />
                                </div>
                               </Link>
                            </div>

                            <div className='has-tooltip'>
                                <div className=' grid items-center border border-gray-300 p-2 rounded-full hover:bg-[#ff8f9c] hover:text-white flex-shrink ml-4'>
                                    <span className='tooltip rounded shadow-lg p-1 bg-[#ff8f9c] mt-[67px] -ml-5 text-white font-semibold'>Money</span>
                                    <FaRupeeSign />

                                </div>
                            </div>

                            <div className='has-tooltip'>
                                <Link href="/contact">
                                    <div className=' grid items-center border border-gray-300 p-2 rounded-full hover:bg-[#ff8f9c] hover:text-white flex-shrink ml-4'>
                                        <span className='tooltip rounded shadow-lg p-1 bg-[#ff8f9c] mt-[67px] -ml-6 text-white font-semibold'>Contact</span>
                                        <FiPhone />

                                    </div>
                                </Link>
                            </div>

                            <div className='has-tooltip'>
                                <h1>{open}</h1>
                                <div onClick={opentab} className=' cursor-pointer grid items-center border border-gray-300 p-2 rounded-full hover:bg-[#ff8f9c] hover:text-white ml-4 flex-shrink'>
                                    <span className='tooltip rounded shadow-lg p-1 bg-[#ff8f9c] mt-[67px] -ml-4 text-white font-semibold'>Login</span>
                                    <FaRegUser />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </nav>
    )
}

export default Nav1