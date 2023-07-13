/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { FaPenFancy,FaGifts,FaPlaneArrival,FaHandHoldingHeart } from "react-icons/fa";
import { GiStairsCake,GiFlowers } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";

const Menu = () => {
  return (
    <>
    <div className=' hidden lg:block '>
        <div className=' my-3 rounded-lg h-auto mx-10 lg:mx-20 py-2 grid  sm:grid-cols-3  xl:grid-cols-6 '>
            
            <div className='ml-3 '>
                <div className='border grid w-auto justify-center p-3 rounded shadow-md ' >
                <div className=' mx-7 '>
                    <FaHandHoldingHeart size={45} className=' hover:text-pink-700 text-[#ff8f9c] cursor-pointer border bg-[#f2f2f2]  p-2 rounded'/>
                </div>
                
                <div className=' mt-2'>
                    <p className=' text-sm text-center font-normal text-gray-600'>Mother's Day</p>
                </div>
                </div>
            </div>

            <div className='ml-3 '>
                <div className='border  grid w-auto justify-center p-3 pr-2 pl-2 rounded shadow-md' >
                <div className=' mx-12'>
                    <CiDeliveryTruck size={45} className=' hover:text-pink-700 text-[#ff8f9c] cursor-pointer border bg-[#f2f2f2]  p-2 rounded'/>
                </div>
                
                <div className=' mt-2'>
                    <p className=' text-sm font-normal text-center text-gray-600'>SameDay Delivery</p>
                </div>
                </div>
            </div>

            <div className='ml-3'>
                <div className='border  grid w-auto justify-center p-3 rounded  shadow-md ' >
                <div className=' mx-7'>
                    <FaPenFancy size={40} className=' hover:text-pink-700 text-[#ff8f9c] cursor-pointer border bg-[#f2f2f2]  p-2 rounded mt-1'/>
                </div>
                
                <div className=' mt-[9px]'>
                    <p className=' text-sm font-normal text-gray-600'>Personalized</p>
                </div>
                </div>
            </div>

            {/* <div className='ml-3 '>
                <div className='border grid w-auto justify-center p-3 rounded shadow-md' >
                <div className=' mx-1'>
                    <GiStairsCake size={45} className='  hover:text-pink-700 text-[#ff8f9c] cursor-pointer border bg-[#f2f2f2]  p-2 rounded'/>
                </div>
                
                <div className=' mt-2'>
                    <p className=' text-sm text-center font-normal text-gray-600'>Cakes</p>
                </div>
                </div>
            </div> */}

            <div className='ml-3 mt-4  xl:mt-0'>
                <div className='border  grid w-auto justify-center p-3 rounded shadow-md  ' >
                <div className=' mx-2'>
                   <GiFlowers size={45} className='  hover:text-pink-700 text-[#ff8f9c] cursor-pointer border bg-[#f2f2f2]  p-2 rounded'/> 
                </div>
                
                <div className=' mt-2'>
                    <p className=' text-sm font-normal text-gray-600'>Flowers</p>
                </div>
                </div>
            </div>

            <div className='ml-3 mt-4  xl:mt-0'>
                <div className='border grid w-auto justify-center p-3 rounded shadow-md  ' >
                <div className=' mx-7'>
                    <FaPlaneArrival size={45} className=" hover:text-pink-700 text-[#ff8f9c] cursor-pointer border bg-[#f2f2f2]  p-2 rounded"/>
                </div>
                
                <div className=' mt-2'>
                    <p className=' text-sm text-center font-normal text-gray-600'>New Arrivals</p>
                </div>
                </div>
            </div>

            <div className='ml-3 mt-4  xl:mt-0'>
                <div className='border grid w-auto justify-center p-3 rounded shadow-md ' >
                <div className=' mx-1'>
                   <RiPlantFill size={45} className='  hover:text-pink-700 text-[#ff8f9c] cursor-pointer border bg-[#f2f2f2]  p-2 rounded' />
                </div>
                
                <div className=' mt-2'>
                    <p className=' text-sm text-center font-normal text-gray-600'>Plants</p>
                </div>
                </div>
            </div>

            {/* <div className='ml-3 mt-4  xl:mt-0'>
                <div className='border grid w-auto justify-center p-3 rounded shadow-md ' >
                <div className=' mx-7'>
                    <FaGifts size={45} className=' hover:text-pink-700 text-[#ff8f9c] cursor-pointer border bg-[#f2f2f2]  p-2 rounded'/>
                </div>
                
                <div className=' mt-2'>
                    <p className=' text-sm font-normal text-gray-600'>Bulk/Corp.Gifts</p>
                </div>
                </div>
            </div> */}

            

            

           
            

        </div>
        </div>
    
    </>
  )
}

export default Menu