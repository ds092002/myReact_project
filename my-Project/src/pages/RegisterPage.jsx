import React, { useState } from 'react'
import { VscEye } from "react-icons/vsc";
import axios from 'axios'


const RegisterPage = () => {

  const [isRegister, setIsRegister] = useState('');
  const [fromData, setFromData] = useState({
    userName:'',
    email:'',
    password:''
  })

  const onSubmit = async (e) => {
    e.preventDefault();

    let data = async () => {
      try {
        const response = await axios.post('http://localhost:7007/api/user/users/register-User', fromData);   
        console.log('User Registerd Succesfully', response);
             
      } catch (error) {
        console.error('error react',error)
      }
    }
    data();
  };

  const resetData = () => {
    setFromData({
      userName:"",
      email:"",
      password:""
    })
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFromData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validData = () => {
    const fromErrors = {};
    if(isRegister){
      if (!fromData.userName) fromErrors.userName = 'User Name is Require';
      if (!fromData.email) fromErrors.email = 'Email is Require';
      if (!fromData.password) fromErrors.password = 'Password is Require';
    }

    if (!fromData.email || !validateEmail(fromData.email)) {
      fromErrors.email = 'Valid Email is required'
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="lg:max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-2 lg:p-8">
        <div className="bg-white rounded-lg lg:p-8">
          <h2 className="text-2xl flex justify-center items-center lg:flex lg:justify-start lg:items-start lg:text-3xl font-bold mb-4 lg:mb-6 text-[#000]">Register</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="register-username" className="block text-gray-700 font-semibold">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                name='userName'
                value={fromData.userName}
                onChange={handleInputChange}
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
                name='email'
                value={fromData.email}
                onChange={handleInputChange}
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
                name='password'
                value={fromData.password}
                onChange={handleInputChange}
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
          {/* {message && <p>{message}</p>} */}
        </div>
      </div>
    </div>

  )
}

export default RegisterPage