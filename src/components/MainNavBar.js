import React, { useEffect } from "react";
import "./MainNavBar.css";
import Logo from "../images/ATG Icon.png";
import { NavLink, Link } from "react-router-dom";

const MainNavBar = (props) => {
  useEffect(() => {
    let toggleLinks = document.querySelector(".toggle-links");
    let navLinks = document.querySelector(".nav-disktop");
    let shouldManipulateTheDom = props.shouldManipulate;

    let navOpen = false;

    // toggleLinks Click EventListener

    toggleLinks.addEventListener("click", (e) => {
      if (!navOpen) {
        toggleLinks.classList.add("animate-toggle");
        navLinks.style.display = "flex";
        if (shouldManipulateTheDom) {
          props.handleNavOpen();
        }

        navOpen = true;
      } else {
        toggleLinks.classList.remove("animate-toggle");
        navLinks.style.display = "none";
        if (shouldManipulateTheDom) {
          props.handleNavClose();
        }

        navOpen = false;
      }
    });
  }, [props]);
  // making the active class
  return (
    <div>
      <nav
        className={`main-navbar ${props.mainNav} `}
        style={
          props.backgroundImage
            ? { backgroundImage: props.backgroundImage }
            : {}
        }
      >
        <div className={`container ${props.container}`}>
          <div className="toggle-links">
            <span className="toggle half start"></span>
            <span className="toggle "></span>
            <span className="toggle half end"></span>
          </div>

          <div className="logo">
            <Link to="/">
              {" "}
              <img src={Logo} alt="logo" />
              <h1 style={props.color ? { color: props.color } : {}}>Alts</h1>
              <span style={props.color ? { color: props.color } : {}}>
                Together
              </span>
            </Link>
          </div>
          <ul className="list-unstyled  nav-disktop">
            <li>
              <NavLink
                to="/about"
                style={props.color ? { color: props.color } : {}}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/videos"
                style={props.color ? { color: props.color } : {}}
              >
                videos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                exact
                style={props.color ? { color: props.color } : {}}
              >
                blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sponsors"
                exact
                style={props.color ? { color: props.color } : {}}
              >
                sponsor Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-end">
            <i className="fa fa-search fa-xl"></i>
            <button>join us</button>
            <span></span>
            <NavLink to="/login">login</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavBar;
