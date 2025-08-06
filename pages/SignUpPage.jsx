import React from "react";
import mindImage3 from "../src/assets/images/mindnes_3.png";
import { Link } from "react-router-dom";
const SignUpPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left side (Image + Quote) */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <img
            src={mindImage3}
            alt="Mental wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center p-6">
            <p className="text-black text-2xl font-semibold italic text-center">
              "Your mental health is a priority. Your happiness is essential."
            </p>
          </div>
        </div>

        {/* Right side (Sign Up Form) */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <form className="w-full max-w-md space-y-6 shadow-lg p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-blue-600 text-center">
              Sign Up
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition">
              Create Account
            </button>

            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-500 underline">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
