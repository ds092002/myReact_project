import React from 'react'

const Error404page = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-24">
    <h1 className="text-black w-full text-center lg:text-[200px] md:text-[120px] text-9xl font-extrabold">404</h1>
    <div className="font-bold px-2  text-black lg:text-3xl text-2xl mt-4 text-center">The page you're looking for doesn't exist or <br/>
    probably moved somewhere
    </div>
    <p className='mt-4 text-[#808080] flex justify-center items-center text-center'>Please back  to homepage or check  our offer</p>
    <a href="https://www.google.com"><button className="bg-[#0068C8] text-[#fff] border-1 border-[#0068C8] hover:bg-[#fff] hover:text-[#0068C8] transition duration-300 mt-3 font-bold px-7 py-2 lg:px-10 lg:py-2.5 rounded-lg uppercase">Back to homepage</button></a>
</div>
  )
}

export default Error404page
