import React from 'react'
import { VscEye } from "react-icons/vsc";


const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-6">
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-black">Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="login-email" className="block text-black">
                  Username or email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="login-email"
                  className="mt-1 w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="login-password" className="block text-black">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="login-password"
                  className="mt-1 w-full p-2 border border-gray-300 rounded"
                  required
                />
                <a href=""><i className='absolute top-11 right-3 text-black'><VscEye/></i></a>
              </div>
              <div className="flex items-center mb-4">
                <button
                  type="submit"
                  className="bg-[#0068C8] text-gray-50  py-2 rounded hover:bg-white hover:border font-semibold px-14 hover:border-[#0068C8] hover:text-[#0068C8] transition duration-300"
                >
                  LOG IN
                </button>
                <div className="flex items-center ml-10">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="mr-2 rounded"
                  />
                  <label htmlFor="remember-me" className="text-gray-700">
                    Remember Me
                  </label>
                </div>
              </div>
              <a href="#" className="text-black hover:underline">
                Lost your password?
              </a>
            </form>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Register</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="register-username" className="block text-gray-700">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="register-username"
                  className="mt-1 w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="register-email" className="block text-gray-700">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="register-email"
                  className="mt-1 w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="register-password" className="block text-gray-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="register-password"
                  className="mt-1 w-full p-2 border border-gray-300 rounded"
                  required
                />
                <a href=""><i className='absolute top-11 right-3 text-black'><VscEye/></i></a>
              </div>
              <button
                type="submit"
                className="bg-[#0068C8] text-gray-50  py-2 rounded hover:bg-white hover:border font-semibold px-14 hover:border-[#0068C8] hover:text-[#0068C8] transition duration-300" 
              >
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </div>
  
    )
}

export default RegisterPage