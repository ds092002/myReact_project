import React from 'react'

import { FiFacebook } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { PiYoutubeLogoThin } from "react-icons/pi";

const ContactUS = () => {
    return (
        <div>

            <div class=" dark:bg-gray-900" id="contact">
                <div class="lg:max-w-7xl mx-auto sm:px-2 lg:px-8 pt-10 text-center">
                </div>
                <div
                    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
                    <div>
                        <h1 class="lg:text-4xl text-2xl font-bold text-black dark:text-gray-100">Do yoy have some
                            <br />
                            questions?
                        </h1>
                        <p class="max-w-sm mt-4 text-sm text-[#000] font-medium mb-4 dark:text-gray-400">We are at your disposal 7 days a week</p>
                        <p class="text-sm text-[#000] font-medium dark:text-gray-100">29 SE 2nd Ave,<br />
                            Miami, Florida 33131, <br />
                            United States
                        </p>
                        <div class="underline text-sm items-center mt-2 space-x-2 dark:text-gray-400">
                            <a href="mailto:Support1234@Ecomall.com" className=' text-[#000]'>Support1234@Ecomall.com</a>
                        </div>
                        <div class="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                            <a href="tel:+08 9229 8228" className='text-lg font-semibold text-[#000] hover:underline hover:text-gray-900'>+08 9229 8228</a>
                        </div>
                        <div className="mb-4 flex items-start gap-4 mt-4">
                            <p><a href="#" className="text-gray-900 hover:text-[#0068C8] text-xl"><FiFacebook /></a></p>
                            <p><a href="#" className="text-gray-900 hover:text-[#0068C8] text-xl"><LuTwitter /></a></p>
                            <p><a href="#" className="text-gray-900 hover:text-[#0068C8] text-2xl"><PiYoutubeLogoThin /></a></p>
                            <p><a href="#" className="text-gray-900 hover:text-[#0068C8] text-xl"><LuInstagram /></a></p>
                        </div>
                    </div>
                    <div>
                        <form>
                            <input type="checkbox" id="" className="hidden display:none" name="botcheck" />
                            <div class="lg:mb-5 mb-3 lg:flex space-y-4 gap-4">
                                <input type="text" placeholder="Name*" autocomplete="false"
                                    class="w-full px-6 py-2.5 border-none placeholder:text-[#848484] bg-[#F4F4F4] rounded-md placeholder:text-base"
                                    name="name" />
                                <label for="email" class="sr-only"></label>
                                <input type="text" placeholder="E-mail*" autocomplete="false"
                                    class="w-full px-6 py-2.5 border-none bg-[#F4F4F4] placeholder:text-[#848484] rounded-md placeholder:text-base"
                                    name="name" />
                            </div>
                            <div class="lg:mb-5 mb-3">
                                <label for="subject" class="sr-only"></label>
                                <input id="email_address" type="email" placeholder="subject*" autocomplete="false"
                                    class="w-full px-6 py-2.5 border-none bg-[#F4F4F4] placeholder:text-[#848484] placeholder:text-base rounded-md"
                                    name="email" />
                            </div>
                            <div class="mb-3">
                                <textarea placeholder="Message"
                                    class="w-full px-4 lg:py-3 py-6 border-none bg-[#F4F4F4] placeholder:text-[#848484] placeholder:text-base rounded-md"
                                    name="message">
                                </textarea>
                            </div>
                            <button type="submit"
                                class=" px-16 lg:px-10 py-2.5 font-semibold text-white transition-colors bg-gray-900 rounded-md ">Send
                                Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31793018.894942272!2d-73.16447107577315!3d-13.413332832511053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrazil!5e0!3m2!1sen!2sin!4v1716398179597!5m2!1sen!2sin"
                    width="100%"
                    height="550"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className='container sm:px-8 pt-24 '>
            <h2 className='text-[#000000]'>Looking for our local store?</h2>
        </div>
            <div className="grid grid-cols-1 container mt-12  md:grid-cols-4 mx-42 md:mx-20 gap-4 md:gap-6">
                <div className="">
                    <h3 className="text-lg font-bold mb-3 text-[#000000]">lllinois</h3>
                    <p className="text-sm">2972 Westheimer<br />
                        RD.Santa Ana, <br />
                        lllinois 85486
                    </p>
                    <p className="text-[#808080] text-sm">Monday-Friday:9:00 - 20:00 <br />
                        Saturday: 11:00 - 15:00
                    </p>
                    <hr className='lg:block hidden'/>
                    <a href="tel:+08 9229 8228" className="text-lg font-bold text-[#000000] hover:text-[#000000]">+08 9229 8228</a>
                    <p><a href="mailto:Support1234@Ecomall.com" className="text-[#000000] hover:text-[#000000] text-sm underline">Support1234@Ecomall.com</a></p>
                    <hr className='sm:block lg:hidden'/>
                </div>

                <div className="">
                    <h3 className="text-lg font-bold mb-3 text-[#000000]">Delaware</h3>
                    <p className="text-sm">6391 Elgin<br />
                        St. Celina, <br />
                        Delaware 10299
                    </p>
                    <p className="text-[#808080] text-sm">Monday-Friday:9:00 - 20:00 <br />
                        Saturday: 11:00 - 15:00
                    </p>
                    <hr className='lg:block hidden'/>
                    <a href="tel:+08 9229 8228" className="text-lg font-bold text-[#000000] hover:text-[#000000]">(406) 555-0120</a>
                    <p><a href="mailto:Support1234@Ecomall.com" className="text-[#000000] hover:text-[#000000] text-sm underline">Support1234@Ecomall.com</a></p>
                    <hr className='sm:block lg:hidden'/>
                </div>

                <div className="">
                    <h3 className="text-lg font-bold mb-3 text-[#000000]">Hawaii</h3>
                    <p className="text-sm">1901 Thornridge<br />
                        Cir. Shiloh, <br />
                        Hawaii 81063
                    </p>
                    <p className="text-[#808080] text-sm">Monday-Friday:9:00 - 20:00 <br />
                        Saturday: 11:00 - 15:00
                    </p>
                    <hr className='lg:block hidden'/>
                    <a href="tel:+08 9229 8228" className="text-lg font-bold hover:text-[#000000] text-[#000000]">(480) 555-0130</a>
                    <p><a href="mailto:Support1234@Ecomall.com" className="text-[#000000] hover:text-[#000000] text-sm underline">Support1234@Ecomall.com</a></p>
                    <hr className='sm:block lg:hidden'/>
                </div>

                <div className="">
                    <h3 className="text-lg font-bold mb-3 text-[#000000]">New Mexico</h3>
                    <p className="text-sm">4140 Parker<br />
                        Rd. Allentown, <br />
                        New Mexico 31134
                    </p>
                    <p className="text-[#808080] text-sm">Monday-Friday:9:00 - 20:00 <br />
                        Saturday: 11:00 - 15:00
                    </p>
                    <hr className='lg:block hidden'/>
                    <a href="tel:+08 9229 8228" className="text-lg font-bold hover:text-[#000000] text-[#000000]">(+80) 1234 5678 90</a>
                    <p><a href="mailto:Support1234@Ecomall.com" className="text-[#000000] hover:text-[#000000] text-sm underline">Support1234@Ecomall.com</a></p>
                    <hr className='sm:block lg:hidden'/>
                </div>
            </div>
        </div>
    )
}

export default ContactUS