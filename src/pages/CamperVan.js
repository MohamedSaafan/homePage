import React from "react";

import Styles from "./CamperVan.module.css";
import MainNavBar from "../components/MainNavBar";
import Header from "../components/CamperVan/CamparVanHeader";
import TheChallenge from "../components/CamperVan/ComparVanChallenge";
import Countries from "../components/CamperVan/ComparVanCountries";
import Cards from "../components/CamperVan/CamperVanCards";
import WhyUs from "../components/CamperVan/WhyUs";
import Footer from "../components/Footer";

const CamperVan = (props) => {
  return (
    <div className={`${Styles.camperVan}`}>
      <MainNavBar color="#558eb3" />
      <Header />
      <TheChallenge />
      <Countries />
      <Cards />
      <WhyUs />
      <Footer />
    </div>
  );
};
export default CamperVan;
