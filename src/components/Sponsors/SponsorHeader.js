import React from "react";
import Styles from "./SponsorHeader.module.css";
import hero from "../../images/sponsor/Hero.png";

const Header = (props) => {
  const handleClick = () => {
    const form = document.forms[0];
    console.log(form);
    form.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className={`${Styles.header}`}>
      <div className={`${Styles.headerImage}`}>
        <img src={hero} alt="heroimage" />
      </div>
      <div className={`${Styles.headerContent} `}>
        <h2>Work with AltsTogether</h2>

        <p>Promote Your Business by Sponsoring AltsTogether.</p>
        <p>
          Get noticed & reach a community of thousands of crypto enthusiasts
          from technology developers, investors and entrepreneurs.
          <br /> <br /> Our own community interest programs can offer you
          high-quality, lead generation and brand exposure across a variety of
          platforms and in a variety of innovative fun methods.
        </p>
        <button onClick={handleClick}>get in touch</button>
      </div>
    </header>
  );
};

export default Header;
