import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <>
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-pink-500 to-blue-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to feel better?</h2>
        <p className="mb-6">
          Join thousands of people improving their mental wellness with
          MindWare.
        </p>
        <Link
          to="/signup"
          className="bg-white text-pink-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Start Your Journey
        </Link>
      </section>
    </>
  );
};

export default Cta;
