import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 ">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-pink-500 font-semibold">MIND</span>
          <span className="text-blue-500 font-semibold">NEST</span>. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
