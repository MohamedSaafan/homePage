import React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom';
import footer from "../images/Footer.png";

const Footer = (props) => {
  const handleClick = e => {
    setTimeout(()=>{
      const form = document.forms[0];
     form.scrollIntoView({ behavior: "smooth" });
    },0)  
  }
  return (
    <footer className="footer">
      <img src={footer} alt="footer" />
      <header>
        <div className="container">
          <div className="footer-lists">
            <ul className="list-unstyled">
              <li><Link to = '/'>Home</Link></li>
              <li><Link to = '/about'>About</Link></li>
              <li><Link to = '/videos'>Videos</Link></li>
              <li><Link to = '/sponsors'>Sponsor Us</Link></li>
            </ul>
            <ul className="list-unstyled">
              <li><Link to = '/campervan'>Campervan</Link></li>
              <li><Link to = '/blog'>Blog</Link></li>
              <li><Link to = '/partners'>Partners</Link></li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="list-unstyled">
              <li>New Feeds</li>
              <li>Careers</li>
              <li onClick ={handleClick}><Link to = '/sponsors'>Contact Us</Link></li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </header>

      <footer>
        <div className="copy-wrights">
          Copyright &copy; 2020 <span>AltsTogether</span>
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
            designed by{" "}
            <span>
              <a href=" https://www.cinnimastudio.com/ " target="_blank">
                Cinnima Studio
              </a>
            </span>{" "}
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
