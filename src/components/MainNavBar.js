import React, { useEffect } from "react";
import "./MainNavBar.css";
import Logo from "../images/ATG Icon.png";
import { Link } from "react-router-dom";

const MainNavBar = (props) => {
  useEffect(() => {
    let toggleLinks = document.querySelector(".toggle-links");
    let navLinks = document.querySelector(".nav-disktop");
    let mainHeading;
    let shouldManipulateTheDom = props.shouldManipulate;

    let navOpen = false;

    // toggleLinks Click EventListener

    toggleLinks.addEventListener("click", (e) => {
      if (!navOpen) {
        toggleLinks.classList.add("animate-toggle");
        navLinks.style.display = "flex";
        if (shouldManipulateTheDom) {
          mainHeading = document.querySelector(
            `.${props.styles.headerContent}`
          );
          mainHeading.style.display = "none";
          props.handleNavOpen();
        }

        navOpen = true;
      } else {
        toggleLinks.classList.remove("animate-toggle");
        navLinks.style.display = "none";
        if (shouldManipulateTheDom) {
          mainHeading = document.querySelector(
            `.${props.styles.headerContent}`
          );
          mainHeading.style.display = "block";
          props.handleNavClose();
        }

        navOpen = false;
      }
    });
  }, [props]);
  return (
    <div>
      <nav className="main-navbar">
        <div className="container">
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
              <Link to="/" style={props.color ? { color: props.color } : {}}>
                about
              </Link>
            </li>
            <li>
              <Link to="/" style={props.color ? { color: props.color } : {}}>
                videos
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                style={props.color ? { color: props.color } : {}}
              >
                blog
              </Link>
            </li>
            <li>
              <Link to="/" style={props.color ? { color: props.color } : {}}>
                contact
              </Link>
            </li>
          </ul>
          <div className="nav-end">
            <i className="fa fa-search fa-xl"></i>
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
