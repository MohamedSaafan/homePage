import React from "react";
import FirstNavBar from "../components/FirstNavBar";
import Header from "../components/StakePoo/StakePoolHeader.js";
import About from "../components/StakePoo/About";
import Pools from "../components/StakePoo/Pools";
import Cards from "../components/StakePoo/Cards";
import JoinUs from "../components/StakePoo/JoinUs";
import Footer from "../components/Footer";

function StakePool(props) {
  return (
    <div>
      <FirstNavBar />
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
