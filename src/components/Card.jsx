import React from "react";

import { Link } from "react-router-dom";

const Card = ({ title, description, image }) => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <img
          src={image} // Replace with actual image path or import
          alt={title}
          className="w-20 h-20 mx-auto mb-4 object-cover rounded-full"
        />
        <h3 className="text-xl font-semibold text-pink-600">{title}</h3>
        <p className="text-gray-600 mt-2 mb-4">{description}</p>
        <Link
          to="/learnmore"
          className=" inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Learn More
        </Link>
      </div>
    </>
  );
};

export default Card;
