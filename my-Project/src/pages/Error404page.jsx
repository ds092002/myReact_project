import React from 'react'

const Error404page = () => {
  return (
    <div className=" flex flex-col justify-center items-center mt-24">
    <h1 className="text-black text-[160px] text font-extrabold">404</h1>
    <div className="font-semibold text-black text-3xl mt-4 text-center">The page you're looking for doesn't exist or <br/>
    probably moved somewhere
    </div>
    <p className='mt-4 text-[#808080]'>Please back  to homepage or check  our offer</p>
    <a href="https://www.google.com"><button className="bg-[#0068C8] text-white mt-3 font-semibold px-16 py-3 rounded-lg uppercase">Back to home</button></a>
</div>
  )
}

export default Error404page
