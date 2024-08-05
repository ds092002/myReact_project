import React from 'react';
import Filter from '../components/Filter'
import ProductOverviewTwo from '../components/ShopCard'
import MultiCardCarousel from '../components/CardSliderIcons'

import { CiGrid2H, CiGrid41 } from "react-icons/ci";


const App = () => {
  return (
    <div className="m-5 w-full">
      <div className="text-3xl font-bold mb-5">Shop</div>

      <div className="flex mx-80 mb-5">
        <MultiCardCarousel />
      </div>

      <div className="flex">
        <div className="w-1/4 p-4 bg-white border-gray-300">
          <Filter />
        </div>
        <div className="w-2/4 p-4">
          <div className='flex p-4  justify-between ml-28 border items-center'>
            <div className='flex'>
              <a href="" className='text-3xl'><CiGrid2H /></a>
              <a href="" className='text-3xl'><CiGrid41 /></a>
            </div>
            <div className='space-x-1'>
              <input type="checkbox" name="" placeholder="" id="" />
              <label htmlFor="">Show only products on sale</label>
              <label for="Sorting">Sort by:</label>
              <select name="Sorting" id="Sorting" className='border-none' >
                <option value="Latest">Latest</option>
                <option value="Best Selling">Best Selling</option>
                <option value="Best Rated">Best Rated</option>
                <option value="Price Low">Price Low</option>
                <option value="Price High">Price High</option>
              </select>
              <label for="Range">Show:</label>
              <select name="Range" id="Rang" className='border-none hover:border-none'>
                <option value="40">40</option>
                <option value="80">80</option>
                <option value="120">120</option>
                <option value="180">180</option>
              </select>
            </div>
          </div>
          <ProductOverviewTwo/>
        </div>
      </div>
    </div>
  );
};

export default App;
