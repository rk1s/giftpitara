"use client";
import {useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const carosel = () => {

const slides = [
   {
      url:'https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/birthday_d_igp_banner_20221227.jpg '
    },
    {
      url: 'https://5387157.fs1.hubspotusercontent-na1.net/hubfs/5387157/3.0%20Feature%20Images%201000%20x%20500%20px/Blog/Choose%20WedgewoodWeddings.png'
    },
    {
      url: 'https://images.unsplash.com/photo-1680695583543-7c8ddeb520ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
   
    {
      url: 'https://plus.unsplash.com/premium_photo-1679245158398-aa2e2822c115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      url: 'https://amazinggiftsidea.com/wp-content/uploads/2023/01/Birthday-1.jpg'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 :currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className=" grid grid-cols-1 mx-10 lg:mx-20">
    <div className=" md:h-[300px] lg:h-[500px] xl:h-[600px] w-full m-auto py-5">
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}  className="max-w-full h-64 lg:h-full xl:h-full 2xl:h-full rounded-2xl bg-center bg-cover duration-700 object-cover"></div>
     <div className=" group-hover:block absolute top-[50%] sm:top-[45%] lg:top-[100%] xl:top-[95%]  left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
     </div>
     <div className=" group-hover:block absolute top-[50%] sm:top-[45%] lg:top-[100%] xl:top-[95%]  right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <BsChevronCompactRight onClick={nextSlide} size={30} />
     </div> 
     <div className="flex top-4 justify-center py-2 text-2xl">
      {slides.map((slide, slideIndex) => (
        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`cursor-pointer ${slideIndex === currentIndex ? 'text-blue-600': ''}`}><RxDotFilled /></div>
      ))}
     </div>
    </div>
    </div>
  );
};
export default carosel;
