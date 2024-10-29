import React from 'react'
import { LiaAngleRightSolid } from "react-icons/lia";
import Paragraph from '../Paragraph'

const NavigateMenu = () => {
  return (
    <section className='py-7 bg-[#F1F4F0]'>
        <div className="container mx-auto px-2">
            <div className='flex items-center justify-between  lg:justify-center'>
                <div className='flex items-center gap-3 text-text_primary'>
                    <Paragraph className='font-semibold cursor-pointer hover:text-black duration-100' text='Home'/>
                    <LiaAngleRightSolid/>
                    <Paragraph className='font-semibold cursor-pointer hover:text-black duration-100' text='Fashion'/>
                    <LiaAngleRightSolid/>
                    <Paragraph className='font-semibold cursor-pointer hover:text-black duration-100' text='Women'/>
                    <LiaAngleRightSolid/>
                    <Paragraph className='font-semibold cursor-pointer hover:text-black duration-100' text='Winter'/>
                    <LiaAngleRightSolid/>
                    <Paragraph className='hidden md:block font-semibold cursor-pointer' text='Charms charisma heavy winter full sleeve jacket with hoodie for women'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NavigateMenu