import React from "react";
import FirstNavBar from "../components/FirstNavBar";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = (props) => {
  return (
    <>
      {" "}
      <FirstNavBar />
      <Header />
      <About />
      <Footer />
    </>
  );
};
export default Home;
