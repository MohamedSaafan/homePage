import React from "react";
import FirstNavBar from "../components/FirstNavBar";
import Footer from "../components/Footer";
import MainNavBar from "../components/MainNavBar";
import Styles from "./Sponsors.module.css";
import Header from "../components/Sponsors/SponsorHeader";
import About from "../components/Sponsors/SponsorAbout";
import WhyUs from "../components/Sponsors/WhyUs";
import OurSponsors from "../components/Sponsors/OurSponsors";
import Graphics from "../components/Sponsors/Demographics";
import AboutTeam from "../components/Sponsors/AboutTeam";

const Sponsors = (props) => {
  return (
    <>
      <MainNavBar color="rgb(28,111,159)" />
      <Header />
      <About />
      <WhyUs />
      <OurSponsors />
      <Graphics />

      <AboutTeam />
      <Footer />
    </>
  );
};
export default Sponsors;
