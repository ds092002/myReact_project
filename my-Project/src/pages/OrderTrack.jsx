import React from 'react'

const OrderTrack = () => {
  return (
    <div>
      <div className='mt-24'>
        <h1 className='text-2xl lg:text-3xl text-black font-bold lg:ml-96 sm:text-left max-w-4xl px-6'>
          Track Order
        </h1>
      </div>
      <div className='flex items-center justify-center px-6 lg:px-8 md:px-4 mt-10 '>
        <div className='max-w-4xl w-full text-[#000]'>

          <div className='flex flex-col justify-center items-center mt-10'>
            <form className='w-full lg:w-4/5'>
              <div className='w-full'>
                <p className='text-base mb-4 text-left font-medium'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
              </div>
              <div className="mb-4">
                <label htmlFor="Order Id" className="block text-[#000] text-base">
                  Order ID
                </label>
                <input
                  type=""
                  id=""
                  placeholder='Found in your order confirmation email.'
                  className="mt-1 w-full p-2 border border-gray-300 rounded text-base py-3"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="email" className="block text-black">
                  Billing email
                </label>
                <input
                  type="email"
                  id=""
                  placeholder='Email you used during checkout.'
                  className="mt-1 w-full p-2 border border-gray-300 rounded text-base py-3"
                  required
                />
              </div>
              <div className='flex justify-center items-center'>
              <button
                type="submit"
                className="bg-[#0068C8] text-gray-50  py-2.5 rounded hover:bg-white hover:border font-bold px-14 hover:border-[#0068C8] hover:text-[#0068C8] transition duration-300"
              >
                Track
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderTrack