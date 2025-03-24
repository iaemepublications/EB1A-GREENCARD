import React from 'react';
import HomeNavbar from '../components/homenavbar'; // Import the HomeNavbar component
import topImage from '../assets/journey.jpg'; // Replace with the actual path to the top image
import bottomImage from '../assets/journey3.jpg'; // Replace with the actual path to the bottom image

const HomePage = () => {
  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <HomeNavbar />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen pt-20 px-6 bg-white">
        {/* Left Side: Text and Button */}
        <div className="md:w-1/2 flex flex-col justify-center space-y-6 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Your Personalized <br />
            <span className="border-b-4 border-orange-400">Immigration</span> Education Partner
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            Granting Immigration Wishes, One Ward at a Time
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Empowering you with AI-driven tools, expert guidance, and a supportive community to navigate your immigration journey with confidence.
          </p>
          <button className="bg-gray-500 text-white font-medium py-3 px-6 rounded-full hover:bg-gray-600 transition duration-300 w-fit">
            Start Your Journey Today
          </button>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.872 0-2.159 1.462-2.159 2.971v5.696h-3v-11h2.879v1.495h.041c.401-.761 1.381-1.561 2.841-1.561 3.038 0 3.6 2.001 3.6 4.604v6.462z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Two Images */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-row space-x-4 justify-center">
  <img
    src={topImage}
    alt="Group with flag"
    className="max-w-[250px] h-auto rounded-lg shadow-lg"
  />
  <img
    src={bottomImage}
    alt="Group of people"
    className="max-w-[250px] h-[10%] rounded-lg shadow-lg mt-[5%]"
  />
</div>


      </section>
    </div>
  );
};

export default HomePage;