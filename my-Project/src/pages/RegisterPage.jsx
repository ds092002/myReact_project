import React, { useState } from 'react'
import { VscEye } from "react-icons/vsc";


const RegisterPage = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:7007/api/user/users/register-User', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(data.msg); // Successfully registered
    } else {
      setMessage(data.msg); // Error message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="lg:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-2 lg:p-8">

        <div className="bg-white mt-4 rounded-lg">
          <h2 className="text-2xl flex justify-center items-center lg:flex lg:justify-start lg:items-start lg:text-3xl font-bold mb-4 lg:mb-6 text-black">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="login-email" className="block text-black">
                Username or email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="login-email"
                className="mt-1 w-full py-2.5  border border-gray-300 rounded"
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
                className="mt-1 w-full py-2.5 border border-gray-300 rounded font-semibold"
                required
              />
              <a href=""><i className='absolute top-11 right-3 text-black'><VscEye /></i></a>
            </div>
            <div className="flex items-center mb-4">
              <button
                type="submit"
                className="bg-[#0068C8] text-[#fff] py-2 lg:py-2 rounded hover:bg-white hover:border font-bold px-8 lg:px-14 hover:border-[#0068C8] hover:text-[#0068C8] transition duration-300"
              >
                LOG IN
              </button>
              <div className="flex items-center ml-10">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="mr-2 rounded"
                />
                <label htmlFor="remember-me" className="text-gray-700 font-semibold">
                  Remember Me
                </label>
              </div>
            </div>
            <a href="#" className="text-black hover:underline">
              Lost your password?
            </a>
          </form>
        </div>


        <div className="bg-white rounded-lg lg:p-8">
          <h2 className="text-2xl flex justify-center items-center lg:flex lg:justify-start lg:items-start lg:text-3xl font-bold mb-4 lg:mb-6 text-[#000]">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="register-username" className="block text-gray-700 font-semibold">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 w-full py-2.5 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="register-email" className="block text-gray-700 font-semibold">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full py-2.5 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="register-password" className="block text-gray-700 font-semibold">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full py-2.5 border border-gray-300 rounded"
                required
              />
              <a href=""><i className='absolute top-11 right-3 text-black'><VscEye /></i></a>
            </div>
            <button
              type="submit"
              className="bg-[#0068C8] text-[#fff]  py-2 rounded hover:bg-[#fff] hover:border font-bold px-8 lg:px-14 hover:border-[#0068C8] hover:text-[#0068C8] transition duration-300"
            >
              REGISTER
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>

  )
}

export default RegisterPage