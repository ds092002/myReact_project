import React from "react";
import macBook2 from "../assets/macbook2.jpg";
import { FaStar } from "react-icons/fa";

const DailyBestSell = () => {
  return (
    <div className="w-[200px]">
      <div className="hover:border-1 h-[210px] hover:border-[#0068C8] transition duration-300 rounded-lg flex justify-center items-center relative group">
        <a href="" className="relative w-full h-full">
          <img
            src={macBook2}
            alt="Laptop"
            className="h-full w-full rounded-t-md object-cover"
          />
          {/* Discount and Hot Tags */}
          <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-white rounded-tr-md rounded-b-md">
            -15%
          </p>
          <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">
            HOT
          </p>
        </a>

        {/* Hover Icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 bg-black/40 rounded-lg transition-opacity duration-300">
          <button
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            aria-label="Add to Wishlist"
          >
            ❤️
          </button>
          <button
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            aria-label="Quick View"
          >
            🔍
          </button>
          <button
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            aria-label="Add to Compare"
          >
            🌀
          </button>
          <button
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            aria-label="Add to Cart"
          >
            🛒
          </button>
        </div>
      </div>

      <div className="p-2">
        <div className="flex flex-col">
          <a href="" className="inline-flex items-center text-sm text-gray-500">
            Laptops
          </a>
          <a
            href=""
            className="text-base text-gray-900 mt-2 hover:text-[#0068C8]"
          >
            MacBook Pro 13.3"
            <br />
            16GB/512GB Silver
          </a>
        </div>
        <div className="flex text-[#FCC904]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <div className="mt-2">
          <p className="text-red-600 text-xl font-semibold">
            $1527.00{" "}
            <del className="text-base text-gray-500 font-normal">$1795.00</del>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DailyBestSell;
