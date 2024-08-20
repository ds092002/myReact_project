import {React, useState, useEffect} from 'react';
import camera from '../assets/cat-camera.png';
import games from '../assets/icon-games.png';
import headphone from '../assets/icon-headphone.png';
import watch from '../assets/cat-watches.png';
import laptop from '../assets/icon-laptops.png';
import smarthomes from '../assets/cat-smarthome.png';
import phone from '../assets/icon-phone.png';
import speaker from '../assets/icon-speaker.png';
import tablet from '../assets/cat-tablet.png';
import television from '../assets/icon-television.png';

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);


  const cards = [
    {
      image: camera,
      title: 'Camera',
      backgroundColor: '#F5DEDE',
    },
    {
      image: games,
      title: 'Games',
      backgroundColor: '#E6E5EF',
    },
    {
      image: headphone,
      title: 'Headphones',
      backgroundColor: '#EEEAE0',
    },
    {
      image: watch,
      title: 'Iwatch',
      backgroundColor: '#E9E5EF',
    },
    {
      image: laptop,
      title: 'Laptops & Desktops',
      backgroundColor: '#F2E1D7',
    },
    {
      image: smarthomes,
      title: 'Smart Home',
      backgroundColor: '#EEBDE8',
    },
    {
      image: phone,
      title: 'Smartphone',
      backgroundColor: '#DAEBE9',
    },
    {
      image: speaker,
      title: 'Speakers',
      backgroundColor: '#F2F5DE',
    },
    {
      image: tablet,
      title: 'Tablets',
      backgroundColor: '#FFF5E8',
    },
    {
      image: television,
      title: 'Televisions',
      backgroundColor: '#EDF1FF',
    },
  ];


  useEffect(() => {
    if (isHovering) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 4000); // Adjust the speed as needed
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const getVisibleCards = () => {
    return [
      ...cards.slice(currentIndex, cards.length),
      ...cards.slice(0, currentIndex),
    ].slice(0, 5);
  };

  return (
    <div className="mt-2">
      <div className="">
        <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <div className="flex mx-60 items-center space-x-9 relative">
            {getVisibleCards().map((card, index) => (
              <a href="">
              <div
                className="flex flex-col justify-center items-center w-64 h-36 rounded-lg shadow-md hover:border-1 hover:border-[#0065C8] transition duration-100"
                key={index}
                style={{ backgroundColor: card.backgroundColor }}
              >
                <img className="w-20 h-16 object-fit rounded-lg" src={card.image} alt="Card" />
                <h3 className="text-sm  text-gray-950 font-semibold">{card.title}</h3>
              </div>
              </a>
            ))}
            <div className="flex items-center justify-between mt-4">
            <button className="w-6 h-6 absolute left-72 rounded-full bg-gray-300" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)}>&lt;</button>
            <button className="w-6 h-6 rounded-full bg-gray-300" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)}>&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
