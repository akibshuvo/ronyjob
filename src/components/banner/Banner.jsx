import React, { useEffect, useState } from 'react';
import { FaStar, FaDollarSign, FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter,FaCodeCompare } from "react-icons/fa6";
import { CiInstagram, CiHeart } from "react-icons/ci";
import Paragraph from '../Paragraph';
import Heading from '../Heading';
import BannerSlider from './BannerSlider';
import Card from './Card';

const Banner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 12, minutes: 45, seconds: 19 });

  useEffect(() => {
    const countdown = () => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        // Calculate the new time
        if (seconds > 0) {
          return { days, hours, minutes, seconds: seconds - 1 };
        }
        if (minutes > 0) {
          return { days, hours, minutes: minutes - 1, seconds: 59 };
        }
        if (hours > 0) {
          return { days, hours: hours - 1, minutes: 59, seconds: 59 };
        }
        if (days > 0) {
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        // If time is up
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    };

    // Update the countdown every second
    const intervalId = setInterval(countdown, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='mt-7'>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Banner Slider */}
          <div className="col-span-1 my-4 lg:my-0 md:col-span-12 lg:col-span-5">
            <BannerSlider />
          </div>

          {/* Content Area */}
          <div className="col-span-1 my-4 md:my-0 md:col-span-6 lg:col-span-4  px-2">
            <div className='flex items-center gap-2'>
              <div className='flex text-yellow-500'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className='text-text_primary' />
              </div>
              <Paragraph text='(98 Reviews)' />
              <span className='text-text_primary'>|</span>
              <Paragraph className='text-secoundary font-bold' text='500+ Sold' />
            </div>
            <Heading className='text-xl md:text-2xl font-bold' text='Charms Charisma heavy winter full sleeve jacket with hoodie for women made from wolves fur and buffalo bones' />
            <Paragraph className='text-text_primary' text='The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Molys goal is to support the implemented.' />
            <div className='flex items-center justify-between p-3 ring-1 text-secoundary font-semibold ring-secoundary rounded-sm my-4 bg-[#F6EEEF]'>
              <Paragraph text='Hurry up! Sale ends in..' />
              <Paragraph text={`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`} />
            </div>
            <div className='flex items-center gap-4 my-4'>
              <div className="flex items-center text-3xl md:text-4xl">
                <FaDollarSign />
                <h1 className='font-bold'>100.00</h1>
              </div>
              <del className='text-text_primary text-xl md:text-2xl '>$129.99</del>
              <span className='py-1 px-3 rounded-full bg-primary '>Save 15%</span>
            </div>
            <div className='flex gap-3 my-4 items-center font-semibold'>
              <Paragraph text='Color' />
              <div className='p-1 ring-1 ring-transparent hover:ring-black w-7 h-7 rounded-full relative flex justify-center items-center duration-100'>
                <span className='w-6 h-6 absolute bg-[#A1ACE9] rounded-full'></span>
              </div>
              <div className='p-1 ring-1 ring-transparent hover:ring-black w-7 h-7 rounded-full relative flex justify-center items-center duration-100'>
                <span className='w-6 h-6 absolute bg-[#E2ECDE] rounded-full'></span>
              </div>
              <span className='w-6 h-6 rounded-full ring-1 ring-text_primary'></span>
            </div>
            <div className='flex gap-3 items-center font-semibold border-b border-gray-300 py-4'>
              <Paragraph text='Size' />
              <div className="py-1 px-3 cursor-pointer ring-1 ring-text_primary hover:ring-black bg-transparent hover:bg-primary duration-100">38</div>
              <div className="py-1 px-3 cursor-pointer ring-1 ring-text_primary hover:ring-black bg-[#F3F3F3] hover:bg-primary duration-100">40</div>
              <div className="py-1 px-3 cursor-pointer ring-1 ring-text_primary hover:ring-black bg-transparent hover:bg-primary duration-100">42</div>
              <div className="py-1 px-3 cursor-pointer ring-1 ring-text_primary hover:ring-black bg-transparent hover:bg-primary duration-100">43</div>
              <div className="py-1 px-3 cursor-pointer ring-1 ring-text_primary hover:ring-black bg-transparent hover:bg-primary duration-100">44</div>
              <Paragraph className='border-b-2 border-text_primary' text='Size Guide' />
            </div>
            <div className='py-4 border-b border-gray-300'>
              <p><span className='text-text_primary'>SKU:</span> UTD7802574</p>
              <div className="flex">
                <p className='text-text_primary pr-5'>Categories</p>
                <Paragraph text='Fashion,Winter,Women,New Arrivals,Flash Sales,Special Offer,Hoodie' />
              </div>
            </div>
            <div className='flex items-center gap-5 text-gray-500 text-xl my-5'>
              <Paragraph text='Share' />
              <FaFacebookF />
              <FaXTwitter />
              <CiInstagram />
              <FaTiktok />
              <FaWhatsapp />
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-1 rounded-full py-1 px-4 ring-1 ring-gray-300'>
                <CiHeart />
                <Paragraph text='Add to Wishlist' />
              </div>
              <div className='flex items-center gap-1 rounded-full py-1 px-4 ring-1 ring-gray-300'>
                <FaCodeCompare />
                <Paragraph text='Add to Compare' />
              </div>
            </div>
          </div>

          {/* Card Component Start */}
          <div className="col-span-1 md:col-span-6 lg:col-span-3">
            <Card />
          </div>
          {/* Card End */}
        </div>
      </div>
    </section>
  );
}

export default Banner;