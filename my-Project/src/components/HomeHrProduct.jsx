import React from 'react';
import { FaStar } from 'react-icons/fa'; // Importing the FaStar icon
import macBook2 from '../assets/macbook2.jpg'; // Path to your image

const HomeHrProduct = () => {
  return (
    <div className="flex flex-row items-center mt-4 bg-white border">
      {/* Product Image */}
      <div className="w-1/2 border"> {/* Decrease width of image container */}
        <a href="">
          <img
            src={macBook2}
            alt="Laptop"
            className="rounded-md" // Increase image width and height
          />
        </a>
      </div>

      {/* Product Details */}
      <div className="w-2/3 p-4 border"> {/* Decrease text container width */}
        <p className="text-sm text-[#848484] mb-1.5">Laptops</p>
        <p className="text-[#000] font-semibold text-base mb-1.5 break-words">
          MacBook Pro 13.3" 16GB/512GB Silver
        </p>

        {/* Star Rating */}
        <div className="flex text-sm lg:text-base text-[#FCC904] mb-1.5">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Pricing */}
        <p className="text-lg font-semibold text-red-600 mb-2">
          $1,527.00
          <del className="text-sm text-gray-500 ml-2">$1,795.00</del>
        </p>
      </div>
    </div>
  );
};

export default HomeHrProduct;
