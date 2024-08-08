import React from 'react'

import image1 from '../assets/product1.jpg'
import image2 from '../assets/product2.jpg'
import image3 from '../assets/product3.jpg'
import image4 from '../assets/product4.jpg'
import mousemat from '../assets/mousemat.jpg'
import mouseGaming from '../assets/mouseGaming.jpg'
import product1 from '../assets/product-detail-1.png'
import product2 from '../assets/product-detail-2.png'
import product3 from '../assets/product-detail-3.png'

import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoStack } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { ImPinterest2 } from "react-icons/im";


const ProductGrid = () => {

    const image = [
        { image: image1 },
        { image: image2 },
        { image: image3 },
        { image: image4 },
    ]
    return (
        <div className="mx-52 px-4 md:px-8 2xl:px-16">
            <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
                <div className="col-span-5 grid grid-cols-1 gap-2.5">
                    {image.map((image, index) => (
                        <div key={index} className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                            <img
                                src={image.image}
                                alt="Nike Air Max 95 By You--0"
                                className="w-full h-full border-1 hover:border-[#0068C8] rounded-lg object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div className="col-span-4 pt-8 lg:pt-0">
                    <div className=" border-gray-300  border-b">
                        <p>Laptops</p>
                        <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                            MacBook Pro 13.3" 16GB/512GB Silver
                        </h2>
                        <p className="text-body text-sm leading-6  lg:text-base lg:leading-8 flex items-center space-x-2">
                            <div className="flex text-[#FCC904]">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <span className="text-[#000]">(4.50)</span>
                            <span className="text-[#000]">2 Reviews</span>
                            <span className='text-sm border-1  px-2 rounded border-[#0FB232] text-[#0FB232]'>IN STOCK</span>
                        </p>
                        <div className="mt-5 flex items-center ">
                            <div className="text-heading text-red-500 pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                                $1,527.00
                            </div>
                            <del className="font-segoe pl-2 text-sm text-gray-400 md:text-base lg:text-lg xl:text-xl">
                                $1,795.00
                            </del>
                            <span className='text-xl ml-3 text-[#000]'>(-15%)</span>
                        </div>
                        <ul className='flex flex-col mt-4 text-[#848484]'>
                            <li className='list-disc decoration-[#000]'>RAM: 16GB</li>
                            <li className='list-disc decoration-[#000]'>Hard Drive: 256GB</li>
                            <li className='list-disc decoration-[#000]'>Screen Size: 13.3 inches</li>
                        </ul>
                        <div className='py-2 rounded-lg bg-[#E8F3FE] text-[#0068C8]'>
                            <ul>
                                <li className='list-disc'>Estimated delivery time 14-30 days</li>
                                <li className='list-disc'>18 months warranty at Genuine Warranty Center</li>
                                <li className='list-disc'>Whats in the box: 30W Power Adapter and Block</li>
                            </ul>
                        </div>
                        <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-gray-300  py-8  md:pr-32 lg:pr-12 2xl:pr-32">
                            <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 bg-[#EDEDED] md:h-12">
                                <button
                                    className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                                    disabled
                                >
                                    +
                                </button>
                                <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                                    1
                                </span>
                                <button className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
                                    -
                                </button>
                            </div>
                            <button
                                type="button"
                                className="h-11 w-full rounded-md bg-[#0068C8] px-7 py-2 text-sm font-semibold text-[#fff] shadow-sm hover:bg-[#fff] hover:border-1 hover:border-[#0068C8] hover:text-[#000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add to cart
                            </button>
                        </div>
                        <div className='flex items-center space-x-8 mb-7'>
                            <a href='' className='flex items-center space-x-1 text-[#000] text-xl'><IoMdHeartEmpty /> <span className='text-base'>Add to wishlist</span></a>
                            <a href='' className='flex items-center space-x-1 text-[#000] text-xl'><GoStack /><span className='text-base'>Compare</span></a>
                        </div>
                    </div>
                    <div className="py-6 ">
                        <p className='text-[#000]'>SKU: <span className='text-[#848484]'>MPXQ2LLA</span></p>
                        <p className='text-[#000]'>Tags: <span className='text-[#848484]'>Electronics, Laptop</span></p>
                        <p className='flex text-[#000]'>Share: <span className='flex items-center text-[#848484] text-2xl space-x-3'><FiFacebook /><FiTwitter /><ImPinterest2 /><CiLinkedin /></span></p>
                    </div>
                </div>
            </div>

            <div className=" mx-auto my-10">
                <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Product 1 */}
                    <div className="col-span-2 text-center border w-72">
                        <img
                            src={image1}
                            alt="Product 1"
                            className="mx-auto "
                        />
                        <p className="mt-4 text-sm">This Product: MacBook Pro 13.3" 16GB/512GB Silver</p>
                        <p className="text-red-600 text-lg font-semibold">$1,527.00 <span className="line-through  text-base text-gray-500">$1,795.00</span></p>
                    </div>

                    {/* Plus Sign */}
                    <div className="col-span-1 flex justify-center items-center rounded h-4 w-4 text-2xl font-semibold">
                        +
                    </div>

                    {/* Product 2 */}
                    <div className="col-span-2 text-center w-72">
                        <img
                            src={mousemat}
                            alt="Product 2"
                            className="mx-auto"
                        />
                        <p className="mt-4 text-sm">ASUS ROG Sheath Gaming Mousemat</p>
                        <p className="text-red-600 text-lg font-semibold">$40.06 <span className="line-through text-base text-gray-500">$69.00</span></p>
                    </div>

                    {/* Plus Sign */}
                    <div className="col-span-1 text-center text-2xl font-semibold">
                        +
                    </div>

                    {/* Product 3 */}
                    <div className="col-span-2 text-center w-72">
                        <img
                            src={mouseGaming}
                            alt="Product 3"
                            className="mx-auto"
                        />
                        <p className="mt-4 text-sm">Wireless Mouse For Computer Gaming</p>
                        <p className="text-red-600 text-lg font-semibold">$13.80 <span className="line-through  text-base text-gray-500">$19.72</span></p>
                    </div>

                    {/* Package Total */}
                    <div className="col-span-4 text-right">
                        <p className="text-lg text-[#000]">Package Total: <span className="text-3xl font-semibold">$1,580.86</span></p>
                        <button className="mt-4 bg-[#000] text-[#fff] px-20 py-3 font-semibold rounded hover:bg-[#0068C8]">
                            ADD ALL TO CART
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="mx-auto my-10 p-6 bg-white rounded border-1">
                {/* Tabs Section */}
                <div className=" mb-6">
                    <div className="flex items-center justify-center space-x-16 text-lg font-semibold mt-6 ">
                        <a className="pb-2 text-3xl bg-[#0068C8] border text-[#fff] px-9 py-3 rounded-full text-center">Product details</a>
                        <a className="pb-2 text-3xl text-[#000] hover:bg-[#0068C8] border hover:text-[#fff] px-9 py-3 rounded-full text-center">Specifications</a>
                        <a className="pb-2 text-3xl text-[#000] hover:bg-[#0068C8] border hover:text-[#fff] px-9 py-3 rounded-full text-center">Reviews (2)</a>
                    </div>
                </div>

                {/* Product Description */}
                <p className="text-gray-700 mb-8">
                    This Apple MacBook Pro (MPXQ2LL/A) has a high-resolution LED-backlit 13.3-inch widescreen Retina display (2560 x 1600 native resolution). Powered by Intel Core i5 (2.3GHz) and Intel Iris Plus Graphics 640. Solid State Drive capacity of 256GB with 8GB of RAM. Supports Mac OS. Bundle includes Black Case, Wireless Mouse, and Bluetooth Headset! This device has been tested to be in great working condition. It will show signs of use and cosmetic blemishes which may include some scratch/dings, all of which do not affect the usability of this device. (Refurbished)
                </p>

                {/* Flexbox Section */}
                <div className="space-y-8">
                    {/* Dimensions & Weight */}
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <div className="flex-1">
                            <h2 className="text-3xl text-[#000] font-semibold mb-4">Dimensions & Weight</h2>
                            <ul className="text-gray-700 mb-6 space-y-2">
                                <li>1. Width: 356.7 mm (14.05 in)</li>
                                <li>2. Height: 15.67 mm (0.62 in – 0.72 in.)</li>
                                <li>3. Depth: 251.90 mm (9.92 in)</li>
                                <li>4. Weight (minimum): 1.90 kg (4.19 lbs.)</li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <img
                                src={product1}
                                alt="Laptop dimensions"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Better Performance */}
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <div className="flex-1">
                            <img
                                src={product2}
                                alt="Laptop performance"
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl text-[#000] font-semibold mb-4">Better performance. More productivity.</h2>
                            <p className="text-gray-700 mb-6">
                                Thanks to 13th Gen Intel® Core™ processors, this laptop runs at peak performance to get you through the day. Doing some graphics-heavy work? Optional NVIDIA® RTX 2050 Graphics (coming soon) give you the boost you need.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Enjoy a fast, smooth PC performance without sacrificing power thanks to LPDDR5 memory. And with dual heat pipes, your device stays nice, cool and performing at its best. Meanwhile, adaptive thermals optimize power according to your device’s location, whether it’s on a stable surface like a desk or an unstable surface like your lap. Using advanced algorithms and accelerometers, your device intelligently adapts its power and thermal profiles to the situation to keep your device running smoothly.
                            </p>
                        </div>
                    </div>

                    {/* Stay Secure */}
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <div className="flex-1">
                            <h2 className="text-3xl text-[#000] font-semibold mb-4">Stay secure.</h2>
                            <p className="text-gray-700 mb-6">
                                The Trusted Platform Module 2.0 is a commercial-grade security chip installed on the motherboard that creates and stores passwords and encryption keys. It verifies that the computer has not been tampered with before booting up and protects your data against external software attacks.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Get added peace-of-mind with the fingerprint reader that allows you to securely log in with a touch, while a mechanical shutter on the camera protects your privacy and prevents accidental embarrassments.
                            </p>
                        </div>
                        <div className="flex-1">
                            <img
                                src={product3}
                                alt="Laptop security"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default ProductGrid;