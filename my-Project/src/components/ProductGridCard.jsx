import React from 'react'
import macBook2 from '../assets/macbook2.jpg'

import { FaStar } from "react-icons/fa";

const ProductGridCard = () => {
  return (
    <div className=''>
      <div className="p-4 lg:hover:border-1 lg:hover:border-[#0068C8] max-w-72 lg:hover:shadow-2xl lg:rounded-lg text-[#fff] lg:hover:text-gray-700 transition duration-400">
        <div className="flex items-center justify-center lg:mb-4 relative">
          <div className="absolute top-2 left-0 bg-[#0068C8] text-[#fff] px-1 rounded-b rounded-r text-sm py-1">
            45%
          </div>
          <img
            src={macBook2}
            alt="ui/ux review check"
            className="lg:max-w-64 max-w-40 lg:h-auto"
          />
        </div>

        <div className="lg:mb-2 flex items-center justify-between">
          <div variant="h5" className="font-medium text-gray-600 text-sm lg:text-base">
            Smart Home
          </div>
        </div>
        <div className="text-black font-semibold text-sm lg:text-base">
          4G LTE Unlocked Home Base Wireless Hotspot
        </div>
        <div className="my-2.5 flex gap-1">
          <FaStar className="h-4 w-4  fill-yellow-600 text-yellow-600" />
          <FaStar className="h-4 w-4  fill-gray-400 text-gray-400" />
          <FaStar className="h-4 w-4  fill-gray-400 text-gray-400" />
          <FaStar className="h-4 w-4  fill-gray-400 text-gray-400" />
          <FaStar className="h-4 w-4  fill-gray-400 text-gray-400" />
        </div>
        <div className="flex flex-wrap gap-2 items-end">
          <div className="text-red-600 font-bold text-base lg:text-xl">$29.99</div>
          <div className="text-gray-500 font-bold line-through">$54.63</div>
        </div>
        <button className="lg:my-3  text-sm lg:text-base font-bold lg:py-3 py-2 w-full flex items-center text-[#000] hover:text-[#fff] justify-center border-1 border-[#0068C8] hover:bg-[#0068C8] transition duration-250 rounded-lg">
          Add to Cart
        </button>
        <div className="text-base sm:block">
          RAM: 16GB
          <br />
          Hard Drive: 265GB SSD
          <br />
          Screen Size: 13.3 inches
        </div>
      </div>
    </div>
  )
}

export default ProductGridCard