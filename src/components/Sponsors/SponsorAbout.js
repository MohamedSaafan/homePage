import React from "react";
import Styles from "./SponsorAbout.module.css";
import Alex from "../../images/sponsor/Alex.png";

const About = (props) => {
  return (
    <div className={`container ${Styles.about}`}>
      <div className={`${Styles.avatar}`}>
        <i className="fa fa-facebook fa-xl"></i>
        <div className={`${Styles.content}`}>
          <h3>5,000 +</h3>
          <p>facebook followers</p>
        </div>
      </div>
      <div className={`${Styles.box}`}>
        <p className="container">
          Our dream is to make AltsTogether a hugely successful community
          interest platform that will help our users, not only within the United
          Kingdom, but also from around the world. We are proud of our unique
          approach with partnerships with UK tech and blockchain industry within
          the United Kingdom such as CoinPass, CoinJar and EasyCrypto Hunter.
        </p>
        <h3>Alex Brockenbrow</h3>
        <p>Founder of AltsTogether</p>
        <div className={`${Styles.boxImage}`}>
          <img src={Alex} alt="avatar" />
        </div>
      </div>
    </div>
  );
};
export default About;
