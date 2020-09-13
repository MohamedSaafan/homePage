import React from "react";
import "./Footer.css";
import footer from "../images/Footer.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <img src={footer} alt="footer" />
      <header>
        <div className="container">
          <div className="footer-lists">
            <ul className="list-unstyled">
              <li>New Feeds</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="list-unstyled">
              <li>New Feeds</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="list-unstyled">
              <li>New Feeds</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </header>

      <footer>
        <div className="copy-wrights">
          Copyright &copy; 2020 <span>AltsTogother</span>
        </div>
        <div className="socials">
          <li className="fa fa-facebook fa-xl"></li>
          <li className="fa fa-youtube fa-xl"></li>
          <li className="fa fa-instagram fa-xl"></li>
          <li className="fa fa-twitter fa-xl"></li>
        </div>
        <div className="designer">
          <span>
            web designed be <span>Cinima Studio</span>
          </span>
        </div>
      </footer>
    </footer>
  );
};
export default Footer;
