import React from "react";
//import heroImage from "../assets/hero-image.png"; // Add a placeholder image for now

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text and CTA */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Create and Sell Custom Products
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            No upfront costs. No hassle. High-quality products with your unique
            designs.
          </p>
          <div className="space-x-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md">
              Start for free
            </button>
            <button className="bg-white border border-green-500 text-green-500 px-6 py-3 rounded-md">
              See pricing
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          {/* <img
            src={heroImage}
            alt="Custom Products"
            className="w-full max-w-md"
          /> */}
          <img
            src="https://picsum.photos/600"
            alt="Custom Products"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
