/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from 'react'
import Link from 'next/link';
import React from 'react';
import { CiHeart } from "react-icons/ci";
import { BsMenuButtonWide } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaPenFancy,FaGifts,FaPlaneArrival,FaHandHoldingHeart } from "react-icons/fa";
import { GiStairsCake,GiFlowers } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import { HiOutlineHome } from "react-icons/hi2";
import { SlHandbag } from "react-icons/sl";


const Menubottom = () => {
    const [isOpen, setIsOpen] = useState();
    const [isOpen1, setIsOpen1] = useState();


    const close = () => {
        setIsOpen(false);
    }


    const openbar = () => {
        setIsOpen(
            <>
                <span onClick={close} className="cursor-pointer uppercase text-md text-black font-bold fixed top-2 left-[31%] sm:left-[32%] z-10">
                    X
                </span>

                <div className='top-0 left-0 fixed bg-white w-[35vw] h-full text-center p-5 shadow-xl ease-in-out duration-300  overflow-y-scroll '>

                    <div className=' my-1  h-auto grid grid-cols-1 '>

                        <div className=' '>
                            <div className='grid w-auto justify-center p-3  ' >
                                <div className=' mt-2'>
                                    <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-8 '>Home</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className='grid w-auto justify-center p-3  ' >
                                <div className=' mt-2'>
                                    <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-8 '>categories</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className='grid w-auto justify-center p-3  ' >
                                <div className=' mt-2'>
                                    <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-8 '>Men</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className='grid w-auto justify-center p-3  ' >
                                <div className=' mt-2'>
                                    <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-8 '>women</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className='grid w-auto justify-center p-3  ' >
                                <div className=' mt-2'>
                                    <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-8 '>couple</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className='grid w-auto justify-center p-3  ' >
                                <div className=' mt-2'>
                                    <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-8 '>kid</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className='grid w-auto justify-center p-3  ' >
                                <div className=' mt-2'>
                                    <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-8 '>Cakes</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className='grid w-auto justify-center p-3  ' >
                                <div className=' mt-2'>
                                    <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-8 '>Hotoffer</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='flex items-center justify-center pt-52 '>
                        <hr />
                        <div className=' grid grid-cols-2 sm:grid-cols-4  '>
                            <div className='flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
                                <FaFacebook />
                            </div>
                            <div className='flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
                                <FaTwitter />
                            </div>
                            <div className='mt-2 sm:mt-0 flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
                                <FaInstagram />
                            </div>
                            <div className='mt-2 sm:mt-0 flex float-left mx-2 border bg-gray-200 p-1 rounded-md text-gray-500 hover:bg-[#ff8f9c]  hover:text-white'>
                                <FaLinkedin />
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }

    const close1 = () => {
        setIsOpen1(false);
    }

    const openbar1 = () => {
        setIsOpen1(
            <>
                <span onClick={close1} className="cursor-pointer uppercase text-md text-black font-bold fixed top-2 right-4 z-10">
                    X
                </span>

                <div className='top-0 right-0 fixed bg-white w-[35vw] h-full text-center p-5 shadow-xl ease-in-out duration-300  overflow-y-scroll '>





                    <div className='  my-3  h-auto mx-10  py-5 grid grid-cols-1 '>

                        <div className=' '>
                            <div className=' grid w-auto justify-center p-3  ' >
                                <div className=' mx-7 '>
                                    <FaHandHoldingHeart size={35} className=' hover:text-pink-700 text-[#ff8f9c] cursor-pointer' />
                                </div>

                                <div className=' mt-2'>
                                    <p className=' text-sm text-center font-normal text-gray-600'>Mother's Day</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className=' grid w-auto justify-center p-3 ' >
                                <div className=' mx-12'>
                                    <CiDeliveryTruck size={35} className=' text-[#ff8f9c]' />
                                </div>

                                <div className=' mt-2'>
                                    <p className=' text-sm font-normal text-center text-gray-600'>Same Day Delivery</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className=' grid w-auto justify-center p-3 ' >
                                <div className=' mx-7'>
                                    <FaPenFancy size={30} className=' text-[#ff8f9c] mt-1' />
                                </div>

                                <div className=' mt-[9px]'>
                                    <p className=' text-sm font-normal text-gray-600'>Personalized</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className=' grid w-auto justify-center p-3 ' >
                                <div className=' mx-1'>
                                    <GiStairsCake size={35} className=' text-[#ff8f9c] ' />
                                </div>

                                <div className=' mt-2'>
                                    <p className=' text-sm text-center font-normal text-gray-600'>Cakes</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className=' grid w-auto justify-center p-3 ' >
                                <div className=' mx-2'>
                                    <GiFlowers size={35} className=' text-[#ff8f9c]' />
                                </div>

                                <div className=' mt-2'>
                                    <p className=' text-sm font-normal text-gray-600'>Flowers</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className=' grid w-auto justify-center p-3 ' >
                                <div className=' mx-7'>
                                    <FaPlaneArrival size={35} className=" text-[#ff8f9c]" />
                                </div>

                                <div className=' mt-2'>
                                    <p className=' text-sm text-center font-normal text-gray-600'>New Arrivals</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className=' grid w-auto justify-center p-3 ' >
                                <div className=' mx-1'>
                                    <RiPlantFill size={35} className='text-[#ff8f9c]' />
                                </div>

                                <div className=' mt-2'>
                                    <p className=' text-sm text-center font-normal text-gray-600'>Plants</p>
                                </div>
                            </div>
                        </div>

                        <div className=' '>
                            <div className='grid w-auto justify-center p-3 ' >
                                <div className=' mx-7'>
                                    <FaGifts size={35} className=' text-[#ff8f9c]' />
                                </div>

                                <div className=' mt-2'>
                                    <p className=' text-sm font-normal text-gray-600'>Bulk/Corp.Gifts</p>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </>
        )
    }

    return (

        <>
            <div className='block lg:hidden '>
                <div className=' w-full  h-14 mx-auto bottom-0 fixed grid items-center'>

                    <div className='grid justify-items-center  bg-white shadow-[#ff8f9c] shadow-2xl w-auto mx-0 sm:mx-20 md:mx-28 h-auto p-[15px] rounded-t-none sm:rounded-t-xl'>
                        <div className='grid grid-cols-5 gap-10 sm:gap-10 md:gap-20 items-center'>

                            <div className=' cursor-pointer'>
                                <FiMenu onClick={openbar} size={25} />
                                <h1>{isOpen}</h1>

                            </div>

                            <Link href="cart">
                            <div>
                                <SlHandbag size={20} />
                            </div>
                            </Link>
                            <Link href="/">
                            <div>
                                <HiOutlineHome size={25} />
                            </div>
                            </Link>
                            <Link href="whislist">
                            <div>
                                <CiHeart size={27} />
                            </div>
                            </Link>
                            <div className=' cursor-pointer'>
                                <BsMenuButtonWide onClick={openbar1} size={20} />
                                <h1>{isOpen1}</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};


export default Menubottom;