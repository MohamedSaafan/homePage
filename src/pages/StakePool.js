import React from "react";
import FirstNavBar from "../components/FirstNavBar";
import Header from "../components/StakePool/StakePoolHeader.js";
import About from "../components/StakePool/About";
import Pools from "../components/StakePool/Pools";
import Cards from "../components/StakePool/Cards";
import JoinUs from "../components/StakePool/JoinUs";
import Footer from "../components/Footer";

function StakePool(props) {
  return (
    <div>
      <Header />
      <Pools />
      <About />
      <Cards />
      <JoinUs />
      <Footer />
    </div>
  );
}
export default StakePool;
