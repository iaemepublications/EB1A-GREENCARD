import React from 'react';
import image1 from '../assets/rag.jpg'; // Replace with the actual path to your first image
import image2 from '../assets/minded.jpg'; // Replace with the actual path to your second image
import image3 from '../assets/ethical.jpg'; // Replace with the actual path to your third image

const Immigration = () => {
    return (
        <section className="py-8 px-8 text-center bg-gradient-to-r from-[#E6E8FA] to-[#F5F5F5] ">
            {/* Heading and Subheading */}
            <h2 className="text-4xl md:text-6xl font-semibold text-black-800">Who We Are</h2>
            <h3 className="text-xl md:text-xl font-semibold text-black-600 mt-2">Immigration Education</h3>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto mt-6 leading-relaxed">
                We are a <b>Reasoning-Based AI-Powered Immigration Educational Cohort</b> dedicated to helping you upskill, save time, and build a compelling case for your immigration goals. We focus on empowering you with the tools, knowledge, and community to succeed ethically and transparently.
            </p>

            {/* Images and Captions */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-18 md:space-y-0 md:space-x-18 mt-12">
                {/* First Image and Caption */}
                <div className="flex flex-col items-center">
                    <img
                        src={image1}
                        alt="Reasoning Model AI"
                        className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg"
                    />
                    <p className="text-black-600 text-sm md:text-base mt-4 max-w-xs text-center">
                        Reasoning Model AI (RAG), tailored to your unique profile.
                    </p>
                </div>

                {/* Second Image and Caption */}
                <div className="flex flex-col items-center">
                    <img
                        src={image2}
                        alt="Supportive Community"
                        className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg"
                    />
                    <p className="text-black-600 text-sm md:text-base mt-4 max-w-xs text-center font-semibold">
                        A supportive community of like-minded individuals.
                    </p>
                </div>

                {/* Third Image and Caption */}
                <div className="flex flex-col items-center">
                    <img
                        src={image3}
                        alt="Focus on Education"
                        className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-lg"
                    />
                    <p className="text-black-600 text-sm md:text-base mt-4 max-w-xs text-center font-semibold">
                        Focus on education, collaboration, and ethical practices.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Immigration;