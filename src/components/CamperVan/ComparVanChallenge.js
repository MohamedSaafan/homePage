import React from "react";

import Styles from "./ComparVanChallenge.module.css";
import van from "../../images/camperva/Van.png"

const TheChallenge = (props) => {
  

  return (
    <section className={`${Styles.challenge}`}>
      <header className={`${Styles.challenge__header}`}>
        <h3 className={`${Styles.header__heading}`}>The Challenge</h3>
        <p className={`${Styles.header__details}`}>
          To help promote the ever so interesting crypto scene, campervan and
          travelling alogn with smart technologogy, we came up with a unique
          challenge.
        </p>
      </header>
      <main id = 'compervanChallenge' className={`${Styles.challenge__main}`}>
        <div className={`${Styles.main__item}  ${Styles.main__itemRight}`}>
          <div className={`${Styles.main__card} ${Styles.main__cardLeft}`}>
            <span className={`${Styles.main__circle}`}>1</span>
            <p className={`${Styles.main__details}`}>
              A DIY Campervan Conversion
            </p>
          </div>
          <div className={`${Styles.main__card}`}>
            <span className={`${Styles.main__circle}`}>2</span>
            <p className={`${Styles.main__details}`}>
              Smart Home Technology Installation
            </p>
          </div>
        </div>
        <div  className={`${Styles.main__item} ${Styles.main__itemPositioned}`}>
          <img src={van} alt="car" className={`${Styles.main__image}`} />
          <div className={`${Styles.main__line}`}>
            <span className={`${Styles.line__line}`}>
              <span
                className={`${Styles.line__circle} ${Styles.line__circleFirst}`}
              ></span>
              <span
                className={`${Styles.line__circle} ${Styles.line__circleLast}`}
              ></span>
            </span>
          </div>
        </div>
        <div className={`${Styles.main__item}`}>
          <div className={`${Styles.main__card} ${Styles.main__cardRight}`}>
            <span className={`${Styles.main__circle}`}>3</span>
            <p className={`${Styles.main__details}`}>Document Journey</p>
          </div>
          <div className={`${Styles.main__card}`}>
            <span className={`${Styles.main__circle}`}>4</span>
            <p className={`${Styles.main__details}`}>
              Carry Out Challenges Set By Followe
            </p>
          </div>
        </div>
      </main>
      <footer>
        <p className={`${Styles.heighlighted}`}>
          We will create Youtube videos series documenting the build, and you
          will be introduced to some amazing technology and companies along the
          way!
        </p>{" "}
        <br />
        <p className={`${Styles.p}`}>
          crypto companies will allow us to hooefully interview them in person
          on our travels, and you will hear from them directly-and hopefully
          carry out a number of live Q&A!!
        </p>
        <br />
        <p className={`${Styles.p}`}>
        What will happen if we break down? Well let's hope the
         local mechanic accepts crypto!! Buying food and
          other tasks will be a challenge - introducing
         stores to crypto, and even a monthly  stay in a 
         hotel-no crypto means I can't have a comfy night's sleep as a treat! 
        </p>
        <br />
        <p className={`${Styles.p}`}>
          What will happen if we break down... let's hope the local mechanic
          accepts crypto!! Buying food and other tasks will be a
          challenge-intoducing stores to crypto, and even a monthly luxury stay
          in a hotel-no crypto can't have a comfy night's sleep!
        </p>
      </footer>
    </section>
  );
};
export default TheChallenge;
