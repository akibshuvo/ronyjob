import React from 'react'
import Paragraph from '../Paragraph'
import {FaFacebookF,FaTiktok,FaWhatsapp   } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import {FaXTwitter  } from "react-icons/fa6";
import {CiInstagram} from "react-icons/ci";
import Heading from '../Heading';

const Footer = () => {
  return (
    <footer className='border-b border-gray-300 py-16'>
    <div className='container mx-auto px-2'>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <div>
            <h1 className='text-3xl font-bold'>Molymart</h1>
            <Paragraph className='text-base' text='Making shopping better'/>
          </div>
          <Paragraph className='text-text_primary w-full  lg:w-[60%] mt-5' text='Breaking the barrier bettween customers and business with a service facused ecommerce all around the world.'/>
          <div className='flex items-center gap-5 text-gray-500 text-xl my-5'>
            <FaFacebookF/>
            <FaXTwitter/>
            <CiInstagram />
            <FaTiktok />
            <FaWhatsapp />
          </div>
          <Paragraph text='Helpline -'/>
          <div className='flex items-center gap-2 text-2xl font-bold'>
            <MdOutlinePhone />
            <Heading text='(123) 456 789'/>
          </div>
          <Paragraph text='Email: support@molymart.com'/>
        </div>
        <div className=" col-span-12 md:col-span-6">
        <div className='flex justify-between items-center'>
          <div>
            <h4 className='font-semibold text-xl mb-4'>Pages</h4>
            <ul>
              <li className='my-2'>About</li>
              <li className='my-2'>Team</li>
              <li className='my-2'>Blogs</li>
              <li className='my-2'>Order Tracking</li>
              <li className='my-2'>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-xl my-4'>Others</h4>
            <ul>
              <li className='my-2'>Affiliate</li>
              <li className='my-2'>vouchers</li>
              <li className='my-2'>Shiping & Delivary</li>
              <li className='my-2'>Brands</li>
              <li className='my-2'>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-xl  my-4'>Information</h4>
            <ul>
              <li className='my-2'>FAQs</li>
              <li className='my-2'>Shipping & Delivary</li>
              <li className='my-2'>Return & Exchange</li>
              <li className='my-2'>Refund Policy</li>
              <li className='my-2'>Term & Condition</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer