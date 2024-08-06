import React from "react";

import blog1 from "../assets/blog-smartphone.jpg";
import blog2 from "../assets/blog-watch1.jpg";
import blog3 from "../assets/blog-3.jpg";
import blog4 from "../assets/blog-4.jpg";
import minBlog1 from '../assets/blog-1-150x150.jpg'
import minBlog2 from '../assets/blog-11-150x150.jpg'
import minBlog3 from '../assets/blog-3-150x150.jpg'

import { GoSearch } from "react-icons/go";


const BlogPage = () => {
    return (
        <div className="mt-24">
            <h3 className=" text-[#000] mx-56 font-semibold mb-4">Blog</h3>
            <div className="flex mt-10 w-full">
                <div className="w-2/4 ml-56">
                    <div className="w-full h-full">
                        <div>
                            <img src={blog1} className=" rounded-lg" />
                            <a href="" className="">
                                Smartphone
                            </a>
                            <a href="">
                                <h3 className="text-[#000] font-semibold  hover:text-[#0068C8]">
                                    What Is a Smartphone? A Mobile Phone and Computer In One Device
                                </h3>
                            </a>
                            <p className=" text-[#848484]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                pretium mollis ex, faucibus sit amet. Proin tempor purus ac suscipit
                                sagittis …
                            </p>
                            <p className=" text-sm text-[#848484]">BY <span className="font-semibold text-[#000] hover:underline transition duration-300">Andrew</span> Feb 27, 2024</p>
                        </div>

                        <div className="mt-16">
                            <img src={blog2} className=" rounded-lg" />
                            <a href="" className="">
                                Swartwatches
                            </a>
                            <a href="">
                                <h3 className="text-[#000] font-semibold  hover:text-[#0068C8]">
                                    Can the Apple Watch Series 7 Work On Its Own Without an iPhone?
                                </h3>
                            </a>
                            <p className=" text-[#848484]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                pretium mollis ex, faucibus sit amet. Proin tempor purus ac suscipit
                                sagittis …
                            </p>
                            <p className=" text-sm text-[#848484]">BY <span className="font-semibold text-[#000] hover:underline transition duration-300">Andrew</span> Feb 26, 2024</p>
                        </div>

                        <img src={blog3} className=" rounded-lg" />
                        <a href="" className="">
                            Games
                        </a>
                        <a href="">
                            <h3 className="text-[#000] font-semibold  hover:text-[#0068C8]">
                                Bluetooth gamepad for Windows and Andriod
                            </h3>
                        </a>
                        <p className=" text-[#848484]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                            pretium mollis ex, faucibus sit amet. Proin tempor purus ac suscipit
                            sagittis …
                        </p>
                        <p className=" text-sm text-[#848484]">BY <span className="font-semibold text-[#000] hover:underline transition duration-300">Andrew</span> Feb 25, 2024</p>
                        <blockquote>
                            <div className="bg-[#E8F3FE] rounded-lg">
                                <p className="p-5 text-3xl text-[#000]">
                                    " <br />
                                    It's estimated that more than 5 billion people have mobile
                                    devices, which represents approximately 94% of the population of advanced economies and 83% of emerging economies,
                                    according to Pew Research Center			                            <p className=" mt-5 text-sm text-[#848484]">BY <span className="font-semibold text-[#000] hover:underline transition duration-300">Andrew</span> Feb 24, 2024</p>
                                </p>
                            </div>
                        </blockquote>
                        <div className="mt-5">
                            <img src={blog4} className=" rounded-lg" />
                            <a href="" className="">
                                Computer
                            </a>
                            <a href="">
                                <h3 className="text-[#000] font-semibold  hover:text-[#0068C8]">
                                    New or Refurbished Computer? It's a Matter of Dollars and Sense
                                </h3>
                            </a>
                            <p className=" text-[#848484]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                pretium mollis ex, faucibus sit amet. Proin tempor purus ac suscipit
                                sagittis …
                            </p>
                            <p className=" text-sm text-[#848484]">BY <span className="font-semibold text-[#000] hover:underline transition duration-300">Andrew</span> Feb 22, 2024</p>
                        </div>
                    </div>
                </div>


                <div className="w-1/4 ml-10 border-l">
                    <div className="ml-7">
                        <div className="relative inline-block">
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder="Search for products..."
                                className="pl-3 pr-10 py-2.5 w-80 border border-gray-300 rounded-md hover:border-none"
                            />
                            <a href="" className="text-[#000] text-2xl absolute right-3 top-1/2 transform -translate-y-1/2">
                                <GoSearch />
                            </a>
                        </div>
                        <div className="mt-16 text-[#000]">
                            <h4 className="font-semibold">Categories</h4>
                            <div className="grid grid-cols-2">
                                <div>
                                    <p>Computer</p>
                                    <p>Games</p>
                                    <p>Headphones</p>
                                    <p>Kids Electronics</p>
                                    <p>Smartphone</p>
                                    <p>Speaker</p>
                                    <p>Smartwatches</p>
                                </div>
                                <div>
                                    <p>(2)</p>
                                    <p>(2)</p>
                                    <p>(2)</p>
                                    <p>(1)</p>
                                    <p>(4)</p>
                                    <p>(1)</p>
                                    <p>(3)</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h4 className="text-[#000] font-semibold">Recent posts</h4>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <img src={minBlog1} alt="" className="h-20 rounded-md" />
                                    <a href="" className="text-[#000]">What Is a Smartphone? A Mobile Phone and Computer In One Device</a>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <img src={minBlog2} alt="" className="h-20 rounded-md" />
                                    <a href="" className="text-[#000]">Can the Apple Watch Series 7 Work On Its Own Without an iPhone?</a>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <img src={minBlog3} alt="" className="h-20 rounded-md" />
                                    <a href="" className="text-[#000]">Bluetooth gamepad for Windows and Android</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-[#000000]">
                            <h4 className="font-semibold"> Recent Comments</h4>
                            <p className="text-base text-[#000000]">
                                <blockquote>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor arcu, consectetur eleifend commodo at,
                                </blockquote>
                            </p>
                            <p className=" text-sm text-[#848484]">BY <span className="font-semibold text-[#000] hover:underline transition duration-300">SOFIA.</span> MAY 11, 2024</p>
                            <p>
                                <blockquote>
                                    Phasellus vitae imperdiet felis. Nam non condimentum erat. Lorem ipsum dolor sit amet, consectetur adipiscing
                                </blockquote>
                            </p>
                            <p className=" text-sm text-[#848484]">BY <span className="font-semibold text-[#000] hover:underline transition duration-300">JOHN DOE.</span> MAY 11, 2024</p>
                            <p>
                                <blockquote>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor arcu, consectetur eleifend commodo at,
                                </blockquote>
                            </p>
                            <p className=" text-sm text-[#848484]">BY <span className="font-semibold text-[#000] hover:underline transition duration-300">JOHN HENRRY.</span> MAY 11, 2024</p>
                        </div>

                        <div className="mt-16">
                            <h4 className="font-semibold text-[#000]">Tags Post</h4>
                            <div className="grid  gap-4 grid-cols-2">
                                <div className="">
                                    <p className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] hover:text-[#0068C8] rounded text-sm px-3 py-1'>Kids' Electronics</p>
                                    <p className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] hover:text-[#0068C8] rounded text-sm px-3 py-1'>Laptop</p>
                                    <p className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] hover:text-[#0068C8] rounded text-sm px-3 py-1'>Mobile & Tablet</p>
                                    <p className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] hover:text-[#0068C8] rounded text-sm px-3 py-1'>Panasonic</p>
                                    <p className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] hover:text-[#0068C8] rounded text-sm px-3 py-1'>PC Gaming</p>
                                </div>
                                <div>
                                    <p className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] hover:text-[#0068C8] rounded text-sm px-3 py-1'>Kids' Electronics</p>
                                    <p className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] hover:text-[#0068C8] rounded text-sm px-3 py-1'>Laptop</p>
                                    <p className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] hover:text-[#0068C8] rounded text-sm px-3 py-1'>Mobile & Tablet</p>
                                    <p className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] hover:text-[#0068C8] rounded text-sm px-3 py-1'>Panasonic</p>
                                    <p className='border-1 border-[#848484] text-[#848484] hover:border-[#0068C8] hover:text-[#0068C8] rounded text-sm px-3 py-1'>PC Gaming</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogPage;