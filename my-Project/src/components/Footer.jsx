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
          <div className="border-2 p-4">
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
          <div className="border-2 p-4">
            <h3 className="text-lg font-bold mb-2 ">About Us</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#0068C8] text-gray-50">About Us</a></li>
              <li><a href="#" className="hover:text-[#0068C8] text-gray-50">News & Blog</a></li>
              <li><a href="#" className="hover:text-[#0068C8] text-gray-50">Brands</a></li>
              <li><a href="#" className="hover:text-[#0068C8] text-gray-50">Press Center</a></li>
              <li><a href="#" className="hover:text-[#0068C8] text-gray-50">Advertising</a></li>
              <li><a href="#" className="hover:text-[#0068C8] text-gray-50">Investors</a></li>
            </ul>
          </div>

          {/* Order Section */}
          <div className="border-2 p-4">
            <h3 className="text-lg font-bold mb-2">Order</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#0068C8] text-gray-50">Check Order</a></li>
              <li><a href="#" className="hover:text-[#0068C8] text-gray-50">Delivery & Pickup</a></li>
              <li><a href="#" className="hover:text-[#0068C8] text-gray-50">Returns</a></li>
              <li><a href="#" className="hover:text-[#0068C8] text-gray-50">Exchanges</a></li>
              <li><a href="#" className="hover:text-[#0068C8] text-gray-50">Developers</a></li>
              <li><a href="#" className="hover:text-[#0068C8] text-gray-50">Product Recalls</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="border-2 p-4 flex flex-col items-start px-64">
            <h3 className="text-lg font-bold mb-2 ">Sign Up For Newsletter & Get 20% Off</h3>
            <div className="flex">
              <input
                type="text"
                className="w-full rounded-l-lg px-32 py-2.5 bg-gray-100 text-gray-700"
                placeholder=""
              />
              <button className="bg-[#0068C8] border-[#0068c8] rounded-r-lg py-2.5 w-36 text-[16px] text-white font-semibold">
                SUBSCRIBE
              </button>
            </div>
            <ul className="mb-4 flex items-center gap-4 mt-4">
              <li><a href="#" className="text-gray-50 hover:text-[#0068C8] text-2xl"><FiFacebook/></a></li>
              <li><a href="#" className="text-gray-50 hover:text-[#0068C8] text-2xl"><LuTwitter/></a></li>
              <li><a href="#" className="text-gray-50 hover:text-[#0068C8] text-2xl"><LuInstagram/></a></li>
              <li><a href="#" className="text-gray-50 hover:text-[#0068C8] text-2xl"><ImPinterest2/></a></li>
            </ul>
            <div className="mt-4">
              <img src={footer} alt="Footer Visual" />
            </div>
          </div>
        </div>
        <hr className="bg-gray-500 mt-6" />
        <p className="text-center mt-4">&copy; 2024 - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
