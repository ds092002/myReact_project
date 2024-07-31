import React from 'react'

import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { ImPinterest2 } from "react-icons/im";

import footer from '../assets/asset 17.png'


const Footer = () => {
  return (
    <div>
        <footer class="text-white px-8 py-6 bg-[#1B1B1B]">
    <div class=" grid grid-cols-1 md:grid-cols-4 mx-20">
        <div class="mb-8 md:mb-0 mx-20 border-2">
            <h3 class="text-lg font-bold mb-3">Contact Us</h3>
            <p class="mb-1">Need Help? Call Us:</p>
            <p class="mb-1"><a href="tel:+08 9229 8228" class="hover:text-[#0068C8] text-2xl font-bold text-gray-50">+08 9229 8228 </a></p>
            <p class="mb-1">Find a location nearest you.</p>
            <p className='mb-1'>see <a href="" className='underline hover:text-[#0068C8] text-gray-50'>Our Stores</a></p>
            <p><a href="mailto:Support1234@Ecomall.com"
                    class="hover:text-[#0068C8] text-gray-50">Support1234@Ecomall.com</a></p>
        </div>
        <div class="mb-8 md:mb-0 border-2 mx-20">
            <h3 class="text-lg font-bold mb-4 ">About Us</h3>
            <ul className='border-1 px-1'>
                <li><a href="#" class="hover:text-[#0068C8] text-gray-50">About Us</a></li>
                <li><a href="#" class="hover:text-[#0068C8] text-gray-50">News & Blog</a></li>
                <li><a href="#" class="hover:text-[#0068C8] text-gray-50">Brands</a></li>
                <li><a href="#" class="hover:text-[#0068C8] text-gray-50">Press Center</a></li>
                <li><a href="#" class="hover:text-[#0068C8] text-gray-50">Advertising</a></li>
                <li><a href="#" class="hover:text-[#0068C8] text-gray-50">Investors</a></li>
            </ul>
        </div>
        <div class="mb-8 md:mb-0 border-2 mx-20">
            <h3 class="text-lg font-bold mb-4">Order</h3>
            <ul className='border-1 px-1'>
                <li><a href="#" class="hover:text-[#0068C8] text-gray-50">Check Order</a></li>
                <li><a href="#" class="hover:text-[#0068C8] text-gray-50">Delivery & Pickup</a></li>
                <li><a href="#" class="hover:text-[#0068C8] text-gray-50">Returns</a></li>
                <li><a href="#" class="hover:text-[#0068C8] text-gray-50">Exchanges</a></li>
                <li><a href="#" class="hover:text-[#0068C8] text-gray-50">Devlpers</a></li>
                <li><a href="#" class="hover:text-[#0068C8] text-gray-50">Product Recalls</a></li>
            </ul>
        </div>
        <div className='border-2 '>
            <h3 class="text-lg font-bold mb-4">Sign Up For Newsletter & Get 20% Off</h3>
            <div className=''>
            <input
                      type="text"
                      className="w-[290px] rounded-l-lg px-4 py-2.5  bg-gray-100 text-gray-700"
                      placeholder="Your e-mail address"
                    />
                    <button className="bg-[#0068C8] border-[#0068c8] rounded-r-lg  py-2.5 w-36 px-[20px] text-[16px] text-white font-semibold">SUBSCRIBE</button>
            </div>        
            <ul class="mb-4 flex items-start relative right-9 gap-7 mt-6">
                <li><a href="" className='text-gray-50 hover:text-[#0068C8] text-2xl'><FiFacebook/></a></li>
                <li><a href="" className='text-gray-50 hover:text-[#0068C8] text-2xl'><LuTwitter/></a></li>
                <li><a href="" className='text-gray-50 hover:text-[#0068C8] text-2xl'><LuInstagram/></a></li>
                <li><a href="" className='text-gray-50 hover:text-[#0068C8] text-2xl'><ImPinterest2/></a></li>
            </ul>
            <div class="mt-4 icons">
                <img src={footer} alt="" />
            </div>
        </div>
    </div>
    <hr className='bg-gray-500'/>
    <p class="text-center mt-8">&copy;  2024 - All rights reserved.</p>
</footer>
    </div>
  )
}

export default Footer