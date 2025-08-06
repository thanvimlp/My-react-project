import React from "react";
import mindImage from "../assets/images/mindnes_1.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      {/* Hero */}
      <section className="w-screen h-screen bg-gradient-to-br from-pink-200 via-white to-blue-200 flex flex-col md:flex-row items-center justify-center px-6">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={mindImage} // <-- Replace with your PNG image path
            alt="Mental wellness"
            className="max-w-[400px] md:max-w-[500px] h-auto"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start justify-center space-y-4 pt-8">
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="text-pink-500">MIND</span>
            <span className="text-blue-500">NEST</span>
          </h1>
          <p className="text-base sm:text-lg max-w-md text-gray-800">
            Focused on your mental health — therapy, tools, and mindfulness
            practices in one place.
          </p>
          <Link
            to="/explore-tools"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
