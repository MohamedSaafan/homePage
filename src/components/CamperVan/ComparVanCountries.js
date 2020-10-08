import React from "react";
import Styles from "./ComparVanCountries.module.css";
import UK from "../../images/camperva/UK.png";
import van from "../../images/camperva/Van copy.png";
import spain from "../../images/camperva/Spain.png";
import italy from "../../images/camperva/Italy.png";
import sweden from "../../images/camperva/Sweden.png";
import netherlands from "../../images/camperva/Netherlands.png";
import norway from "../../images/camperva/Norway.png";
import finland from "../../images/camperva/Finland.png";
import france from "../../images/camperva/France.png";
import germany from "../../images/camperva/Germany.png";

const Countries = (props) => {
  return (
    <>
      <div className={`${Styles.line}`}>
        <div className={`${Styles.line__items}`}>
          <div className={`${Styles.line__item}`}>
            <div className={`${Styles.line__flag}`}>
              <img src={UK} alt="flag" className={`${Styles.line__image}`} />
            </div>
            <span className={`${Styles.line__circle}`}></span>
            <span className={`${Styles.line__country}`}>UK</span>
          </div>
          <div className={`${Styles.line__item}`}>
            <div
              className={`${Styles.line__flag} ${Styles.line__flagPositioned}`}
            >
              <img src={spain} alt="flag" className={`${Styles.line__image}`} />
            </div>
            <span
              className={`${Styles.line__circle} ${Styles.line__circleVan}`}
            >
              {" "}
              <img src={van} alt="van" className={`${Styles.line__van}`} />
            </span>
            <span
              className={`${Styles.line__country} ${Styles.line__countryMargened}`}
            >
              {" "}
              SPAIN
            </span>
          </div>
          <div className={`${Styles.line__item}`}>
            <div className={`${Styles.line__flag}`}>
              <img src={italy} alt="flag" className={`${Styles.line__image}`} />
            </div>
            <span className={`${Styles.line__circle}`}></span>
            <span className={`${Styles.line__country}`}>ITALY</span>
          </div>
          <div className={`${Styles.line__item}`}>
            <div className={`${Styles.line__flag}`}>
              <img
                src={sweden}
                alt="flag"
                className={`${Styles.line__image}`}
              />
            </div>
            <span className={`${Styles.line__circle}`}></span>
            <span className={`${Styles.line__country}`}>SWEDEN</span>
          </div>
          <div className={`${Styles.line__item}`}>
            <div className={`${Styles.line__flag}`}>
              <img
                src={netherlands}
                alt="flag"
                className={`${Styles.line__image}`}
              />
            </div>
            <span className={`${Styles.line__circle}`}></span>
            <span className={`${Styles.line__country}`}>NETHERLANDS</span>
          </div>
          <div className={`${Styles.line__item}`}>
            <div className={`${Styles.line__flag}`}>
              <img
                src={norway}
                alt="flag"
                className={`${Styles.line__image}`}
              />
            </div>
            <span className={`${Styles.line__circle}`}></span>
            <span className={`${Styles.line__country}`}>NORWAY</span>
          </div>
          <div className={`${Styles.line__item}`}>
            <div className={`${Styles.line__flag}`}>
              <img
                src={finland}
                alt="flag"
                className={`${Styles.line__image}`}
              />
            </div>
            <span className={`${Styles.line__circle}`}></span>
            <span className={`${Styles.line__country}`}>FINLAND</span>
          </div>
          <div className={`${Styles.line__item}`}>
            <div className={`${Styles.line__flag}`}>
              <img
                src={france}
                alt="flag"
                className={`${Styles.line__image}`}
              />
            </div>
            <span className={`${Styles.line__circle}`}></span>
            <span className={`${Styles.line__country}`}>FRANCE</span>
          </div>
          <div className={`${Styles.line__item}`}>
            <div className={`${Styles.line__flag}`}>
              <img
                src={germany}
                alt="flag"
                className={`${Styles.line__image}`}
              />
            </div>
            <span className={`${Styles.line__circle}`}></span>
            <span className={`${Styles.line__country}`}>GERMANY</span>
          </div>
        </div>
      </div>
      <p className={`${Styles.description}`}>
        Sponsors and donations will help us along the route, from contributing
        towards, allowing us to bring the best possible experience to promote
        crypto and smart tech along our journey.
      </p>
      <p className={`${Styles.title}`}>
        In return we could provide logos on our sponsored page, potential
        sponsorship videos, facebook/Instagram/Twitter shout outs and more
        depending on what would suit your and our needs.
      </p>
      <div className={`${Styles.main__lineVertical}`}>
        <span className={`${Styles.lineVertical__line}`}>
          <span
            className={`${Styles.lineVertical__circle} ${Styles.line__circleFirst}`}
          ></span>
          <span
            className={`${Styles.lineVertical__circle} ${Styles.line__circleLast}`}
          ></span>
        </span>
      </div>
    </>
  );
};
export default Countries;
