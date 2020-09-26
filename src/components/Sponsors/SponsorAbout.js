import React from "react";
import Styles from "./SponsorAbout.module.css";
import Alex from "../../images/sponsor/Alex.png";

const About = (props) => {
  return (
    <div className={`container ${Styles.about}`}>
      <div className={`${Styles.avatar}`}>
        <i className="fa fa-facebook fa-xl"></i>
        <div className={`${Styles.content}`}>
          <h3>4,000 +</h3>
          <p>facebook followers</p>
        </div>
      </div>
      <div className={`${Styles.box}`}>
        <p className="container">
          {" "}
          We were originally just a United Kingdom based Facebook group, but now
          we want to bring our collective knowledge and guides to help all
          people across the globe. From beginners to experts, we hope to be able
          to bring something to you! Our Bitcoin Crypto: United Kingdom will
          remain closed to the UK because advice here is based around the best
          practices for the crypto enthusiasts in the United Kingdom and its
          banking system, this may not be the case for you! Enjoy your visit.
        </p>
        <h3>ALEX BROWKENBROW</h3>
        <p>Founder of AltsTogether</p>
        <div className={`${Styles.boxImage}`}>
          <img src={Alex} alt="avatar" />
        </div>
      </div>
    </div>
  );
};
export default About;
