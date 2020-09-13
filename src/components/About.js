import React from "react";
import logo1 from "../images/ECHunterSG (1).png";
import logo2 from "../images/coinjar.png";
import logo3 from "../images/cinema.png";
import banner from "../images/Banner.png";
import "./About.css";

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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          commodi non perferendis soluta assumenda maxime laudantium adipisci
          laboriosam id incidunt, tenetur, fugiat numquam omnis fuga...
        </p>
        <div className="centered">
          <button>learn more</button>
        </div>
        <div className="about-items container">
          <div className="about-item">
            <div className="about-item-container">
              <img src={banner} alt="" />

              <div className="about-item-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>read more</button>
              </div>
            </div>
          </div>
          <div className="about-item">
            <div className="about-item-container">
              <img src={banner} alt="" />

              <div className="about-item-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>read more</button>
              </div>
            </div>
          </div>
          <div className="about-item">
            <div className="about-item-container">
              <img src={banner} alt="" />

              <div className="about-item-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
