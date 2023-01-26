import React from "react";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

// components
import Navbar from "./Navbar";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
};

export default HomePage;
