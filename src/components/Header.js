import React from "react";

import "./Header.css";
import MainNavBar from "./MainNavBar";

const Header = (props) => {
  return (
    <header className="main-header">
      <MainNavBar />

      <div className="container">
        <div className="header-content">
          <h1>Alt</h1>
          <span>Together</span>
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          </p>
          <button>learn more</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
