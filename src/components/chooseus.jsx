import React from 'react';
import transparentFeesImage from '../assets/fees.jpg'; // Image for "Transparent & Affordable Fees"
import roundTheClockImage from '../assets/customer-service.jpg'; // Image for "Round-the-Clock Support"
import focusOnEducationImage from '../assets/presentation.jpg'; // Image for "Focus on Education"
import predictiveAnalysisImage from '../assets/ml-model.jpg'; // Image for "Predictive Analysis Model"
import approvalRateImage from '../assets/discount.jpg'; // Image for "93% Approval Rate"

const ChooseUs = () => {
  const features = [
    {
      image: transparentFeesImage,
      title: 'Transparent & Affordable Fees',
    },
    {
      image: roundTheClockImage,
      title: 'Round-the-Clock Support',
    },
    {
      image: focusOnEducationImage,
      title: 'Focus on Education',
    },
    {
      image: predictiveAnalysisImage,
      title: 'Predictive Analysis Model',
    },
    {
      image: approvalRateImage,
      title: '93% Approval Rate',
    },
  ];

  return (
    <section
      className="py-16 px-8 text-center relative"
      style={{
        background: `
          radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, transparent 50%),
          linear-gradient(to right, #E6E8FA, #F5F5F5)
        `,
      }}
    >
      {/* Heading and Subheading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Why Choose Us</h2>
      <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
        Ethical, Transparent, and Results-Driven
      </p>

      {/* Features Grid */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 mt-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center w-40">
            {/* Image */}
            <div className="mb-4 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;