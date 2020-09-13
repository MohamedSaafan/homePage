import React from "react";
import "./MainNavBar.css";
import Logo from "../images/ATG Icon.png";
import { Link } from "react-router-dom";

const MainNavBar = (props) => {
  return (
    <div>
      <nav class="main-navbar">
        <div class="container">
          <div class="logo">
            <img src={Logo} alt="logo" />
            <h1>Alts</h1>
            <span>Together</span>
          </div>
          <ul class="list-unstyled">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/">about</Link>
            </li>
            <li>
              <Link to="/">videos</Link>
            </li>
            <li>
              <Link to="/">blog</Link>
            </li>
            <li>
              <Link to="/">contact</Link>
            </li>
          </ul>
          <div class="nav-end">
            <i class="fa fa-search fa-xl"></i>
            <button>join us</button>
            <span></span>
            <Link to="/login">login</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavBar;
