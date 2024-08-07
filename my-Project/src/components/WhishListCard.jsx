import React from 'react';

import s23 from '../assets/S23-400x400.jpg'

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa"; 
import { BiSolidEnvelope } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";


const Wishlist = () => {
  return (
    <div>
      <div className='grid grid-cols-12 gap-4 py-4 border-b mb-5 border-gray-200 items-center'>
        <a href='' className='col-span-6 flex items-center text-[#000]'>
          <img src={s23} alt="" className='w-24 h-24 object-cover mr-4' />
          <span>Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB</span>
        </a>
        <div className='col-span-2 text-left items-center flex space-x-2'>
          <span className='text-red-500 font-semibold'>$699.99</span>
          <del className='text-[#848484]'>$949.99</del>
        </div>
        <div className='col-span-2 text-left text-green-500'>
          ✓ In Stock
        </div>
        <div className='col-span-2 flex space-x-4'>
          <button
            type="button"
            className="rounded-md hover:bg-[#fff] px-5 py-2 text-base font-semibold hover:text-[#000] border-1 border-[#0068C8] text-[#fff] bg-[#0068C8] transition duration-300"
          >
            Add to Cart
          </button>
          <button className="text-gray-500">✕</button>
        </div>
      </div>
      <div className='flex items-center'>
        <h6 className='text-[#000] font-semibold'>SHARE ON:</h6>
        <div className='flex space-x-2 ml-3'>
        <a href="" className='text-[#1877F2] hover:text-[#848484] text-3xl'><FaFacebook/></a>
        <a href="" className='text-[#1DA1F2] hover:text-[#848484] text-3xl'><AiFillTwitterCircle/></a>
        <a href="" className='text-[#E60023] hover:text-[#848484] text-3xl'><FaPinterest/></a>
        <a href="" className='text-[#fcc904] hover:text-[#848484] text-3xl'><BiSolidEnvelope/></a>
        <a href="" className='text-[#25D366] hover:text-[#848484] text-3xl'><FaWhatsapp/></a>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
