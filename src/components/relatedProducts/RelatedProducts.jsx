import React from 'react'
import Heading from '../Heading'
import ProductSlider from './ProductSlider'

const RelatedProducts = () => {
  return (
    <section className='mt-16'>
      <div className='container mx-auto px-2'>
          <Heading className='font-bold text-3xl' text='Realeted Products'/>
          <ProductSlider/>
      </div>
    </section>
  )
}

export default RelatedProducts