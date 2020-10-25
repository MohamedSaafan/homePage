import React, { useEffect } from "react";
import "./MainNavBar.css";
import Logo from "../images/ATG Icon.png";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut,retreiveUserInfo } from "../actions";

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
        const links = document.querySelector(".toggle-links");
        links.style.zIndex = "1000";
        const navBar = document.querySelector(".main-navbar ul");
        navBar.style.maringTop = 0;
        const lis = document.querySelectorAll(".main-navbar ul li a");
        for (let a of lis) {
          a.style.color = "#fff";
        }
        navBar.classList.add('navOpen');

        navOpen = true;
      } else {
        toggleLinks.classList.remove("animate-toggle");
        navLinks.style.display = "none";

        navOpen = false;
      }
    });
  }, [props]);
  
  // making the active class
  console.log(props.name,'from name in the nab bar')
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
                to="/campervan"
                style={props.color ? { color: props.color } : {}}
              >
                campervan
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
                sponsor us
              </NavLink>
            </li>
            <li>
            
              <NavLink
                to="/news"
                exact
                style={props.color ? { color: props.color } : {}}
              >
                news
              </NavLink>
            </li>
         
          </ul>
          <div className="nav-end">
            <i className="fa fa-search fa-xl"></i>
            {props.name ? <p  style = {props.color?{color:props.color}:{}}>Hi {props.name}</p>: <Link to = '/signup'><button >join us</button></Link>}

            <span
              style={props.color ? { backgroundColor: props.color } : {}}
            ></span>

            {props.name ? (
              <button onClick={props.signOut}>logout</button>
            ) : (
              <Link to="/signin" style = {props.color?{color:props.color}:{}}>login</Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => {

  if (state.auth.userAttributes) {
    return {
      name: state.auth.userAttributes.name,
    };
  }
  return {
    name: false,
  };
};
export default connect(mapStateToProps, { signOut,retreiveUserInfo })(MainNavBar);
