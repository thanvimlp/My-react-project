import React from "react";
import mindImage2 from "../assets/images/mindnes_2.png";

const About = () => {
  return (
    <>
      {/* About */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left - Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="max-w-xl">
              At <span className="text-pink-500 font-semibold">MIND</span>
              <span className="text-blue-500 font-semibold">NEST</span>, we
              believe mental health is just as important as physical health. We
              offer easy access to wellness tools, guided therapy, and a
              supportive community.
            </p>
          </div>

          {/* Right - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={mindImage2} // Replace with your image path
              alt="Our Mission"
              className="max-w-[300px] md:max-w-[400px] h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
