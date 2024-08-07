import React from 'react'

import Cartcard from '../components/Cartcard'

const Cart = () => {
  return (
    <div className='flex'>
    <div className='p-4 mx-52 w-2/4'>
      <h1 className='text-2xl font-semibold text-[#000] mb-4'>Shopping Cart</h1>
      <div className='grid grid-cols-12 gap-4 border-b border-gray-200 py-2'>
        <div className='col-span-6 text-left font-semibold text-[#000] mb-4'>Product</div>
        <div className='col-span-2 text-left font-semibold text-[#000] mb-4'>Price</div>
        <div className='col-span-2 text-left font-semibold text-[#000] mb-4'>Quantity</div>
        <div className='col-span-2 text-left font-semibold text-[#000] mb-4'>Suntotal</div>
      </div>
      <div>
        <Cartcard/>
      </div>
    </div>
    </div>
  )
}

export default Cart