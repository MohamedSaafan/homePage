import React from "react";
import { Link } from "react-router-dom";
import MainNavBar from "../MainNavBar";
import styles from "./StakePoolHeader.module.css";
import banner from "../../images/Header.png";

const Header = (props) => {
  const handleNavOpen = () => {
    const links = document.querySelector(".toggle-links");
    links.style.zIndex = "1000";
    const navBar = document.querySelector(".main-navbar ul");
    navBar.style.maringTop = 0;
    const lis = document.querySelectorAll(".main-navbar ul li a");
    for (let a of lis) {
      a.style.color = "#fff";
    }
    navBar.classList.add(styles.navOpen);
  };
  const handleNavClose = () => {};
  return (
    <header className={styles.mainHeader}>
      <MainNavBar
        color="#13699b"
        styles={styles}
        handleNavOpen={handleNavOpen}
        handleNavClose={handleNavClose}
        shouldManipulate={true}
      />
      <div className={styles.headerContentWrapper}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <h1>Cardano StakePool </h1>
            <h4>Low Fees Highest Rewards.</h4>
            <p>
              {" "}
              Learn with Us and now Earn with us. Our Cardano stakepools are now
              live.
            </p>
            <Link to="/stakepool">
              <button>get started</button>
            </Link>
          </div>
        </div>
        <div className={styles.headerImage}>
          {" "}
          <img src={banner} alt="banner" />
        </div>
      </div>
    </header>
  );
};
export default Header;
