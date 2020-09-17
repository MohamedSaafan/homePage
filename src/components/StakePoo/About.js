import React from "react";
import Styles from "./About.module.css";
const About = (props) => {
  return (
    <div className={`${Styles.about} container`}>
      <h3>About Us</h3>
      <p>
        We are AltsTogether, a group of crypto enthusiasts from the United
        Kingdom that enjoy the crypto scene. We have a love for Cardano and the
        projects amongst them - we welcome you to join our pool. Check out the
        guides below on how to delegate to our pool.
      </p>
      <button>read more</button>
    </div>
  );
};
export default About;
