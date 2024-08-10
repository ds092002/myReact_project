import React from 'react'
import macBook2 from '../assets/macbook2.jpg'

import { FaStar } from "react-icons/fa";

const ProductGridCard = () => {
  return (
    <div>
   <div className="p-4 hover:border-2 hover:border-blue-700 max-w-64 rounded-lg  text-[#fff] hover:text-gray-700">
      <div className="flex items-center justify-center mb-8 relative">
        <div className="absolute top-2 left-0 bg-blue-900 text-[#fff] px-2 rounded-lg text-sm py-1">
          45%
        </div>
        <img
          src={macBook2}
          alt="ui/ux review check"
          className="max-w-48"
        />
      </div>

      <div className="mb-3 flex items-center justify-between">
        <div variant="h5" className="font-medium text-gray-600 text-md">
          Smart Home
        </div>
      </div>
      <div className="text-black font-sm">
      4G LTE Unlocked Home Base Wireless Hotspot
      </div>
      <div className="my-3 flex gap-1">
        <FaStar className="h-4 w-4  fill-yellow-600 text-yellow-600" />
        <FaStar className="h-4 w-4  fill-gray-400 text-gray-400" />
        <FaStar className="h-4 w-4  fill-gray-400 text-gray-400" />
        <FaStar className="h-4 w-4  fill-gray-400 text-gray-400" />
        <FaStar className="h-4 w-4  fill-gray-400 text-gray-400" />
      </div>
      <div className="flex gap-2 items-end">
        <div className="text-red-900 text-xl">$29.99</div>
        <div className="text-gray-500 font-bold line-through">$54.63</div>
      </div>
      <button className="my-4 h-14 w-full flex items-center text-[#000] hover:text-[#fff] justify-center border-1 border-[#0068C8] hover:bg-[#0068C8] transition duration-250 rounded-lg">
        Add to Cart
      </button>
      <div className="">
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