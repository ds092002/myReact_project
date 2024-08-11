import React from "react";

import logo from "../assets/asset-0.png";
import navSmartphone from '../assets/navSmartPhone.jpg'
import macCart1 from '../assets/mac-cat-1.jpg'
import megaCart2 from '../assets/mega-cat-2.jpg'
import megaCart3 from '../assets/mega-cat-3.jpg'
import megaCart4 from '../assets/mega-cat-4.jpg'

import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { useState } from "react";



const Navbar = () => {

  const [ShopCategoriesvisible, setShopCategoriesVisible] = useState(false);

  const [PhoneCategoriesvisible, setPhoneCategoriesVisible] = useState(false);

  const [CategoriesLaptopsvisible, setCategoriesLaptopsVisible] = useState(false);

  const [HomeVisible, setHomeVisible] = useState(false);

  const [LaptopsVisible, setLaptopVisible] = useState(false);

  const [SmartPhoneVisible, setSmartPhoneVisible] = useState(false);

  const [HeadPhonesVisible, setHeadPhonesVisible] = useState(false);

  // Shop Categories

  const shopCathandleMouseEnter = () => {
    setShopCategoriesVisible(true);
  }
  const shopCathandleMouseLeave = () => {
    setShopCategoriesVisible(false);
  }

  // Smart Phone Categories

  const phoneCathandleMouseEnter = () => {
    setPhoneCategoriesVisible(true);
  }
  const phoneCathandleMouseLeave = () => {
    setPhoneCategoriesVisible(false);
  }

  // laptops Categories

  const laptopCathandleMouseEnter = () => {
    setCategoriesLaptopsVisible(true);
  }
  const laptopCathandleMouseLeave = () => {
    setCategoriesLaptopsVisible(false);
  }
  // Home Page

  const handleMouseEnter = () => {
    setHomeVisible(true);
  }
  const handleMouseLeave = () => {
    setHomeVisible(false);
  }

  // Laptop Page

  const laptophandleMouseEnter = () => {
    setLaptopVisible(true);
  }
  const laptophandleMouseLeave = () => {
    setLaptopVisible(false);
  }

  // SmartPhone Page

  const phonehandleMouseEnter = () => {
    setSmartPhoneVisible(true);
  }
  const phonehandleMouseLeave = () => {
    setSmartPhoneVisible(false);
  }

  // HeadPhone Page

  const headphonehandleMouseEnter = () => {
    setHeadPhonesVisible(true);
  }
  const headphonehandleMouseLeave = () => {
    setHeadPhonesVisible(false);
  }


  const Categories = () => {
    return (
      <div>
        <ul className="grid grid-cols-1">
          <div className="absolute  bg-[#fff] mr-96 text-[#000] h-[550px] w-full container">
            <div className="flex justify-around mt-10">
              <div className="space-y-2 mt-5">
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Smartphone
                  {/* <div>
                    <ul className="flex justify-center mt-10">
                      <div className="absolute  bg-[#fff] mr-96 text-[#000] h-[550px] w-full container">
                        <div className="flex justify-around mt-10">

                          <div className="space-y-2 mt-5">
                            <h1 className="text-xl font-semibold">Computers & Tablets</h1>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Laptops & Desktops</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Tablets</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Monitors</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Laptops</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Accessories</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Drones</a>
                          </div>

                          <div className="space-y-2 mt-5">
                            <h1 className="text-xl font-semibold">Cell Phone</h1>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Smartphone</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">AT&T</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Samsung Galaxy</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">iPhone</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Prepaid Phone</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Unlocked Phone</a>
                          </div>

                          <div className="space-y-2 mt-5">
                            <h1 className="text-xl font-semibold">Camera</h1>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Camera</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Accessories</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Camera & Lenses</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Drones</a>
                          </div>

                          <div className="space-y-2 mt-5">
                            <h1 className="text-xl font-semibold">TV & Home Theater</h1>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">Television</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">55" TVs</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">65" TVs</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">OLED TVs</a>
                            <a href="" className="text-[#000] block hover:text-[#0068C8]">QLED TVs</a>
                          </div>

                        </div>
                      </div>
                    </ul>
                  </div> */}
                </a> <hr />
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Laptops
                  {/* <div>
                    <ul className="flex justify-center mt-10">
                      <div className="absolute  bg-[#fff] mr-96 text-[#000] h-[550px] w-full container">
                        <div className="flex justify-around mt-10">

                            <div className="space-y-2 mt-5">
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">Laptops & Desktops</a>
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">Accessories</a>
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">Chromebook</a>
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">Computer Component</a>
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">Desktops</a>
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">iMac</a>
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">Laptops</a>
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">Macbook</a>
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">Monitores</a>
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">PC Gaming</a>
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">Printers & Ink</a>
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">Restored Computers</a>
                              <a href="" className="text-[#000] block hover:text-[#0068C8]">Windows Laptops</a>
                            </div>
                        </div>
                      </div>
                    </ul>
                  </div> */}
                </a> <hr />
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Camera</a> <hr />
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Headphone</a> <hr />
                <a href="" className="text-[#000] block hover:text-[#0068C8]">PC Gaming</a> <hr />
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Tablets</a> <hr />
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Television</a> <hr />
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Smartwatches</a> <hr />
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Speakers</a> <hr />
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Kids' Electronics</a> <hr />
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Tech Gift</a> <hr />
              </div>
            </div>
          </div>
        </ul>
      </div>
    )
  }
  const Home = () => {
    return (
      <div>
        <ul className="flex justify-center mt-10">
          <div className="absolute  bg-[#fff] mr-96 text-[#000] h-[550px] w-full container">
            <div className="flex justify-around mt-10">

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Home Page</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Home 01</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Home 02</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Home 03</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Home 04</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Home 05</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Home 06</a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Shop Layouts</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Shop Top Categories</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Shop Top Brands</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Shop List</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Shop Scroll Sidebar</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Shop Top Filter</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Shop Load More Button</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Shop Infinity Scroll</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Shop Ajax Pagination</a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Product Layouts</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Horizontal Thumbnails</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Vertical Thumbnails</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Grid Thumbnails</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Variation Thumbnails</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Variation Dropdown</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Product Deal</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Group Products</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Product Video</a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Others</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">About Us</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Contact Us</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Blog</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Blog Deatil</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Track Order</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Flash Sale</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Coming Soon</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">404</a>
              </div>

            </div>
          </div>
        </ul>
      </div>
    )
  };

  const Laptops = () => {
    return (
      <div className="">
        <ul className="flex justify-center mt-10">
          <div className="absolute bg-gray-50 text-[#000] h-[550px] w-full container ">
            <div className="grid grid-cols-4 mt-10">
              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Computers & Tablets</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Laptops & Desktops</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Tablets</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Monitors</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Laptops</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Accessories</a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Cell Phone</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Smartphone</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">AT&T</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Samsung Galaxy</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">iPhone</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Prepaid Phone</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Unlocked Phone</a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Audio</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Bluetooth Speakers</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Protable Speakers</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Professional Speakers</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Waterproof Speakers</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Headphones</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Speakers</a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Video Games</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Xbox Series</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Playstation 4</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Playstation 5</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Gaming Headsets</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Accessories</a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Camera</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Camera</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Accessories</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Camera & Lenses</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Drones</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Security Cameras</a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">TV & Home Theater</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Television</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">55" TVs</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">65" TVs</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">OLED TVs</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">QLED TVs</a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Smart Home</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Smart Home</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Security Cameras</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Television</a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Headphones</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Headphones</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">AirPods</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Gaming Headsets</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Kids' Headphones</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Wireless Earbuds</a>
              </div>
            </div>
          </div>
        </ul>
      </div>
    )
  }

  const SmartPhone = () => {
    return (
      <div>
        <ul className="flex justify-center mt-10">
          <div className="absolute bg-gray-50 text-[#000] h-[550px] w-full container">
            <div className="flex justify-around mt-10">
              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Computers & Tablets</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Laptops & Desktops</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Tablets</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Monitors</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Laptops</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Accessories</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Computer Components</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">PC Gaming</a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Cell Phone</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Smartphone</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">AT&T</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Samsung Galaxy</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">iPhone</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Prepaid Phone</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Unlocked Phone</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Verizon</a>
              </div>

              <div>
                <img src={navSmartphone} alt="" />
              </div>
            </div>
          </div>
        </ul>
      </div>
    )
  }

  const HeadPhones = () => {
    return (
      <div>
        <ul className="flex justify-center mt-10">
          <div className="absolute bg-gray-50 text-[#000] h-[550px] w-full container">
            <div className="flex justify-around mt-10">
              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Computers & Tablets</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Laptops & Desktops</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Tablets</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Monitors</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Laptops</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Accessories</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">MacBooks</a>
                <a href="">
                  <img src={macCart1} alt="" />
                </a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Cell Phone</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Smartphone</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">AT&T</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Samsung Galaxy</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">iPhone</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Prepaid Phone</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Unlocked Phone</a>
                <a href="">
                  <img src={megaCart2} alt="" />
                </a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Audio</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Bluetooth Speakers</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Protable Speakers</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Professional Speakers</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Waterproof Speakers</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Headphones</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Speakers</a>
                <a href="">
                  <img src={megaCart3} alt="" />
                </a>
              </div>

              <div className="space-y-2 mt-5">
                <h1 className="text-xl font-semibold">Video Games</h1>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Xbox Series</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Playstation 4</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Playstation 5</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Gaming Headsets</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">Accessories</a>
                <a href="" className="text-[#000] block hover:text-[#0068C8]">PC Gaming</a>
                <a href="">
                  <img src={megaCart4} alt="" />
                </a>
              </div>
            </div>
          </div>
        </ul>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-black w-full py-1 text-sm font-semibold">
        <nav className="flex justify-between">
          <ul className="flex items-center space-x-6 ml-52">
            <li><a href="" className="text-white">English</a></li>
            <li><a href="" className="text-white">USD</a></li>
            <li><a href="" className="text-white">Free Shipping On All Orders Over $100</a></li>
          </ul>
          <ul className="flex items-center justify-between space-x-5 mr-52">
            <li className="text-[#FCC904] space-x-2"><i class="fa-solid fa-bolt-lightning"></i><a href="" className="text-[#FCC904]">Flash Sale</a></li>
            <li><a href="" className="text-white">Track Order</a></li>
            <li><a href="" className="text-white">About</a></li>
            <li><a href="" className="text-white">Contact</a></li>
            <li><a href="" className="text-white">Blog</a></li>
          </ul>
        </nav>
      </div>
      <nav>
        <div className="bg-white border-b">
          <div className=" mx-60 flex items-center justify-between py-8">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-12" />
            </div>
            <div className="flex-grow ml-24">
              <div className="flex items-center rounded-lg overflow-hidden w-[810px] border-[#0068C8] border-2 bg-gray-100">
                <select
                  name=""
                  id=""
                  className="focus h-full px-7  bg-gray-100 text-gray-700 border-0 border-[#0068C8]"
                >
                  <option className="">All Categories</option>
                  <option>Camera</option>
                  <option>&nbsp;&nbsp;Accessories</option>
                  <option>&nbsp;&nbsp;Camera & Lenses</option>
                  <option>&nbsp;&nbsp;Drones</option>
                  <option>&nbsp;&nbsp;Security Cameras</option>
                  <option>Games</option>
                  <option>&nbsp;&nbsp;Accessories</option>
                  <option>&nbsp;&nbsp;Playstation 4</option>
                  <option>&nbsp;&nbsp;Playstation 5</option>
                  <option>&nbsp;&nbsp;Xbox Series</option>
                  <option>Headphones</option>
                  <option>&nbsp;&nbsp;AirPods</option>
                  <option>&nbsp;&nbsp;Gaming Headsets</option>
                  <option>&nbsp;&nbsp;Kids' Headphones</option>
                  <option>&nbsp;&nbsp;Wireless Earbuds</option>
                  <option>Iwatch</option>
                  <option>Laptops & Desktops</option>
                  <option>&nbsp;&nbsp;Accessories</option>
                  <option>&nbsp;&nbsp;Laptops</option>
                  <option>&nbsp;&nbsp;Monitors</option>
                  <option>Smart Home</option>
                  <option>SmartPhone</option>
                  <option>&nbsp;&nbsp;IPhone</option>
                  <option>&nbsp;&nbsp;Prepaid Phone</option>
                  <option>&nbsp;&nbsp;Samsung Galaxy</option>
                  <option>&nbsp;&nbsp;Unlocked Phones</option>
                  <option>Speakers</option>
                  <option>&nbsp;&nbsp;Bluetooth Speakers</option>
                  <option>&nbsp;&nbsp;Portable Speakers</option>
                  <option>&nbsp;&nbsp;Professional Speakers</option>
                  <option>&nbsp;&nbsp;Waterproof Speakers</option>
                  <option>Tablets</option>
                  <option>Television</option>
                  <option>&nbsp;&nbsp;55" TVs</option>
                  <option>&nbsp;&nbsp;65" TVs</option>
                  <option>&nbsp;&nbsp;OLED TVs</option>
                  <opt>&nbsp;&nbsp;QLED TVs</opt>
                </select>
                <span className="h-9 w-1 bg-gray-300 z-40"></span>
                <input
                  type="text"
                  className="focus w-[710px] px-4 py-2.5 bg-gray-100 text-gray-700 border-none"
                  placeholder="Search for products"
                />
                <button className="bg-[#0068C8] py-2.5 w-36 px-[30px] text-[16px] text-white font-semibold">SEARCH</button>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-9">
                <a href="d-flex align-items-center">
                  <i className=" text-4xl relative text-black">
                    <CiHeart />
                    <span className="bg-[#0068C8] h-4 w-4 text-white text-[10px] rounded-full flex justify-center items-center absolute top-[-1px] right-[-6px] z-20 text-center">
                      0
                    </span>
                  </i>
                </a>
                <a href="#" className="flex items-center space-x-1 d-flex align-items-center">
                  <i className="text-3xl text-black">
                    <FiUser />
                  </i>
                  <div className="flex flex-col ml-2">
                    <span className="text-[#000] text-[12px]">
                      My Account
                    </span>
                    <span className="text-sm font-bold text-black">Login</span>
                  </div>

                </a>
                <a href="#" class="flex items-center space-x-1 d-flex align-items-center">
                  <i className="text-3xl relative text-black">
                    <BsCart3 />
                    <span className="bg-[#0068C8] h-4 w-4 text-white text-[10px] rounded-full flex justify-center items-center absolute top-[-1px] right-[-6px] z-20 text-center">
                      0
                    </span>
                  </i>
                  <div className="flex flex-col ml-2">
                    <span className="text-[#000] text-[12px]">My Cart</span>
                    <span className="text-sm font-bold text-black">$0.00</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </nav>
      <nav>
        <div className="flex items-center justify-between">
          <div className="flex border-r">
          <IoMenuOutline />
            <a href="" className="text-2xl" onMouseEnter={shopCathandleMouseEnter} onMouseLeave={shopCathandleMouseLeave}>
            Shop Categories<MdOutlineKeyboardArrowDown /> 
            {ShopCategoriesvisible && Categories()}
            </a>

          </div>
          <div className=" space-x-10 w-full md:flex md:w-auto  md:order-1">
            <ul className="flex items-center mx-52 text-base space-x-12 md:p-0 z-50 rtl:space-x-revese md:flex-row md:mt-0 md:border-0 md:bg-[#fff]">
              <a href="" className="flex items-center py-2 px-3 text-[#000] hover:text-[#0068C8] " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Home <MdOutlineKeyboardArrowDown />
                {HomeVisible && Home()}
              </a>
              <a href="" className="flex items-center py-2 px-3 text-[#000] hover:text-[#0068C8] " onMouseEnter={laptophandleMouseEnter} onMouseLeave={laptophandleMouseLeave}>
                Laptops <MdOutlineKeyboardArrowDown />
                {LaptopsVisible && Laptops()}
              </a>
              <a href="" className="flex items-center py-2 px-3 text-[#000] hover:text-[#0068C8] " onMouseEnter={phonehandleMouseEnter} onMouseLeave={phonehandleMouseLeave}>
                SmartPhones <MdOutlineKeyboardArrowDown />
                {SmartPhoneVisible && SmartPhone()}
              </a>
              <a href="" className="flex items-center py-2 px-3 text-[#000] hover:text-[#0068C8] " onMouseEnter={headphonehandleMouseEnter} onMouseLeave={headphonehandleMouseLeave}>
                Headphones <MdOutlineKeyboardArrowDown />
                {HeadPhonesVisible && HeadPhones()}
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
