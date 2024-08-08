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
        <div className="p-14 mx-52">
          <div  className="px-3 py-32 lg:px-32 rounded-lg  text-white bg-center bg-fixed relative before:content before:h-full before:w-full before:absolute before:top-0 before:left-0 before:bg-black before:opacity-80 before:rounded-lg" style={{ backgroundImage: `url(${about1})`, height: '600px', backgroundRepeat: 'no-repeat'}}>
            <div className="text-center relative z-10">
              <p className="uppercase text-lg font-medium mb-3 tracking-wider">Start from since 1990</p>
              <p className="text-4xl lg:text-[52px] font-extrabold leading-tight tracking-wide">We Help Everyone <br /> Enjoy Amazing Products</p>
            </div>
            <div className="flex justify-center relative z-10">
              <div className="text-center mx-10 mt-12">
                <p className="text-7xl font-extrabold">6M+</p>
                <p className="text-lg font-medium">Happy Clients</p>
              </div>
              <div className="text-center mx-10 mt-12">
                <p className="text-7xl font-extrabold">8M+</p>
                <p className="text-lg font-medium">Great Products</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 px-14 pb-20 mx-52">
          <div>
            <p className="text-3xl text-black font-bold tracking-wide mb-5">Who We Are</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
          </div>
          <div>
            <p className="text-3xl text-black font-bold tracking-wide mb-5">Our History</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
          </div>
          <div>
            <p className="text-3xl text-black font-bold tracking-wide mb-5">Our Mission</p>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-zinc-100 px-14 py-20">
          <p className="text-3xl text-black font-bold tracking-wide mb-5 mx-52">Our Team</p>
          <hr className='mx-52'/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7 mx-52">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className="overflow-hidden w-80 rounded-xl">
                  <img src={member.imgSrc} alt={member.name} className="w-80 h-96 duration-300 rounded-xl object-cover hover:scale-110" />
                </div>
                <div className="text-center p-6 pb-0">
                  <p className="text-black text-xl font-bold hover:text-sky-600 duration-200">{member.name}</p>
                  <p className="text-gray-400 pt-1">{member.position}</p>
                  <div className='flex justify-center'>
                    <span className="mx-3 my-3 pt-1 text-2xl hover:text-sky-600 duration-200"><FiFacebook/></span>
                    <span className="mx-3 my-3 pt-1 text-2xl hover:text-sky-600 duration-200"><FiTwitter/></span>
                    <span className="mx-3 my-3 pt-1 text-2xl hover:text-sky-600 duration-200"><FaInstagram/></span>
                    <span className="mx-3 my-3 pt-1 text-2xl hover:text-sky-600 duration-200"><ImPinterest2/></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Section */}
        <div className="px-14 mx-52 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="pr-52 h-fit my-auto">
              <p className="uppercase text-lg font-medium mb-3 tracking-wider  text-[#000]">Our performance</p>
              <p className="text-4xl lg:text-[52px] font-extrabold leading-[55px] tracking-wide mb-8 text-[#000]">We Believe In Quality Products</p>
              <p className="text-gray-400 pr-12 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc finibus euismod enim, eu finibus nunc ullamcorper et.</p>
            </div>
            <div>
             <img src={about2} alt="Performance" className="rounded-xl" />
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="px-14 mx-52">
          <div className="bg-sky-100 text-center py-20 rounded-lg">
            <div className="flex justify-center mb-5">
              <img src={avatar} alt="Client Avatar" className="rounded-full w-28 h-28" />
            </div>
            <p className="text-2xl w-4/5 m-auto tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum placerat diam eros eget ante suscipit porta sed sed elit. Aenean tincidunt porta molestie.</p>
          </div>
        </div>
    </div>
  );
};


export default About;
