import React from "react";

import Styles from "./Header.module.css";
import MainNavBar from "./MainNavBar";
import { Link } from "react-router-dom";

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
    navBar.classList.add(Styles.navOpen);
  };
  const handleNavClose = () => {};
  return (
    <header className={Styles.mainHeader}>
      <MainNavBar
        styles={Styles}
        handleNavOpen={handleNavOpen}
        handleNavClose={handleNavClose}
        shouldManipulate={true}
      />

      <div className="container">
        <div className={Styles.headerContent}>
          <h1>Cardano StakePools</h1>

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
