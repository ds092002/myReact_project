import React from 'react'
import { FaStar } from "react-icons/fa";
import macBook2 from '../assets/macbook2.jpg'

const HomeHrProduct = () => {
  return (
    <div>
    <div className="flex flex-row items-center rounded-md mt-2">
      <div className="">
        <a href="">
          <img
            src={macBook2}
            alt="Laptop"
            className="lg:h-56 w-full h-32 object-cover"
          />
        </a>
      </div>
      <div>
        <div className="">
          <p className="text-sm text-[#848484] mb-1.5">
            Laptops
          </p>
          <p className='text-[#000] font-semibold mb-1.5'>
            MackBook Pro 13.3"<br />
            16GB/512GB Silver
          </p>
          <div className="flex text-sm lg:text-base text-[#FCC904] mb-1.5">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <div>
            <p className="lg:text-xl text-base text-red-600 font-semibold">$1,527.00<del className="text-sm lg:text-base text-gray-500 ml-1.5">$1,795.00</del></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeHrProduct