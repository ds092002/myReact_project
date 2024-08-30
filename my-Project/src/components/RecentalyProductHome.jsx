import React from 'react'
import { FaStar } from "react-icons/fa";
import macBook2 from '../assets/macbook2.jpg'

const RecentalyProductHome = () => {
  return (
    <div>
        <div className="border">
              <div className="lg:hover:border-1 lg:w-[250px] lg:h-[280px] lg:hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center">
                <a href="" className="relative">
                  <img src={macBook2} alt="Laptop" className="h-full w-full rounded-t-md object-contain mx-0" />
                  <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">-15%</p>
                  <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">HOT</p>
                </a>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <a href="" className="inline-flex items-center text-sm text-gray-500">Laptops</a>
                  <a href="" className="text-base text-[#000] font-semibold mt-2 hover:text-[#0068C8]">MacBook Pro 13.3"<br />16GB/512GB Silver</a>
                </div>
                <div className="flex text-[#FCC904]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-red-600 text-xl font-semibold">$1527.00 <del className="text-base text-gray-500 font-normal">$1795.00</del></p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default RecentalyProductHome