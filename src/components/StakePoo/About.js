import React from "react";
import Styles from "./About.module.css";
import orbit from "../../images/orbit2.png";
const About = (props) => {
  return (
    <div className={`${Styles.about} container`}>
      <img src={orbit} alt="orbit" className={Styles.firstOrbit} />
      <img src={orbit} alt="orbit" className={Styles.secondOrbit} />
      <div className={Styles.container}>
        <h3>About Us</h3>
        <p>
          We are AltsTogether, a group of crypto enthusiasts from the United
          Kingdom that enjoy the crypto scene. We have a love for Cardano and
          the projects amongst them - we welcome you to join our pool. Check out
          the guides below on how to delegate to our pool.
        </p>
        <button>read more</button>
      </div>
    </div>
  );
};
export default About;
