import React from 'react'

import WhishListCard from '../components/WhishListCard'

const WhishList = () => {
  return (
    <div className='p-4 mx-52 '>
      <h1 className='text-2xl font-semibold text-[#000] mb-4'>My Whislist</h1>
      <div className='grid grid-cols-12 gap-4 border-b border-gray-200 py-2'>
        <div className='col-span-6 text-left font-semibold text-[#000] mb-4'>Product name</div>
        <div className='col-span-2 text-left font-semibold text-[#000] mb-4'>Unit price</div>
        <div className='col-span-2 text-left font-semibold text-[#000] mb-4'>Stock status</div>
      </div>
      <div>
        <WhishListCard/>
      </div>
    </div>
  )
}

export default WhishList