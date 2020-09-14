import React from "react";

import "./Header.css";
import MainNavBar from "./MainNavBar";

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
          <button>learn more</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
