import React from 'react'

import logo from '../assets/asset-0.png'
import footer from '../assets/asset 17.png';

import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { ImPinterest2 } from "react-icons/im";

const Footer2 = () => {
    return (
        <div>
            <footer className="text-white px-8 py-6">
                <hr className='text-[#848484] container'/>
                <div className="grid grid-cols-1 container  md:grid-cols-4 mx-42 md:mx-20 gap-4 md:gap-6">
                    {/* Contact Us Section */}
                    <div className="p-4">

                        <img src={logo} alt="" className='h-10 w-34 mb-4' />
                        <p className="mb-1 text-sm text-[#000000]">Find a location nearest you.</p>
                        <p className="mb-1 text-sm text-[#000000]">See <a href="#" className="underline hover:text-[#0068C8] text-red-500 hover:underline">Our Stores</a></p>
                        <p className="hover:text-[#0068C8] mb-1 text-[#000000] text-sm">Support1234@Ecomall.com</p>
                        <p className="hover:text-[#0068C8] text- font-bold text-[#000000]">+08 9229 8228</p>
                        <div className="mb-4 flex items-start gap-4 mt-4">
                            <p><a href="#" className=" text-[#000000] hover:text-[#0068C8] text-xl"><FiFacebook /></a></p>
                            <p><a href="#" className=" text-[#000000] hover:text-[#0068C8] text-xl"><LuTwitter /></a></p>
                            <p><a href="#" className=" text-[#000000] hover:text-[#0068C8] text-xl"><LuInstagram /></a></p>
                            <p><a href="#" className=" text-[#000000] hover:text-[#0068C8] text-xl"><ImPinterest2 /></a></p>
                        </div>
                        <p className="mb-1">
                        </p>
                    </div>

                    {/* About Us Section */}
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-3 text-[#000000]">About Us</h3>
                        <div className="space-y-1 flex flex-col">
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">About Us</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">News & Blog</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Brands</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Press Center</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Advertising</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Investors</a>
                        </div>
                    </div>

                    {/* Support Section */}
                     <div className="p-4">
                        <h3 className="text-lg font-bold mb-3 text-[#000000]">Support</h3>
                        <div className="space-y-1 flex flex-col">
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Support Center</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Manage</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Service</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Haul Away</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Security center</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Contact</a>
                        </div>
                    </div>

                    {/* Order Section */}
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-3 text-[#000000]">Order</h3>
                        <div className="space-y-1 flex flex-col">
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Check Order</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Delivery & Pickup</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Returns</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Exchanges</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Developers</a>
                            <a href="#" className="hover:text-[#0068C8] text-sm text-[#000000]">Product Recalls</a>
                        </div>
                    </div>


                </div>



                <div className='container '>
                  <div className='text-[#000000] text-lg font-semibold'>
                    Trending Tags:
                  </div>
                    <div className='flex flex-row items-start gap-2 mt-4'>
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
                    <div className=' flex flex-row items-start gap-2 mt-2'>
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
                <hr className='text-[#848484] container'/>
                <div className='flex justify-between container'>
                  <p className="text-center text-sm text-[#848484] mt-6">&copy; Ecomall. All rights reserved.</p>
                  <img src={footer} alt="" className='p-3'/>
                </div>
            </footer>
        </div>
    )
}

export default Footer2