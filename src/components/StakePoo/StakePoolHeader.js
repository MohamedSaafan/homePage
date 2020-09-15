import React from "react";
import { Link } from "react-router-dom";
import MainNavBar from "../MainNavBar";
import styles from "./StakePoolHeader.module.css";
import banner from "../../images/stakepool banner.png";

const Header = (props) => {
  return (
    <header className={styles.mainHeader}>
      <MainNavBar color="#13699b" />
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
