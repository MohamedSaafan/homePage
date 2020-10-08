import React from "react";
import Styles from "./CamperVanCards.module.css";
import van from "../../images/camperva/Van II.png";
import locations from "../../images/camperva/Travelling.png";
import settings from "../../images/camperva/Smart Home Tech.png";
import challenges from "../../images/camperva/Challenges.png";
import planets from "../../images/camperva/planets.png";

const Cards = (props) => {
  return (
    <section className={`${Styles.cards}`}>
      <div className={`${Styles.cards__container}`}>
        <div className={`${Styles.cards__item} ${Styles.cards__itemRight}`}>
          <h3 className={`${Styles.cards__heading}`}>The Build</h3>
          <p className={`${Styles.cards__highlighted}`}>
            Buy the van with crypto... challenge to find someone willing to ell
            it.
          </p>
          <p className={`${Styles.cards__details}`}>
            Part and manufacturers or donations!! As much as possible videos of
            such attempts! Even post some failures!
          </p>
          <div className={`${Styles.cards__icon} ${Styles.cards__iconLittle}`}>
            <img src={van} alt="icon" className={`${Styles.cards__image}`} />
          </div>
        </div>
        <div className={`${Styles.cards__item} ${Styles.cards__itemRight}`}>
          <h3>The Build</h3>
          <p className={`${Styles.cards__highlighted}`}>
            Buy the van with crypto... challenge to find someone willing to ell
            it.
          </p>
          <p className={`${Styles.cards__details}`}>
            Part and manufacturers or donations!! As much as possible videos of
            such attempts! Even post some failures!
          </p>
          <div className={`${Styles.cards__icon}`}>
            <img
              src={locations}
              alt="icon"
              className={`${Styles.cards__image}`}
            />
          </div>
        </div>
      </div>
      <div className={`${Styles.cards__container}`}>
        <div className={`${Styles.cards__planets}`}>
          <img
            src={planets}
            alt="planets"
            className={`${Styles.cards__image}`}
          />
        </div>
        <div className={`${Styles.cards__item} ${Styles.cards__itemMargened}`}>
          <h3>The Build</h3>
          <p className={`${Styles.cards__highlighted}`}>
            Buy the van with crypto... challenge to find someone willing to ell
            it.
          </p>
          <p className={`${Styles.cards__details}`}>
            Part and manufacturers or donations!! As much as possible videos of
            such attempts! Even post some failures!
          </p>
          <div className={`${Styles.cards__icon}`}>
            <img
              src={settings}
              alt="icon"
              className={`${Styles.cards__image}`}
            />
          </div>
          <div className={`${Styles.cards__line} ${Styles.cards__lineTop}`}>
            <div className={`${Styles.cards__circle} `}></div>
          </div>
          <div className={`${Styles.cards__line}  ${Styles.cards__lineBottom}`}>
            <div className={`${Styles.cards__circle}`}></div>
          </div>
        </div>
        <div className={`${Styles.cards__item}`}>
          <h3>The Build</h3>
          <p className={`${Styles.cards__highlighted}`}>
            Buy the van with crypto... challenge to find someone willing to ell
            it.
          </p>
          <p className={`${Styles.cards__details}`}>
            Part and manufacturers or donations!! As much as possible videos of
            such attempts! Even post some failures!
          </p>
          <div className={`${Styles.cards__icon}`}>
            <img
              src={challenges}
              alt="icon"
              className={`${Styles.cards__image}`}
            />
          </div>
          <div className={`${Styles.cards__line} ${Styles.cards__lineTop}`}>
            <div className={`${Styles.cards__circle} `}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
