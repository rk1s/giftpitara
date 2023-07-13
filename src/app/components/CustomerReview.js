import React from 'react';
import { MdStar } from 'react-icons/md';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';

const page = () => {
  return (
    <section className="mx-10 lg:mx-20">
      <div className=" bg-[#ff8f9c] rounded-lg">
        <h1 className=" font-bold text-2xl ml-10  text-white">
          Customers Stories
        </h1>
        <h1 className="ml-10 font-light text-white">
          (Rated 4.8/5 based on 125523 ratings)
        </h1>
        <div className="md:grid-cols-3  grid grid-cols-1   mx-5 gap-2">
            {/* first div start */}
          <div className=" border-2 border-gray-600 rounded-lg mx- my-5 bg-white">
            <div className="  my-2 border-1 rounded-xl flex justify-center">
              <img
                src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/igp_Plants_d_categories_20220127.jpg"
                className=" h-20 w-max"
                alt="Picture of the author"
              />
            </div>
            <div className="flex  justify-center">
              <span className="text-yellow-400  text-xl  flex">
                <MdStar />
                <MdStar />
                <MdStar /> <MdStar />
                <MdStar />
              </span>
             <div className=" justify-center text-gray-500 font-light">| 16 May 2023</div>
            </div>
            <div className="ml-4   text-gray-500">
              <RiDoubleQuotesL size={30} />
            </div>
            <div className="py-6 text-center text-gray-500  font-sans -mt-11">
              Well done
            </div>
            <div className="float-right mr-4   text-gray-500">
              <RiDoubleQuotesR size={30} />
            </div>
            <div className=" text-center  mt-8 my-3  text-gray-500  font-sans">
              Rakesh Jaiswal
            </div>
          </div>
          {/* first div end */}
          {/* second div start */}
           <div className=" border-2 border-gray-600 rounded-lg mx- my-5 bg-white">
            <div className="  my-2 border-1 rounded-xl flex justify-center">
              <img
                src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/igp_Plants_d_categories_20220127.jpg"
                className=" h-20 w-max"
                alt="Picture of the author"
              />
            </div>
            <div className="flex  justify-center">
              <span className="text-yellow-400  text-xl  flex">
                <MdStar />
                <MdStar />
                <MdStar /> <MdStar />
                <MdStar />
              </span>
             <div className=" justify-center text-gray-500 font-light">| 16 May 2023</div>
            </div>
            <div className="ml-4   text-gray-500">
              <RiDoubleQuotesL size={30} />
            </div>
            <div className="py-6 text-center text-gray-500  font-sans -mt-11">
              Well done
            </div>
            <div className="float-right mr-4   text-gray-500">
              <RiDoubleQuotesR size={30} />
            </div>
            <div className=" text-center  mt-8 my-3  text-gray-500  font-sans">
              Rakesh Jaiswal
            </div>
          </div>
          {/* second div end */}
          {/* third div start */}
           <div className=" border-2 border-gray-600 rounded-lg mx- my-5 bg-white">
            <div className="  my-2 border-1 rounded-xl flex justify-center">
              <img
                src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/igp_Plants_d_categories_20220127.jpg"
                className=" h-20 w-max"
                alt="Picture of the author"
              />
            </div>
            <div className="flex  justify-center">
              <span className="text-yellow-400  text-xl  flex">
                <MdStar />
                <MdStar />
                <MdStar /> <MdStar />
                <MdStar />
              </span>
             <div className=" justify-center text-gray-500 font-light">| 16 May 2023</div>
            </div>
            <div className="ml-4   text-gray-500">
              <RiDoubleQuotesL size={30} />
            </div>
            <div className="py-6 text-center text-gray-500  font-sans -mt-11">
              Well done
            </div>
            <div className="float-right mr-4   text-gray-500">
              <RiDoubleQuotesR size={30} />
            </div>
            <div className=" text-center  mt-8 my-3  text-gray-500  font-sans">
              Rakesh Jaiswal
            </div>
          </div>
          {/* third div end */}
        </div>
      </div>
    </section>
  );
};

export default page;