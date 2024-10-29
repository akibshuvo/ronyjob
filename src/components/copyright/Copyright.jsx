import React from 'react'
import Paragraph from '../Paragraph'
import Image from '../Image/Image'
import img2 from '../../assets/card2.png'

const Copyright = () => {
  return (
    <div className='py-5'>
        <div className="container mx-auto px-2">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 text-center md:text-start mb-3 md:mb-0">
                    <Paragraph text='@Molymart.All rights reserved'/>
                </div>
                <div className="col-span-12 justify-center md:col-span-6 flex md:justify-end gap-1">
                    <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
                    <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
                    <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
                    <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
                    <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
                    <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
                    <Image className='w-10 h-7 object-cover ring-1 ring-gray-300 p-1' src={img2} alt='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Copyright