import React from "react";
import Banner from "../images/Banner.png";
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
            commodi non perferendis soluta assumenda maxime laudantium adipisci
            laboriosam id incidunt, tenetur, fugiat numquam omnis fuga...
          </p>
          <button>learn more</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
