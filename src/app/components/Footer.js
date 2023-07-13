import React from 'react';
import { ImLocation } from 'react-icons/im';
import { BsTelephone } from 'react-icons/bs';
import { MdMessage } from 'react-icons/md';


const Footer = () => {
  return (
    <section className="width-[100%]  overflow-hidden">
      <div className=" min-h-[50vh] bg-[#212121]">
        <div className="md:px-20 px-5">
          <h1 className="text-[#ff8f9cbb] py-7  mx-2 font-bold text-lg">
            BRAND DIRECTORY
          </h1>
          {/* <div className=""> */}
          <div className="flex flex-col md:flex-row justify-start md:items-center items-start">
            <div className="mx-2">
              <h1 className="  text-gray-400 py-3">FASHION : </h1>
            </div>
            <div className="mx-2">
              <h2 className="text-gray-500 py-3">
                T-Shirt | Shirts | Shorts & Jeans | Jacket | Dress & Frock |
                Innerwear | Hosiery
              </h2>
            </div>
          </div>

          {/* <div className=""> */}
          <div className="flex flex-col md:flex-row justify-start md:items-center items-start">
            <div className="mx-2">
              <h1 className="  text-gray-400 py-3">FOOTWEAR : </h1>
            </div>
            <div className="mx-2">
              <h2 className="text-gray-500 py-3">
                Sport | Formal | Boots | Casual | Cowboy Shoes | Safety Shoes |
                Party Wear Shoes | Branded | Firstcopy | Long Shoes
              </h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-start md:items-center items-start">
            <div className="mx-2">
              <h1 className="  text-gray-400 py-3">JEWELLERY : </h1>
            </div>
            <div className="mx-2">
              <h2 className="text-gray-500 py-3">
                Necklace | Earrings | Couple Rings | Pendants | Crystal |
                Bangles | Bracelets | Nosepin | Chain | Earrings | Couple Rings
              </h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-start md:items-center items-start">
            <div className="mx-2">
              <h1 className="  text-gray-400 py-3">COSMETICS : </h1>
            </div>
            <div className="mx-2">
              <h2 className="text-gray-500 py-3">
                Shampoo| Bodywash | Facewash | Makeup Kit |Lipstick| Prefume |
                Body Soap | Scrub |Hair Gel | Hair Colors | Sunscreen
              </h2>
            </div>
          </div>
        </div>
      </div>

      <hr className=" bg-gray-900" />
      <div className="grid grid-cols-1 items-center md:grid-cols-5 md:px-20 px-5  mx-auto w-screen h-full bg-[#212121] ">
        <div className=" text-white hover:text-[#ff8f9c] cursor-pointer items-start py-7 mx-2 ">
          <span className='underline decoration-[#ff8f9c]'> POPULAR CATEGORIES</span>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">
            Fashion
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">
            Electronic
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">
            Cosmetic
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">
            Health
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">
            Watches
          </div>
        </div>
        <div className=" text-white hover:text-[#ff8f9c] cursor-pointer items-start py-7 mx-2  ">
          <span className='underline decoration-[#ff8f9c]'> PRODUCTS</span>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">
            Prices Drop
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">
            New Products
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">
            Best Sales
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">
            Contact Us
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">
            Sitemap
          </div>



        </div>
        <div className=" text-white hover:text-[#ff8f9c] cursor-pointer items-start py-7 mx-2 ">
          <span className='underline decoration-[#ff8f9c]'> OUR COMPANY </span>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">
            Delivery
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Legal Notice
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Terms And Conditions
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            About Us
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Secure Payment
          </div>


        </div>
        <div className=" text-white hover:text-[#ff8f9c] cursor-pointer items-start py-7 mx-2 ">
          <span className='underline decoration-[#ff8f9c]'> OUR COMPANY </span>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">
            Delivery
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Legal Notice
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Terms And Conditions
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            About Us
          </div>
          <div className="text-gray-500 hover:text-[#ff8f9c] cursor-pointer">

            Secure Payment
          </div>


        </div>
        <div className=" text-white cursor-pointer items-start py-7 mx-2 ">
          <span className='underline decoration-[#ff8f9c] hover:text-[#ff8f9c]'> CONTACT </span>
          <div><ImLocation
            size={20}
            className="text-gray-500 flex float-left items-start mt-1   "
          /><h1 className=' mx-2 px-3 hover:text-[#ff8f9c]'> 100 Mp Nagar Zone1</h1> <p className='mx-5 hover:text-[#ff8f9c]'>Bhopal Mp 462023</p></div>
          <div><BsTelephone
            size={20}
            className="text-gray-500 flex float-left items-start  "
          /><span className=' px-2 py-2 mx-1 my-1 hover:text-[#ff8f9c]'> 9876541230</span></div>

          <div><MdMessage
            size={20}
            className="text-gray-500 flex float-left items-start my-2 "
          /><span className=' px-2 py-2 my-3 mx-1 hover:text-[#ff8f9c]'> rakeshjaiswal@gmail.com</span></div>


        </div>
      </div>

      <hr className=" bg-gray-900" />
      <div className='text-center text-gray-500 pt-5 pb-5 text-lg bg-[#212121]'>Copyright © rk All Rights Reserved.</div>

    </section>
  );
};

export default Footer;