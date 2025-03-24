import React from 'react';
import HomeNavbar from '../components/HomeNavbar'; // Import the HomeNavbar component
import topImage from '../assets/journey.jpg'; // Replace with the actual path to the top image
import bottomImage from '../assets/journey3.jpg'; // Replace with the actual path to the bottom image

const HomePage = () => {
  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <HomeNavbar />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen pt-28 px-8 bg-white">
        {/* Left Side: Text and Button */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-6 px-4 mt-[0%]">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Your Personalized <br />
            <span className="italic bg-[#f4d6b1] px-1">Immigration</span> Education Partner
          </h1>
          <h2 className="text-lg md:text-xl italic text-gray-600">
            Granting Immigration Wishes, One Ward at a Time
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Empowering you with AI-driven tools, expert guidance, and a supportive community to navigate your immigration journey with confidence.
          </p>

          {/* CTA Button */}
          <button className="bg-[#5F655F] text-white font-medium py-3 px-6 rounded-full hover:bg-[#4F544F] transition duration-300 w-fit">
            Start Your Journey Today
          </button>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            {/* Facebook */}
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-facebook-square text-2xl"></i>
            </a>
            {/* Twitter */}
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            {/* Instagram */}
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            {/* YouTube */}
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Right Side: Two Images */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col space-y-4">
          <img
            src={topImage}
            alt="Group with flag"
            className="w-full max-w-[400px] h-[250px] object-cover rounded-lg shadow-lg mx-auto"
          />
          <img
            src={bottomImage}
            alt="Group of people"
            className="w-full max-w-[400px] h-[250px] object-cover rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;