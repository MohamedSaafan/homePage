import React from "react";

import Styles from "./CamperVan.module.css";
import MainNavBar from "../components/MainNavBar";
import Header from "../components/CamperVan/CamparVanHeader";
import TheChallenge from "../components/CamperVan/ComparVanChallenge";

const CamperVan = (props) => {
  return (
    <div className={`${Styles.camperVan}`}>
      <MainNavBar color="#558eb3" />
      <Header />
      <TheChallenge />
    </div>
  );
};
export default CamperVan;
