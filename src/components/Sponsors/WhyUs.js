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
            We want to help build credibility & awareness and get your leads to
            actively engage with our users across our different platforms and a
            greater audience beyond.
            <br /> <br /> We are a community interest group, and all profits
            will benefit the crypto community and your sponsorship will allow us
            to bring further reviews, guides, education, and crypto knowledge to
            all crypto enthusiasts.
          </p>
        </div>
        <div className={`${Styles.whyUsContentCard}`}>
          <div className={`${Styles.whyUsContentCardItem}`}>
            <div className={`${Styles.card}`}>
              <p>Direct access to crypto and blockchain enthusiasts.</p>
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
              <p>Sponsor us to help further our community projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
