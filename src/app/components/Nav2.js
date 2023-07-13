import React from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { SlHandbag } from "react-icons/sl";
import { CiHeart, CiDeliveryTruck } from "react-icons/ci";

const Nav2 = () => {
    return (
        <nav className='  p-5 border border-t-0 '>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 mx-20'>
                <div className=' grid items-center'>
                    <Link href="/">    <h1 className=' text-center sm:text-left  text-3xl font-extrabold'>Gift-Pitara</h1></Link>


                </div>
                <div className='grid justify-items-center'>

                    {/* search box start */}

                    <div className="  pt-2  justify-items-center text-gray-600 -ml-[10px] sm:-ml-[50px] md:-ml-[0px] lg:-ml-[100px] xl:-ml-[150px]">
                        <input className=" grid justify-items-center border-2 border-gray-300 bg-white h-12 px-5 pr-16  text-sm focus:outline-[#ff8f9c] w-auto sm:w-[330px] md:w-[400px] lg:w-[480px] xl:w-[700px] 2xl:w-[700px]  rounded-lg shadow-inner"
                            type="search" placeholder="Search" />
                    </div>
                    <div className=' flex float-left -mt-11 ml-[200px] sm:ml-[90%]'>
                        <button type="submit">
                            <FaSearch />
                        </button>
                    </div>


                    {/* search box end */}

                </div>
                <div className='ml-auto mt-4 hidden lg:block '>
                    <div className='flex '>
                        <Link href='/trackorder'>
                            <div className=' grid items-center mt-1 '><CiDeliveryTruck size={35} /></div>
                        </Link>
                        <Link href='/whislist'>
                            <div className=' grid items-center ml-7'><CiHeart size={37} /></div>
                        </Link>
                        <Link href='/Cart'>
                            <div className=' grid items-center ml-7'><SlHandbag size={29} /></div>
                        </Link>

                    </div>



                </div>
            </div>


        </nav>
    )
}

export default Nav2;