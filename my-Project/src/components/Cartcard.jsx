import React from 'react'

import s23 from '../assets/S23-400x400.jpg'

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { BiSolidEnvelope } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const Cartcard = () => {
    return (
        <div className=''>
            <div className=''>
                <div className='grid grid-cols-12 gap-4 py-4 border-b mb-5 border-gray-200 items-center'>
                    <a href='' className='col-span-6 flex items-center text-[#000]'>
                        <img src={s23} alt="" className='w-24 h-24 object-cover mr-4' />
                        <span>Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB</span>
                    </a>
                    <div className='col-span-2 text-left items-center flex space-x-2'>
                        <span className='text-[#000] font-semibold'>$699.99</span>
                    </div>
                    <div className='col-span-2 text-left'>

                    </div>
                    <div className='col-span-1 text-left items-center flex space-x-2'>
                        <span className='text-[#000] font-semibold'>$699.99</span>
                    </div>
                    <div className='col-span-1'>
                        <button className="text-gray-500">✕</button>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className="relative inline-block">
                        <input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Coupon Code"
                            className="pl-3 pr-10 py-2.5 italic w-80 border border-gray-300 rounded-md hover:border-none"
                        />
                        <a href="" className="text-[#000] text-base font-semibold absolute right-3 top-1/2 transform -translate-y-1/2 uppercase">
                            Apply Coupon
                        </a>
                    </div>
                    <div className='space-x-4'>
                        <button
                            type="button"
                            className="rounded-md hover:bg-[#fff] px-4 py-3.5 text-base font-semibold hover:text-[#000] border-1 border-[#E4F2FF] hover:border-[#0068C8] text-[#000] bg-[#E4F2FF] transition duration-300"
                        >
                            EMPTY CART
                        </button>
                        <button className="rounded-md bg-transparent opacity-30 hover:opacity-100 transtion duration-300 border-1 text-[#0068C8] border-[#0068C8] px-4 py-3.5">
                            UPDATE CART
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-2/4'>
                <div className="border border-[#0068C8] p-4 rounded-lg max-w-sm mx-auto">
                    <h2 className="text-lg font-bold mb-4">CART TOTALS</h2>
                    <div className="flex justify-between mb-4">
                        <span>Subtotal</span>
                        <span className="font-bold">$1,198.99</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 mb-4">
                        <span className="block mb-2">Shipping</span>
                        <div className="flex items-center mb-2">
                            <input type="radio" name="shipping" className="mr-2" defaultChecked />
                            <label>Free shipping</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input type="radio" name="shipping" className="mr-2" />
                            <label>Local pickup: $5.00</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input type="radio" name="shipping" className="mr-2" />
                            <label>Flat rate: $10.00</label>
                        </div>
                        <div className="text-sm text-gray-500 mb-2">
                            Shipping options will be updated during checkout.
                        </div>
                        <div className="text-blue-500 cursor-pointer flex items-center">
                            <span className="mr-2">🚚</span>
                            <span>Calculate shipping</span>
                        </div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span>Total</span>
                        <span className="font-bold">$1,198.99</span>
                    </div>
                    <button className="bg-blue-500 text-white w-full py-2 rounded">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default Cartcard