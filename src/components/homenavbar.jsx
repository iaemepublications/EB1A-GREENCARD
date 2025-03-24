import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/statueofliberty.jpg'; // Ensure the logo path is correct

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-1 px-4 flex items-center justify-between w-[100%] mt-[0px] ">
      {/* Logo Section */}
      <div className="flex flex-col items-center mr-8 ml-[80px]"> {/* Added spacing */}
        <img
          src={logo}
          alt="Jinee Logo"
          className="h-18 w-auto mb-1" // Adjust size for better proportion
        />
        <span className="text-sm font-bold text-gray-800">
          EB1A-GREENCARD
        </span>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links (Reduce space between links) */}
      <div
        className={`md:flex md:items-center md:space-x-6 ${ // Consistent spacing between links
          isOpen ? 'block' : 'hidden'
        } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out z-10`}
      >
        <Link to="/" className="block md:inline-block text-gray-600 hover:text-gray-900 font-medium py-2 md:py-0 uppercase text-sm">
          Home
        </Link>
        <Link to="#" className="block md:inline-block text-gray-600 hover:text-gray-900 font-medium py-2 md:py-0 uppercase text-sm">
          About
        </Link>
        <Link to="#" className="block md:inline-block text-gray-600 hover:text-gray-900 font-medium py-2 md:py-0 uppercase text-sm">
          Services
        </Link>
        <Link to="#" className="block md:inline-block text-gray-600 hover:text-gray-900 font-medium py-2 md:py-0 uppercase text-sm">
          FAQs
        </Link>
        <Link to="#" className="block md:inline-block text-gray-600 hover:text-gray-900 font-medium py-2 md:py-0 uppercase text-sm">
          Contact
        </Link>
        <Link to="#" className="block md:inline-block text-gray-600 hover:text-gray-900 font-medium py-2 md:py-0 uppercase text-sm">
          Blog
        </Link>
        <Link to="#" className="block md:inline-block text-gray-600 hover:text-gray-900 font-medium py-2 md:py-0 uppercase text-sm">
          Testimonials
        </Link>
        <Link to="#" className="block md:inline-block text-gray-600 hover:text-gray-900 font-medium py-2 md:py-0 uppercase text-sm">
          Video Library
        </Link>
      </div>

      {/* Book Consultation Button */}
      <button className="bg-[#5F655F] text-white font-medium py-4 px-7 rounded-full hover:bg-[#4F544F] transition duration-300 text-sm ml-4">
  Book Consultation
</button>

    </nav>
  );
};

export default HomeNavbar;
