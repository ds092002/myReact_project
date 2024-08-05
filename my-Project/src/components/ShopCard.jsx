import React from 'react'
import { FaStar } from "react-icons/fa6";
import macBook2 from '../assets/macbook2.jpg'

const ProductOverviewTwo = () => {
  return (
    <section className="">
      <div className="">
        <div className="mx-auto max-w-3xl flex flex-wrap items-center ">
          <img
            alt="macbook"
            className="h-32 w-32 rounded object-contain lg:h-64 lg:w-1/2"
            src={macBook2}
          />
          <div className="mt-2 w-full lg:mt-0 lg:w-1/2">
            <h2 className="text-[12px] tracking-widest text-gray-500 hover:text-[#0068C8]">Laptops</h2>
            <h1 className="my-2 text-lg text-[#000] hover:text-[#0068C8] ">MacBook Pro 13.3" 16GB/512GB Silver</h1>
            <div className="my-2 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} className="text-yellow-300"/>
                ))}
              </span>
            </div>
            <h4 className="title-font text-lg font-bold text-red-500">$1,527.00 <del className='text-base text-gray-400'>$1,795.00</del></h4>
            <ul className="leading-relaxed text-[12px] list-disc text-gray-500">
                <li>RAM: 16GB</li>
                <li>HARD Drive: 256GB SSD</li>
                <li>Screen Size: 13.3 inches</li>
            </ul>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="rounded-md bg-[#fff] px-5 py-2.5 text-base font-semibold text-[#000] border-1 border-[#0068C8] hover:text-white hover:bg-[#0068C8] transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
        <hr className='mx-28 w-full'/>
      <div className="">
        <div className="mx-auto max-w-3xl flex flex-wrap items-center ">
          <img
            alt="macbook"
            className="h-32 w-32 rounded object-contain lg:h-64 lg:w-1/2"
            src={macBook2}
          />
          <div className="mt-2 w-full lg:mt-0 lg:w-1/2">
            <h2 className="text-[12px] tracking-widest text-gray-500 hover:text-[#0068C8]">Laptops</h2>
            <h1 className="my-2 text-lg text-[#000] hover:text-[#0068C8] ">MacBook Pro 13.3" 16GB/512GB Silver</h1>
            <div className="my-2 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} className="text-yellow-300"/>
                ))}
              </span>
            </div>
            <h4 className="title-font text-lg font-bold text-red-500">$1,527.00 <del className='text-base text-gray-400'>$1,795.00</del></h4>
            <ul className="leading-relaxed text-[12px] list-disc text-gray-500">
                <li>RAM: 16GB</li>
                <li>HARD Drive: 256GB SSD</li>
                <li>Screen Size: 13.3 inches</li>
            </ul>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="rounded-md bg-[#fff] px-5 py-2.5 text-base font-semibold text-[#000] border-1 border-[#0068C8] hover:text-white hover:bg-[#0068C8] transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <hr className='mx-28 w-full'/>
      </div>
    </section>
  )
}

export default ProductOverviewTwo;