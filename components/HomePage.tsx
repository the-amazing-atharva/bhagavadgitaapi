import React from "react";
import Footer from "./Footer";
import HomeContainer from "./HomeContainer";

// components
import Navbar from "./Navbar";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomeContainer />
      <Footer />
    </>
  );
};

export default HomePage;
