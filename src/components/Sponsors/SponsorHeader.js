import React from "react";
import Styles from "./SponsorHeader.module.css";
import hero from "../../images/sponsor/Hero.png";

const Header = (props) => {
  return (
    <header className={`${Styles.header}`}>
      <div className={`${Styles.headerImage}`}>
        <img src={hero} alt="heroimage" />
      </div>
      <div className={`${Styles.headerContent} `}>
        <h2>Work with AltsTogether</h2>

        <p>Promote Your business, advertise with us.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          repudiandae laboriosam eaque doloribus earum dolor harum vel quasi
          dolorum aperiam!
        </p>
        <button>get in touch</button>
      </div>
    </header>
  );
};

export default Header;
