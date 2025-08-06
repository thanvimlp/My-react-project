import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <>
      <div className="w-screen h-[90vh] flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100 px-6">
        <div className="text-center space-y-6">
          <h1 className="text-7xl font-extrabold text-pink-500">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            The page you're looking for doesn’t exist or has been moved. Let’s
            get you back on track.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
