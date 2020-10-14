import React, { useEffect, useRef } from "react";
import Styles from "./CamperVanHeader.module.css";

import banner from "../../images/camperva/CampBanner.png";
import coinjar from "../../images/coinjar.png";
import echunter from "../../images/ECHunterSG (1).png";
import {connect} from 'react-redux';

const Header = (props) => {

const handleclick = ()=> {
  const challange = document.querySelector('#compervanChallenge');
  challange.scrollIntoView({behavior: "smooth"});
}
 

  
  return (
    <>
      <header className={`${Styles.header}`}>
        <div className={`${Styles.header__content}`}>
          <h2 className={`${Styles.header__heading}`}>
            Crypto Camper Travel Challenge
          </h2>

          <p className={`${Styles.header__description}`}>
            Sponsoring AltsTogether
          </p>
          <p className={`${Styles.header__details}`}>
            We were originally a  Facebook group 
            based in the United Kingdom-but now we want to bring our
             collective knowledge, help, guides and advice to help
              everyone interested in learning about crypto.
          </p>
            <button onClick = {handleclick}>read more</button>
          
        </div>
        <div className={`${Styles.header__banner}`}>
          <img
            src={banner}
            alt="camp banner"
            className={`${Styles.header__image}`}
          />
        </div>
      </header>
      <div className={`${Styles.sponsors}`}>
        <div className={`${Styles.sponsors__item}`}>
          <img
            className={`${Styles.sponsors__image}`}
            src={coinjar}
            alt="sponsor"
          />
        </div>
        <div className={`${Styles.sponsors__item}`}>
          <img
            className={`${Styles.sponsors__image}`}
            src={echunter}
            alt="sponsor"
          />
        </div>
        <div className={`${Styles.sponsors__item}`}>PIXITE</div>
      </div>
    </>
  );
};

export default Header;
