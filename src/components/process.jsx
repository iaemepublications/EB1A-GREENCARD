import React from 'react';
import step1Image from '../assets/pic1.jpg'; // Replace with the actual path to your first image
import step2Image from '../assets/pic2.jpg'; // Replace with the actual path to your second image
import step3Image from '../assets/pic3.jpg'; // Replace with the actual path to your third image
import step4Image from '../assets/pic4.jpg'; // Replace with the actual path to your fourth image
import step5Image from '../assets/pic5.jpg'; // Replace with the actual path to your fifth image
import step6Image from '../assets/pic6.jpg'; // Replace with the actual path to your sixth image
import step7Image from '../assets/pic7.jpg'; // Replace with the actual path to your seventh image
import step8Image from '../assets/pic8.jpg'; // Replace with the actual path to your eighth image
import step9Image from '../assets/pic9.jpg'; // Replace with the actual path to your ninth image

const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Profile Analysis & Strategy Development',
      image: step1Image,
    },
    {
      number: 2,
      title: 'Document Drafting & AI-Driven Assessment',
      image: step2Image,
    },
    {
      number: 3,
      title: 'Fulfilling Criteria According to Custom Model',
      image: step3Image,
    },
    {
      number: 4,
      title: 'Research Support with Professors & Industry Experts',
      image: step4Image,
    },
    {
      number: 5,
      title: 'Media Pitching & Opportunity Sourcing',
      image: step5Image,
    },
    {
      number: 6,
      title: 'Vendor Procurement & Content Diversification',
      image: step6Image,
    },
    {
      number: 7,
      title: 'Weekly Support & Mentorship',
      image: step7Image,
    },
    {
      number: 8,
      title: 'AI-Powered Petition Analysis with Legal Expertise',
      image: step8Image,
    },
    {
      number: 9,
      title: 'Final Application Review & Submission',
      image: step9Image,
    },
  ];

  return (
    <section className="py-16 px-8 bg-white text-center">
      {/* Heading and Description */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Process</h2>
      <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
        From personalized strategies to AI-powered tools, we guide you every step of the way.
      </p>
      <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto mt-2 leading-relaxed">
        From initial profile analysis to final submission, we’re with you every step of the way.
      </p>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            {/* Number Circle */}
            <div className="w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              {step.number}
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              {step.title}
            </h3>

            {/* Image with Hexagonal Shape */}
            <div className="w-64 h-64">
              <img
                src={step.image}
                alt={`Step ${step.number}`}
                className="w-full h-full object-cover"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;