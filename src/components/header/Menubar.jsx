import React from 'react'
import { LiaAngleDownSolid } from "react-icons/lia";
import Paragraph from '../Paragraph';
const Menubar = () => {
  return (
    <nav className='py-4 border-b border-gray-300'>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 items-center font-semibold">
          <div className="col-span-6">
            <ul className='flex items-center gap-5'>
              <li className='flex cursor-pointer items-center gap-1'>Demo <LiaAngleDownSolid/></li>
              <li className='cursor-pointer'>Shop</li>
              <li className='cursor-pointer'>Product</li>
              <li className='cursor-pointer'>Blog</li>
              <li className='flex cursor-pointer items-center gap-1'>Pages <LiaAngleDownSolid/></li>
            </ul>
          </div>
          <div className="col-span-6 flex justify-end gap-4">
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