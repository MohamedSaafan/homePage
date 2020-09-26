import React from "react";
import Styles from "./WhyUs.module.css";

const WhyUs = (props) => {
  return (
    <div className={`${Styles.whyUs} container`}>
      <hr className={`${Styles.line}`} />
      <div className={`${Styles.whyUsContentWrapper}`}>
        <div className={`${Styles.whyUsMainContent} `}>
          <h3>Why AltsTogether?</h3>
          <p>
            {" "}
            We were originally just a United Kingdom based Facebook group, but
            now we want to bring our collective knowledge and guides to help all
            people across the globe.
            <br /> <br /> From beginners to experts, we hope to be able to bring
            something to you! Our Bitcoin Crypto:
          </p>
        </div>
        <div className={`${Styles.whyUsContentCard}`}>
          <div className={`${Styles.whyUsContentCardItem}`}>
            <div className={`${Styles.card}`}>
              <p>
                We were originally just a United Kingdom based Facebook group,
              </p>
            </div>
            <div className={`${Styles.lambs} ${Styles.firstLambs}`}>
              <i className="fa fa-lightbulb-o fa-sm"></i>
              <i className="fa fa-lightbulb-o fa-lg"></i>
            </div>
          </div>
          <div className={`${Styles.whyUsContentCardItem}`}>
            <div className={`${Styles.lambs} ${Styles.lastLambs}`}>
              <i className="fa fa-lightbulb-o fa-sm"></i>
              <i className="fa fa-lightbulb-o fa-xl"></i>
              <i className="fa fa-lightbulb-o fa-lg"></i>
            </div>
            <div className={`${Styles.card}`}>
              <p>
                We were originally just a United Kingdom based Facebook group,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
