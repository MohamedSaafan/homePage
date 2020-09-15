import React from "react";

import "./Header.module.css";
import MainNavBar from "./MainNavBar";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="main-header">
      <MainNavBar />

      <div className="container">
        <div className="header-content">
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
