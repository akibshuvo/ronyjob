
import React, { useEffect, useRef, useState } from 'react'
import { LiaAngleDownSolid } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";
import { TbUser } from "react-icons/tb";
import { FiSearch  } from "react-icons/fi";
import Heading from '../Heading';
import Paragraph from '../Paragraph';

const NavSearch = () => {
  

  useEffect(()=>{
   
  },[])

  return (
    <section className='bg-primary py-6'>
      <div className='container mx-auto '>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-3">
            <Heading className='text-2xl font-bold cursor-pointer' text='Molymart'/>
          </div>
          <div className="col-span-6">
            <div className='flex w-full bg-white p-1 rounded-md relative ring-1 ring-black cursor-pointer'>
              <div className='flex items-center gap-2 rounded-md bg-black p-2 text-white'>
                <Paragraph text='All Categories' />
                <LiaAngleDownSolid/>
              </div>
              <input className='text-base w-[80%] py-2 px-5 text-gray-500 rounded-md focus-visible:ring-offset-transparent' placeholder='Search product here..' type="text" />
              <FiSearch className='font-bold absolute bottom-1/2 translate-y-1/2 cursor-pointer right-4 text-xl'/>
            </div>
          </div>
          <div className="col-span-3 flex justify-end items-center gap-5 font-bold text-xl">
            <div className='flex items-center gap-1 cursor-pointer'>
              <TbUser/>
              <Paragraph text='Sign in / up'/>
            </div>
            <div className='flex items-center cursor-pointer'>
              <div className='flex items-center gap-1'>
                <IoCartOutline/>
                <span>0</span>
              </div>
              <span className='text-gray-500 text-base px-2'>|</span>
              <Paragraph text='$0.00 '/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavSearch