import React, { useState } from "react";
import xbox from "../assets/xbox.jpg";
import s23 from "../assets/s23.jpg";

// Sample data for cards
const cardData = [
  {
    image: xbox,
    title: "Xbox Series",
    description: "Xbox Series S - 1TB Gaming All-Digital Console, 4K Streaming Media",
    rating: "4.5",
    currentPrice: "279.99",
    originalPrice: "289.99",
    sold: 23,
    stock: 35,
    days: 1018,
    hours: 6,
    mins: 56,
    secs: 6,
    discount: 3,
    hotDeal: true,
  },
  {
    image: s23,
    title: "Samsung Galaxy",
    description: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
    rating: "4.7",
    currentPrice: "699.99",
    originalPrice: "949.99",
    sold: 90,
    stock: 167,
    days: 1040,
    hours: 6,
    mins: 56,
    secs: 5,
    discount: 26,
  },
  {
    image: xbox,
    title: "Another Xbox",
    description: "Another Gaming Console",
    rating: "4.3",
    currentPrice: "259.99",
    originalPrice: "279.99",
    sold: 12,
    stock: 30,
    days: 1000,
    hours: 5,
    mins: 45,
    secs: 30,
    discount: 7,
  },
  {
    image: s23,
    title: "Another Samsung",
    description: "Samsung Galaxy S22 Ultra, Factory Unlocked, 256GB",
    rating: "4.6",
    currentPrice: "599.99",
    originalPrice: "899.99",
    sold: 75,
    stock: 120,
    days: 1050,
    hours: 7,
    mins: 30,
    secs: 15,
    discount: 25,
  },
];

// DealCard Component
const DealCard = ({
  image,
  title,
  description,
  rating,
  currentPrice,
  originalPrice,
  sold,
  stock,
  days,
  hours,
  mins,
  secs,
  discount,
  hotDeal,
}) => {
  return (
    <div className="flex rounded-lg border p-4 w-full max-w-2xl">
      {/* Image Section */}
      <div className="relative w-1/3 flex-shrink-0">
        {discount && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-bold px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
        {hotDeal && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
            HOT
          </span>
        )}
        <img src={image} alt={title} className="w-full rounded-lg object-cover" />
      </div>

      {/* Details Section */}
      <div className="w-2/3 flex flex-col">
        <h4 className="text-sm text-gray-500 font-semibold">{title}</h4>
        <p className="text-lg font-medium">{description}</p>
        <div className="flex items-center gap-1">
          <div className="text-yellow-500">⭐</div>
          <span className="text-gray-600">{rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-lg font-bold text-red-500">${currentPrice}</div>
          <div className="line-through text-gray-500">${originalPrice}</div>
        </div>
        <p className="text-sm text-gray-600">
          Sold: {sold}/{stock}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
          <div
            className="bg-blue-500 h-2.5 rounded-full"
            style={{ width: `${(sold / stock) * 100}%` }}
          ></div>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-2 text-center text-white mt-auto">
          <div className="bg-blue-600 py-2 rounded-lg">
            <p className="text-lg font-bold">{days}</p>
            <span className="text-sm">Days</span>
          </div>
          <div className="bg-blue-600 py-2 rounded-lg">
            <p className="text-lg font-bold">{hours}</p>
            <span className="text-sm">Hours</span>
          </div>
          <div className="bg-blue-600 py-2 rounded-lg">
            <p className="text-lg font-bold">{mins}</p>
            <span className="text-sm">Mins</span>
          </div>
          <div className="bg-blue-600 py-2 rounded-lg">
            <p className="text-lg font-bold">{secs}</p>
            <span className="text-sm">Secs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// DealsOfTheDay Component with Pagination
const DealsOfTheDay = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 2;
  const scrollContainerRef = React.useRef(null);

  const handleNextPage = () => {
    if ((currentPage + 1) * cardsPerPage < cardData.length) {
      setCurrentPage(currentPage + 1);
      scrollContainerRef.current.scrollLeft += scrollContainerRef.current.offsetWidth;
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.offsetWidth;
    }
  };

  const visibleCards = cardData.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <div className="p-6">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 scrollbar-hide"
      >
        {visibleCards.map((card, index) => (
          <DealCard key={index} {...card} />
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className={`px-4 py-2 text-white rounded-lg ${
            currentPage === 0 ? "bg-gray-400" : "bg-blue-500"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={(currentPage + 1) * cardsPerPage >= cardData.length}
          className={`px-4 py-2 text-white rounded-lg ${
            (currentPage + 1) * cardsPerPage >= cardData.length
              ? "bg-gray-400"
              : "bg-blue-500"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DealsOfTheDay;
