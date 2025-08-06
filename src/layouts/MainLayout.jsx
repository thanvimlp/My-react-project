import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
