import React from 'react'
import ProductDesign from '../productDesign/ProductDesign'

const index = () => {
  return (
    <div className='container mx-auto mt-16'>
        <h2 className='font-bold text-3xl'>Realeted Products</h2>
        <div className='flex justify-between gap-x-8'>
        <ProductDesign/>
        <ProductDesign/>
        <ProductDesign/>
        <ProductDesign/>
        </div>


        <h2 className='font-bold text-3xl mt-28'>People Also Bought</h2>
        <div className='flex justify-between gap-x-8'>
        <ProductDesign/>
        <ProductDesign/>
        <ProductDesign/>
        <ProductDesign/>
        </div>


    </div>
  )
}

export default index