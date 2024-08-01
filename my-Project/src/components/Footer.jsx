import React from 'react';
import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { ImPinterest2 } from "react-icons/im";
import footer from '../assets/asset 17.png';

const Footer = () => {
  return (
    <div>
      <footer className="text-white  px-8 py-6 bg-[#1B1B1B]">
        <div className="grid grid-cols-1 container  md:grid-cols-4 mx-42 md:mx-20 gap-4 md:gap-6">
          {/* Contact Us Section */}
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="mb-1">Need Help? Call Us:</p>
            <p className="mb-1">
              <a href="tel:+08 9229 8228" className="hover:text-[#0068C8] text-2xl font-bold text-gray-50">+08 9229 8228</a>
            </p>
            <p className="mb-1">Find a location nearest you.</p>
            <p className="mb-1">See <a href="#" className="underline hover:text-[#0068C8] text-gray-50">Our Stores</a></p>
            <p><a href="mailto:Support1234@Ecomall.com" className="hover:text-[#0068C8] text-gray-50">Support1234@Ecomall.com</a></p>
          </div>

          {/* About Us Section */}
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2 ">About Us</h3>
            <div className="space-y-1 flex flex-col">
              <a href="#" className="hover:text-[#0068C8] text-gray-50">About Us</a>
              <a href="#" className="hover:text-[#0068C8] text-gray-50">News & Blog</a>
              <a href="#" className="hover:text-[#0068C8] text-gray-50">Brands</a>
              <a href="#" className="hover:text-[#0068C8] text-gray-50">Press Center</a>
              <a href="#" className="hover:text-[#0068C8] text-gray-50">Advertising</a>
              <a href="#" className="hover:text-[#0068C8] text-gray-50">Investors</a>
            </div>
          </div>

          {/* Order Section */}
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Order</h3>
            <div className="space-y-1 flex flex-col">
              <a href="#" className="hover:text-[#0068C8] text-gray-50">Check Order</a>
              <a href="#" className="hover:text-[#0068C8] text-gray-50">Delivery & Pickup</a>
              <a href="#" className="hover:text-[#0068C8] text-gray-50">Returns</a>
              <a href="#" className="hover:text-[#0068C8] text-gray-50">Exchanges</a>
              <a href="#" className="hover:text-[#0068C8] text-gray-50">Developers</a>
              <a href="#" className="hover:text-[#0068C8] text-gray-50">Product Recalls</a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="p-4 flex flex-col items-start w-full md:w-96">
            <h3 className="text-lg font-bold mb-2 ">Sign Up For Newsletter & Get 20% Off</h3>
            <div className="flex w-full">
              <input
                type="text"
                className="w-full rounded-l-lg py-2.5 bg-gray-100 text-gray-700"
                placeholder="Your email address"
              />
              <button className="bg-[#0068C8] border-[#0068c8] rounded-r-lg py-2.5 w-44 text-[16px] text-white font-semibold">
                SUBSCRIBE
              </button>
            </div>
            <div className=''>
            <div className="mb-4 flex items-start gap-4 mt-4">
              <p><a href="#" className="text-gray-50 hover:text-[#0068C8] text-2xl"><FiFacebook/></a></p>
              <p><a href="#" className="text-gray-50 hover:text-[#0068C8] text-2xl"><LuTwitter/></a></p>
              <p><a href="#" className="text-gray-50 hover:text-[#0068C8] text-2xl"><LuInstagram/></a></p>
              <p><a href="#" className="text-gray-50 hover:text-[#0068C8] text-2xl"><ImPinterest2/></a></p>
            </div>
            </div>
            <div className="">
              <img src={footer} alt="Footer Visual" />
            </div>
          </div>
        </div>
        <hr className="bg-gray-500 mt-6 container" />

        <div className='container'>
          <div className='flex flex-row items-center justify-center gap-2 mt-4'>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Accessories</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Apple iphone</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Camera & Video</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Cellphone</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Desktop Computers</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Electronic</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Game</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Gaming Headsets</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Headphone</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>iwatch</a>
          </div>
          <div className=' flex flex-row items-center justify-center gap-2 mt-2'>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Kids' Electronics</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Laptop</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Mobile & Tablet</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Panasonic</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>PC Gaming</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Smartwatches</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Speaker</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Tech Accessories</a>
            <a href="" className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] rounded text-sm px-3 py-1'>Televisio</a>
          </div>
        </div>
        <p className="text-center text-sm text-[#848484] mt-6">&copy; Ecomall. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
