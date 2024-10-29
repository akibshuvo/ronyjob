import React from 'react'
import { LiaAngleDownSolid } from "react-icons/lia";
import Paragraph from '../Paragraph';
const Menubar = () => {
  return (
    <nav className='py-4 border-b border-gray-300'>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-12 items-center font-semibold">
          <div className="col-span-12 md:col-span-6">
            <ul className='flex items-center justify-center md:justify-start gap-5'>
            <div className='flex cursor-pointer items-center gap-1 relative group'>Demo <LiaAngleDownSolid/>
                <div className='absolute top-6 left-0 p-4 hidden group-hover:block bg-white shadow-md z-20 rounded'>
                  <ul>
                    <li className='my-2 hover:text-secoundary'>dropdawon</li>
                    <li className='my-2 hover:text-secoundary'>dropdawon</li>
                    <li className='my-2 hover:text-secoundary'>dropdawon</li>
                    <li className='my-2 hover:text-secoundary'>dropdawon</li>
                  </ul>
                </div>
              </div>
              <li className='cursor-pointer'>Shop</li>
              <li className='cursor-pointer'>Product</li>
              <li className='cursor-pointer'>Blog</li>
              <div className='flex cursor-pointer items-center gap-1 relative group'>Pages <LiaAngleDownSolid/>
                <div className='absolute top-6 left-0 p-4 hidden group-hover:block bg-white shadow-md z-20 rounded'>
                  <ul>
                    <li className='my-2 hover:text-secoundary'>dropdawon</li>
                    <li className='my-2 hover:text-secoundary'>dropdawon</li>
                    <li className='my-2 hover:text-secoundary'>dropdawon</li>
                    <li className='my-2 hover:text-secoundary'>dropdawon</li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
          <div className="col-span-12 mt-3 md:mt-0 md:col-span-6 flex md:justify-end justify-center gap-4">
            <Paragraph text='Compare'/>
            <span className='text-text_primary'>|</span>
            <div className='flex items-center gap-2'>
              <Paragraph text='Wishlist'/>
              <span className='w-6 h-6 flex justify-center items-center rounded-full text-white bg-secoundary'>3</span>
            </div>
            <span className='text-text_primary'>|</span>
            <Paragraph text='Track Order'/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menubar