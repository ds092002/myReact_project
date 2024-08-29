import React, { useState } from 'react';
import xbox from "../assets/xbox.jpg";
import s23 from '../assets/s23.jpg';
import { FaStar } from "react-icons/fa";

const DealOfTheDay = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      img: xbox,
      title: "Xbox Series",
      description: "Xbox Series S-1TB Gaming All-Digital Console, 4K Streaming Media",
      price: "$279.99",
      originalPrice: "$289.99",
      sold: "1/35",
      progress: "95%",
      days: "1131",
      hours: "23",
      mins: "46",
      secs: "08",
    },
    {
      id: 2,
      img: s23,
      title: "Samsung Galaxy",
      description: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
      price: "$699.99",
      originalPrice: "$949.99",
      sold: "68/167",
      progress: "60%",
      days: "1153",
      hours: "23",
      mins: "46",
      secs: "07",
    },
    {
      id: 3,
      img: s23,
      title: "Samsung Galaxy",
      description: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
      price: "$699.99",
      originalPrice: "$949.99",
      sold: "68/167",
      progress: "60%",
      days: "1153",
      hours: "23",
      mins: "46",
      secs: "07",
    },
    {
        id: 4,
        img: xbox,
        title: "Xbox Series",
        description: "Xbox Series S-1TB Gaming All-Digital Console, 4K Streaming Media",
        price: "$279.99",
        originalPrice: "$289.99",
        sold: "1/35",
        progress: "95%",
        days: "1131",
        hours: "23",
        mins: "46",
        secs: "08",
      },
    // Add more slides as needed
  ];

  const itemsPerPage = 2;
  const totalSlides = Math.ceil(slides.length / itemsPerPage);
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative container">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex-shrink-0 w-full h-full px-2 md:w-[calc(50%-8px)] ${index % itemsPerPage === 0 ? "md:pr-1" : "md:pl-1"}`}
            >
              <a
                href="#"
                className="flex flex-col items-center border-2 h-full border-blue-400 rounded-lg shadow-lg md:flex-row relative"
              >
                <p className="absolute top-2 left-2 text-xs px-2 bg-blue-600 text-white rounded-tr-md rounded-b-md">-3%</p>
                <p className="absolute top-8 left-2 text-xs px-2 bg-red-500 text-white rounded-tr-md rounded-b-md">HOT</p>
                <img
                  className="object-cover w-full md:w-48 md:h-auto rounded-lg"
                  src={slide.img}
                  alt={slide.title}
                />
                <div className="flex flex-col p-4 text-sm text-gray-500">
                  <p className="text-sm hover:text-blue-600">{slide.title}</p>
                  <p className="text-lg text-gray-900 hover:text-blue-600">
                    {slide.description}
                  </p>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-red-500 text-xl font-semibold">
                    {slide.price}
                    <del className="text-gray-500 text-lg px-2 font-normal">{slide.originalPrice}</del>
                  </p>
                  <p>Sold: {slide.sold}</p>
                  <div className="h-2 bg-gray-200 rounded">
                    <div
                      className="bg-yellow-500 h-full rounded"
                      style={{ width: slide.progress }}
                    ></div>
                  </div>
                  <div className="flex space-x-4 mt-4 text-xl">
                    <p className="flex flex-col border bg-blue-600 text-white py-2 px-4 rounded-xl">
                      {slide.days} <span>Days</span>
                    </p>
                    <p className="flex flex-col border bg-blue-600 text-white py-2 px-4 rounded-xl">
                      {slide.hours} <span>Hours</span>
                    </p>
                    <p className="flex flex-col border bg-blue-600 text-white py-2 px-4 rounded-xl">
                      {slide.mins} <span>Mins</span>
                    </p>
                    <p className="flex flex-col border bg-blue-600 text-white py-2 px-4 rounded-xl">
                      {slide.secs} <span>Secs</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default DealOfTheDay;
