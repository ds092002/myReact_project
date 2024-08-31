import React from 'react';

import about1 from '../assets/about-1.jpg'
import about2 from '../assets/about-2.jpg'
import vijay from '../assets/vijay.jpg'
import darshan from '../assets/darshan.jpg'
import dhaval from '../assets/dhaval.jpg'
import avatar from '../assets/avatar-1-180x180.jpg'

import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";


const About = () => {

  const teamMembers = [
  {
    name: "Dhaval Solanki",
    position: "CEO & Founder",
    imgSrc: dhaval
  },
  {
    name: "Darashan Chauhan",
    position: "Market Development",
    imgSrc: darshan
  },
  {
    name: "Vijay Solanki",
    position: "Head Engineer",
    imgSrc: vijay
  },
  {
    name: "Vrishabh Jogani",
    position: "Marketing",
    // imgSrc: dhaval
  }
];


  return (
    <div className="">

        {/* Banner Section */}
        <div className="px-2 py-14 lg:px-10  lg:mx-52">
          <div  className="px-3 py-32 lg:px-32 rounded-lg  text-white bg-center bg-fixed relative before:content before:h-full before:w-full before:absolute before:top-0 before:left-0 before:bg-black before:opacity-80 before:rounded-lg" style={{ backgroundImage: `url(${about1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="text-center relative z-10">
              <p className="uppercase lg:text-lg text-sm font-medium mb-3 tracking-wider">Start from since 1990</p>
              <p className="text-2xl lg:text-[52px] font-extrabold leading-tight tracking-wide">We Help Everyone <br /> Enjoy Amazing Products</p>
            </div>
            <div className="lg:flex justify-center sm:inline relative z-10 flex-wrap">
              <div className="text-center mx-4 mt-12">
                <p className="lg:text-7xl text-3xl font-extrabold">6M+</p>
                <p className="lg:text-lg text-sm font-medium">Happy Clients</p>
              </div>
              <div className="text-center mx-4 mt-12">
                <p className="lg:text-7xl text-3xl font-extrabold">8M+</p>
                <p className="lg:text-lg text-sm font-medium">Great Products</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 lg:px-14 px-4 pb-20 lg:mx-52">
          <div>
            <p className="lg:text-3xl text-2xl text-black font-bold tracking-wide mb-5">Who We Are</p>
            <p className="text-gray-400 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
          </div>
          <div>
            <p className="lg:text-3xl text-2xl text-black font-bold tracking-wide mb-5">Our History</p>
            <p className="text-gray-400 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
          </div>
          <div>
            <p className="lg:text-3xl text-2xl text-black font-bold tracking-wide mb-5">Our Mission</p>
            <p className="text-gray-400 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-zinc-100 px-4 lg:px-14 py-20">
          <p className="lg:text-3xl text-2xl text-black font-bold tracking-wide mb-5 lg:mx-52">Our Team</p>
          <hr className='lg:mx-52'/>
          <div className="grid md:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-6 mt-7 lg:mx-52">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className="overflow-hidden w-full rounded-xl">
                  <img src={member.imgSrc} alt={member.name} className="lg:w-80 lg:h-96 w-32 h-44 duration-300 rounded-xl object-cover hover:scale-110 mb-4" />
                </div>
                <div className="text-center lg:p-6 pb-0">
                  <p className="text-black lg:text-xl text-base font-bold hover:text-sky-600 duration-200 text-left flex justify-center items-center">{member.name}</p>
                  <p className="text-gray-400 pt-1 text-base lg:text-lg text-left flex justify-center items-center">{member.position}</p>
                  <div className='flex justify-start lg:justify-center'>
                    <span className="lg:mx-3  lg:my-3 pt-1 text-xl lg:text-2xl hover:text-sky-600 duration-200"><FiFacebook/></span>
                    <span className="lg:mx-3 mx-2 lg:my-3 pt-1 text-xl lg:text-2xl hover:text-sky-600 duration-200"><FiTwitter/></span>
                    <span className="lg:mx-3 mx-2 lg:my-3 pt-1 text-xl lg:text-2xl hover:text-sky-600 duration-200"><FaInstagram/></span>
                    <span className="lg:mx-3 mx-2 lg:my-3 pt-1 text-xl lg:text-2xl hover:text-sky-600 duration-200"><ImPinterest2/></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Section */}
        <div className="lg:px-14 px-4 lg:mx-52 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="sm:pr-20 lg:pr-52 h-fit my-auto">
              <p className="uppercase text-sm lg:text-lg font-medium mb-1 lg:mb-3 tracking-wider  text-[#000]">Our performance</p>
              <p className="text-3xl lg:text-[52px] font-extrabold lg:leading-[55px] mb-2 lg:mb-8 text-[#000]">We Believe In Quality Products</p>
              <p className="text-gray-400 lg:pr-12 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
            </div>
            <div>
             <img src={about2} alt="Performance" className="rounded-xl" />
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="px-4 pb-20 lg:px-14 lg:mx-52">
          <div className="bg-sky-100 text-center py-20 rounded-lg">
            <div className="flex justify-center mb-5">
              <img src={avatar} alt="Client Avatar" className="rounded-full lg:w-28 w-24 lg:h-28 h-24" />
            </div>
            <p className="text-xl lg:text-2xl text-[#000] font-semibold w-5/♠ lg:w-4/5 m-auto tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum placerat diam eros eget ante suscipit porta sed sed elit. Aenean tincidunt porta molestie.</p>
          </div>
        </div>
    </div>
  );
};


export default About;
