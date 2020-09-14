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
          <a
            href="https://www.facebook.com/groups/BitcoinAndCryptoUK/"
            target="_blank"
          >
            <li className="fa fa-facebook fa-xl"></li>
          </a>
          <a
            href=" https://www.youtube.com/channel/UC4J3ANOGWAePhlu9R057uEA"
            target="_blank"
          >
            {" "}
            <li className="fa fa-youtube fa-xl"></li>
          </a>
          <a href="https://www.instagram.com/altstogether/" target="_blank">
            <li className="fa fa-instagram fa-xl"></li>
          </a>
          <a href="https://twitter.com/AltsTogether" target="_blank">
            <li className="fa fa-twitter fa-xl"></li>
          </a>
        </div>
        <div className="designer">
          <div>
            designed by <span>Cinima Studio</span>{" "}
          </div>
          <div>
            developed by <span>Mohamed Saafan</span>{" "}
          </div>
        </div>
      </footer>
    </footer>
  );
};
export default Footer;
