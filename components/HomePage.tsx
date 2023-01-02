import React from "react";
import HomeContainer from "./HomeContainer";

// components
import Navbar from "./Navbar";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomeContainer />
    </>
  );
};

export default HomePage;
