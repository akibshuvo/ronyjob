
import React, { useEffect, useRef, useState } from 'react'
import { LiaAngleDownSolid,LiaAngleUpSolid } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";
import { TbUser } from "react-icons/tb";
import { FiSearch  } from "react-icons/fi";
import Paragraph from '../Paragraph';
import { FaBars } from "react-icons/fa";

const NavSearch = () => {
  
  const [dropdawon,setDropdawn]= useState(false)

  return (
    <section className='bg-primary md:py-6 py-4'>
      <div className='container mx-auto px-2 '>
        <div className="grid grid-cols-12 items-center">
          <div className="order-1 col-span-6 md:col-span-3">
          <h1 className='text-3xl font-bold'>Molymart</h1>
          <Paragraph className='text-base' text='Making shopping better'/>
          </div>
          <div className="order-3 md:order-2 col-span-12 md:col-span-6 mt-3 md:mt-0">
            <div className='flex w-full bg-white p-1 rounded-md relative ring-1 ring-black cursor-pointer'>
              <div onClick={()=>setDropdawn(!dropdawon)} className='flex items-center gap-2 rounded-md bg-black px-3 md:px2 p-2 text-white'>
              <div className={`${dropdawon ? "block" : "hidden"} transition duration-300 absolute top-12 left-1 shadow-md w-36 rounded bg-black text-white py-3 px-5 z-20`}>
                <ul>
                  <li className='my-2 hover:text-primary'>Category</li>
                  <li className='my-2 hover:text-primary'>Category</li>
                  <li className='my-2 hover:text-primary'>Category</li>
                  <li className='my-2 hover:text-primary'>Category</li>
                  <li className='my-2 hover:text-primary'>Category</li>
                </ul>
              </div>
                <div className='flex md:hidden'>
                    <FaBars/>
                </div>
                <div className='hidden md:flex items-center gap-x-2'>
                  <Paragraph text='All Categories' />
                  {dropdawon ? <LiaAngleUpSolid/> : <LiaAngleDownSolid/>}
                </div>
              </div>
              <input className='text-base w-[80%] py-2 px-5 text-gray-500 rounded-md focus-visible:ring-offset-transparent focus:outline-none' placeholder='Search product here..' type="text" />
              <FiSearch className='font-bold absolute bottom-1/2 translate-y-1/2 cursor-pointer right-4 text-xl'/>
            </div>
          </div>
          <div className="order-2 md:order-2 col-span-6 md:col-span-3 flex justify-end items-center gap-5 font-bold text-xl">
            <div className='flex items-center gap-1 cursor-pointer'>
              <TbUser className='text-2xl md:xl '/>
              <Paragraph className='hidden md:flex' text='Sign in / up'/>
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