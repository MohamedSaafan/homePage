import React from "react";
import Styles from "./About.module.css";
const About = (props) => {
  return (
    <div className={`${Styles.about} container`}>
      <h3>About Us</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        qui autem nostrum quia sint nisi possimus. Ex nobis laboriosam quas.
        Voluptatibus enim ab repellat a.
      </p>
      <button>read more</button>
    </div>
  );
};
export default About;
