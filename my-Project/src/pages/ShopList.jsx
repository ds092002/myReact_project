import React from 'react'

import Filter from '../components/Filter'
import MultiCardCarousel from '../components/CardSliderIcons'
import { ProductOverviewTwo } from '../components/ShopCard'



const ShopList = () => {
  return (
    <div className='mx-56'>
      <MultiCardCarousel/>
      <div className='mt-24'>
        <Filter/>
      </div>
      <div>
        <ProductOverviewTwo/>
      </div>
    </div>
  )
}

export default ShopList