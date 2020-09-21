import React from "react";

import Styles from "./Header.module.css";
import MainNavBar from "./MainNavBar";
import { Link } from "react-router-dom";

const Header = (props) => {
  const handleNavOpen = () => {
    let mainHeading = document.querySelector(`.${props.styles.headerContent}`);
    mainHeading.style.display = "none";
  };
  const handleNavClose = () => {
    let mainHeading = document.querySelector(`.${props.styles.headerContent}`);
    mainHeading.style.display = "block";
  };
  return (
    <header className={Styles.mainHeader}>
      <MainNavBar
        styles={Styles}
        handleNavOpen={handleNavOpen}
        handleNavClose={handleNavClose}
      />

      <div className="container">
        <div className={Styles.headerContent}>
          <h1>Alts</h1>
          <span>Together</span>
          <p>
            {" "}
            Learn with Us and now Earn with us. Our Cardano stakepools are now
            live.
          </p>
          <Link to="/stakepool">
            <button>learn more</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
