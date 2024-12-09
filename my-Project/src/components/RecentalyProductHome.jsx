import React from "react";
import macBook2 from "../assets/macbook2.jpg";
import {
  FaStar,
  FaHeart,
  FaSearch,
  FaSyncAlt,
  FaShoppingCart,
} from "react-icons/fa";

const RecentalyProductHome = () => {
  return (
    <div className="flex justify-center">
      <div className="group relative lg:w-[250px] w-full max-w-[300px] overflow-hidden transition-all duration-300 hover:border-[#0068C8]">
        <a href="#" className="relative">
          <img
            src={macBook2}
            alt="Laptop"
            className="w-full object-contain mx-0 transition-all duration-300 "
          />
          <p className="absolute top-2 left-2 text-[11px] px-2 bg-[#0068C8] text-[#fff] rounded-tr-md rounded-b-md">
            -15%
          </p>
          <p className="absolute top-8 left-2 text-[11px] px-2 bg-red-500 text-[#fff] rounded-tr-md rounded-b-md">
            HOT
          </p>
        </a>

        <div className="absolute translate group-hover:-translate-y-2 translate-y-0 right-0 top-0 flex flex-col items-center gap-3 z-50 opacity-0 group-hover:!opacity-100 p-2 rounded-lg transition duration-500 text-lg">
          <button
            className="bg-slate-100 p-2 rounded-full border"
            aria-label="Add to Wishlist"
          >
            <FaHeart />
          </button>
          <button
            className="bg-slate-100 p-2 rounded-full border"
            aria-label="Quick View"
          >
            <FaSearch />
          </button>
          <button
            className="bg-slate-100 p-2 rounded-full border"
            aria-label="Add to Comapre"
          >
            <FaSyncAlt />
          </button>
          <button
            className="bg-slate-100 p-2 rounded-full border"
            aria-label="Add to Cart"
          >
            <FaShoppingCart />
          </button>
        </div>

        <div className="p-4">
          <div className="flex flex-col">
            <a
              href="#"
              className="inline-flex items-center text-sm text-gray-500"
            >
              Laptops
            </a>
            <a
              href="#"
              className="text-base text-[#000] font-semibold mt-2 hover:text-[#0068C8] line-clamp-2"
            >
              MacBook Pro 13.3"
              <br /> 16GB/512GB Silver
            </a>
          </div>
          <div className="flex text-[#FCC904] mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <div className="mt-2">
            <p className="text-red-600 text-xl font-semibold">
              $1527.00{" "}
              <del className="text-base text-gray-500 font-normal">
                $1795.00
              </del>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentalyProductHome;
