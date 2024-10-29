import React from 'react'
import Heading from '../Heading'
import ProductItem from '../relatedProducts/ProductItem'

const Peopel = () => {
  return (
    <section>
        <div className="container mx-auto px-2">
        <Heading className='font-bold text-3xl mt-28' text='People Also Bought'/>
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <ProductItem/>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <ProductItem/>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <ProductItem/>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                    <ProductItem/>
                </div>
            </div>
        </div>


    </section>
  )
}

export default Peopel