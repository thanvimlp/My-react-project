import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* navbar */}
      <div className="font-sans text-gray-800">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo / Brand */}
            <div className="text-2xl font-bold">
              <span className="text-pink-500">MIND</span>
              <span className="text-blue-600">NEST</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex space-x-8 items-center text-gray-700 font-medium">
              <Link to="#therapists" className="hover:text-blue-600">
                Our Therapists
              </Link>
              <Link to="#session" className="hover:text-blue-600">
                Take a Session
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
