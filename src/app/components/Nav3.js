"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Nav3 = () => {

  const [focus, setfocus] = useState(false)
  const [men, setmen] = useState(false)

  const close = () => {
    setfocus(false);
  }

  const open = () => {

    setfocus(
      <>

        <div  className="absolute z-10 grid  w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
          <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
            <ul className="space-y-4" aria-labelledby="mega-menu-icons-dropdown-button">
              <li>
                <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                  <span className="sr-only">About us</span>
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                  <span className="sr-only">About us</span>
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                  <span className="sr-only">About us</span>
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                  <span className="sr-only">About us</span>
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
            <ul className="space-y-4">
            <li>
                <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                  <span className="sr-only">About us</span>
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                  <span className="sr-only">About us</span>
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                  <span className="sr-only">About us</span>
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                  <span className="sr-only">About us</span>
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  About Us
                </Link>
              </li>
              
              
              
            </ul>
          </div>
          <div className="p-4 text-gray-900 dark:text-white">
            <ul className="space-y-4">
            <li>
                <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                  <span className="sr-only">About us</span>
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                  <span className="sr-only">About us</span>
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                  <span className="sr-only">About us</span>
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group">
                  <span className="sr-only">About us</span>
                  <svg className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </>
    );
  };

  const openmen = () => {
    setmen(
      <>
        <div class="absolute z-10 grid  w-44  text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700  dark:bg-gray-700">
          <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
            <ul class="space-y-4 text-start text-gray-600 " >
              <li className='hover:text-blue-500'>
                Cloth
              </li>
              <li className='hover:text-blue-500'>
                Flowers
              </li>
              <li className='hover:text-blue-500'>
                Bag
              </li>
              <li className='hover:text-blue-500'>
                Cake
              </li>
            </ul>
          </div>

        </div>
      </>
    );
  }

  const closemen = () => {
    setmen(false);
  }
  return (
    <>
      <div className='hidden md:hidden lg:block '>
        <div className=' my-1  h-auto  lg:mx-20 xl:mx-32 grid grid-cols-8 '>

          <div className=' '>
            <div className='grid w-auto justify-center p-3  ' >
              <div className=' mt-2'>
                <Link href="/">
                  <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-4 '>Home</p>
                </Link>
              </div>
            </div>
          </div>

          <div className=''>
            <div className='grid w-auto justify-center p-3  ' >
              <div className=' mt-2'>
                <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-4 ' onMouseEnter={open} onMouseLeave={close}>

                  categories
                  {focus}
                </p>
              </div>
            </div>
          </div>

          <div className=' '>
            <div className='grid w-auto justify-center p-3   ' >
              <div className=' mt-2'>
                <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-4 ' onMouseEnter={openmen} onMouseLeave={closemen}>
                  Men{men}

                </p>
              </div>
            </div>
          </div>

          <div className=' '>
            <div className='grid w-auto justify-center p-3  ' >
              <div className=' mt-2'>
                <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-4 '>
                  women
                  
                  </p>
              </div>
            </div>
          </div>

          <div className=' '>
            <div className='grid w-auto justify-center p-3  ' >
              <div className=' mt-2'>
                <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-4 '>
                  couple
                  </p>
              </div>
            </div>
          </div>

          <div className=' '>
            <div className='grid w-auto justify-center p-3  ' >
              <div className=' mt-2'>
                <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-4 '>kid</p>
              </div>
            </div>
          </div>

          <div className=' '>
            <div className='grid w-auto justify-center p-3  ' >
              <div className=' mt-2'>
                <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-4 '>Cakes</p>
              </div>
            </div>
          </div>

          <div className=' '>
            <div className='grid w-auto justify-center p-3  ' >
              <div className=' mt-2'>
                <p className=' cursor-pointer text-sm text-center font-bold uppercase hover:text-[#ff8f9c] hover:underline underline-offset-4 '>Hotoffer</p>
              </div>
            </div>
          </div>


        </div>
      </div>

    </>
  )


}

export default Nav3;