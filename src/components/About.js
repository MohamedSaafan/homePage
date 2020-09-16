import React from "react";
import logo1 from "../images/ECHunterSG (1).png";
import logo2 from "../images/coinjar.png";
import logo3 from "../images/cinema.png";
import banner from "../images/Banner.png";
import "./About.css";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className=" about container">
      <div className="logos">
        <div className="logos-item">
          <h4>INSPIRE</h4>
        </div>
        <div className="logos-item">
          <img src={logo1} alt="logo" />
        </div>
        <div className="logos-item">
          <img src={logo2} alt="logo" />
        </div>
        <div className="logos-item">
          <h4> PIXITE</h4>
        </div>
        <div className="logos-item">
          <h4> SOLID CONSULTANT</h4>
        </div>
        <div className="logos-item">
          <img src={logo3} alt="logo" />
        </div>
      </div>
      <div className="info">
        <h4>
          Who <span> We Are</span>
        </h4>
        <p>
          We were originally just a United Kingdom based Facebook group, but now
          we want to bring our collective knowledge and guides to help all
          people across the globe. From beginners to experts, we hope to be able
          to bring something to you! Our Bitcoin Crypto: United Kingdom will
          remain closed to the UK because advice here is based around the best
          practices for the crypto enthusiasts in the United Kingdom and its
          banking system, this may not be the case for you! Enjoy your visit.
        </p>
        <div className="centered">
          <Link to="/stakepool">
            {" "}
            <button>learn more</button>
          </Link>
        </div>
        <div className="about-items container">
          <div className="about-item">
            <div className="about-item-container">
              <img src={banner} alt="" />

              <div className="about-item-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to="/stakepool">
                  {" "}
                  <button>learn more</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="about-item">
            <div className="about-item-container">
              <img src={banner} alt="" />

              <div className="about-item-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to="/stakepool">
                  {" "}
                  <button>learn more</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="about-item">
            <div className="about-item-container">
              <img src={banner} alt="" />

              <div className="about-item-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to="/stakepool">
                  {" "}
                  <button>learn more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
