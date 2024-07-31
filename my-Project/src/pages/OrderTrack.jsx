import React from 'react'

const OrderTrack = () => {
  return (
    <div>
        <div className='mx-60 text-black mt-24'>
            <div className=''>
                <h1 className='text-3xl text-black font-bold'>
                Track Order
                </h1>
            </div>

            <div className='flex flex-col justify-center items-center mt-14'>
                <form className='ml-[25%]'>
                <div className='w-[60%]'>
                <p className=''>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                </div>
                <div className="mb-4">
                <label htmlFor="Order Id" className="block text-black">
                  Order ID 
                </label>
                <input
                  type=""
                  id=""
                  placeholder='Found in your order confirmation email.'
                  className="mt-1 w-[60%] p-2 border hover:border-[#0068C8] border-gray-300 rounded text-sm py-3"
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
                  className="mt-1 w-[60%] p-2 border border-gray-300 rounded text-sm py-3"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#0068C8] text-gray-50 ml-[21%] py-2 rounded hover:bg-white hover:border font-semibold px-14 hover:border-[#0068C8] hover:text-[#0068C8] transition duration-300" 
              >
                Track
              </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default OrderTrack