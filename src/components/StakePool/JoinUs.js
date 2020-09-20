import React from "react";
import Styles from "./JoinUs.module.css";
import discord from "../../images/discord.png";
import planets from "../../images/Orbs III.png";
const JoinUs = (props) => {
  return (
    <div className={`${Styles.joinUs} container `}>
      <img src={planets} alt="planets" className={Styles.firstPlanets} />
      <img src={planets} alt="planets" className={Styles.secondPlanets} />
      <div className={`${Styles.container}`}>
        <h3>Join Us </h3>
        <span></span>
        <ul className="list-unstyled">
          <li>
            <a
              href="https://www.facebook.com/groups/BitcoinAndCryptoUK/"
              target="_blank"
            >
              <i className="fa fa-facebook fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AltsTogether" target="_blank">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="https://discord.gg/d2uySD" target="_blank">
              <div>
                <img src={discord} alt="discord" />
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-telegram fa-lg"></i>
            </a>
          </li>
        </ul>
        <span></span>
        <button>get started</button>
      </div>
    </div>
  );
};
export default JoinUs;
