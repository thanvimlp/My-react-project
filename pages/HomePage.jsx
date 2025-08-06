import React from "react";
import Navbar from "../src/sections/Navbar";
import Hero from "../src/sections/Hero";
import About from "../src/sections/About";
import Service from "../src/sections/Service";
import Cta from "../src/sections/Cta";
import Footer from "../src/sections/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Cta />
    </>
  );
};

export default HomePage;
