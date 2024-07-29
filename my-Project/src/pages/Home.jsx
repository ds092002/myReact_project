import React from 'react';
import image1 from '../assets/asset-21.jpeg';
import image2 from '../assets/asset-22.jpeg';

const Home = () => {
  return (
    <div className='mt-10'>
      <div>
        <div className='flex flex-row justify-center items-center gap-7'>
          <div className='relative'>
            <img src={image1} alt="" className='rounded-xl'/>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center mt-20'>
              <p className='text-white bg-red-600 text-sm px-2 rounded-tr-md rounded-b-md'>WEEKEND DEAL</p>
              <h1 className='text-black font-black text-5xl text-center'>
                Best Offers From<br />Games And More
              </h1>
              <p className='text-black text-md'>GREAT SAVINGS & FREE DELIVERY</p>
              <a href="#" className='text-gray-50 text-md hover:text-[#0068C8] transition duration-300 mt-4 bg-[#0068C8] px-4 py-[10px] font-bold rounded-md hover:bg-white'>SHOP NOW</a>
            </div>
          </div>
          <div className='relative'>
            <img src={image2} alt="" className='rounded-xl'/>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center mt-20'>
              <p className='text-white bg-red-600 text-sm px-2 rounded-tr-md rounded-b-md'>NEW PRODUCTS</p>
              <h1 className='text-black font-black text-5xl text-center'>
                Headphones At<br />Great Low Prices
              </h1>
              <p className='text-black text-md'>GREAT SAVINGS & FREE DELIVERY</p>
              <a href="" className='mt-4 bg-[#0068C8] px-4 py-[10px] font-bold rounded-md hover:bg-white text-gray-50 text-md  hover:text-[#00668C8] transition duration-300'>SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
