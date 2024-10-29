import React from 'react';
import Image from '../Image/Image';
import featureOne from '../../assets/featuresPartImg/featuresImage01.jpg';
import winter from '../../assets/image.jpg'
import Paragraph from '../Paragraph';
import Heading from '../Heading';

const Feature = () => {
  return (
    <section className='mt-20'>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8">
          <div className='flex flex-wrap justify-center md:justify-start items-center gap-3 mb-7 border-b border-gray-300 pb-5'>
            <Paragraph className='py-1 px-4 rounded-full ring-1 ring-gray-300 hover:bg-primary duration-100 cursor-pointer' text='Desicription'/>
            <Paragraph className='py-1 px-4 rounded-full ring-1 ring-gray-300 hover:bg-primary duration-100 cursor-pointer' text='Speciflcation'/>
            <Paragraph className='py-1 px-4 rounded-full ring-1 ring-gray-300 hover:bg-primary duration-100 cursor-pointer' text='Reviews'/>
            <Paragraph className='py-1 px-4 rounded-full ring-1 ring-gray-300 hover:bg-primary duration-100 cursor-pointer' text='Shipping'/>
          </div>
          <Heading className='font-bold text-2xl' text='Outstanding Features'/>
          <Paragraph className='text-[#1f1f1f] py-6' text="The garments labeled as committed are products that have been produced using sustainable fibers or processes, reducing their environmental impact. Umino's goal is to support the implementation of practices more committed to the environment"/>

          <ul>
            <li><span className='mr-2' >-</span>Tonal stitching: 98% cotton, 2% elastane.</li>
            <li><span className='mr-2' >-</span>Supple and stretch knit with a rich touch of wool.</li>
            <li><span className='mr-2' >-</span>Model: 6'1", wearing a size M.</li>
            <li><span className='mr-2' >-</span>Caring for your clothes is caring for the environment.</li>
          </ul>

          <h4 className="font-bold text-2xl py-8">Washing Instructions</h4>
          <ul>
            <li>Machine wash max. 30°C. Short spin.</li>
            <li>Iron maximum 110°C.</li>
            <li>Do not bleach.</li>
            <li>Do not dry clean.</li>
            <li>Tumble dry, medium heat.</li>
          </ul>
          <div className="grid grid-cols-12 gap-3 my-5">
            <div className="col-span-4 group overflow-hidden">
              <Image className='group-hover:scale-105 duration-100 w-full h-full object-cover' src={featureOne} alt="Feature image 1" />
            </div>
            <div className="col-span-4 group overflow-hidden">
              <Image className='group-hover:scale-105 duration-100 w-full h-full object-cover' src={winter} alt="Feature image 1" />
            </div>
            <div className="col-span-4 group overflow-hidden">
              <Image className='group-hover:scale-105 duration-100 w-full h-full object-cover' src={featureOne} alt="Feature image 1" />
            </div>
          </div>
          <h4 className="font-bold text-2xl py-8">Washing Instructions</h4>
          <ul>
            <li>Machine wash max. 30°C. Short spin.</li>
            <li>Iron maximum 110°C.</li>
            <li>Do not bleach.</li>
            <li>Do not dry clean.</li>
            <li>Tumble dry, medium heat.</li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;