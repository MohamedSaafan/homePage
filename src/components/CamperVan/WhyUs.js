import React from "react";
import Styles from "./WhyUs.module.css";
import planets from "../../images/camperva/planets.png";

const WhyUs = (props) => {
  return (
    <section className={`${Styles.whyUs} container`}>
      <h3 className={`${Styles.whyUs__heading}`}>Why Sponsor Us?</h3>
      <p className={`${Styles.whyUs__highlighted}`}>
        Maybe you just want to support new exciting fun projects, within the
        crypto space and want to help promote crypto and surrounding technology
        across Europe and further!
      </p>
      <p className={`${Styles.whyUs__details}`}>
        Maybe you want your new company introduced in a interview/live QAA to a
        crypto audience? Or a video created sponsoring a product? A new ICO with
        some exciting new technology! From a logo on our sponsors page, to a
        custom video that will placed on our soon to be made Youtube series for
        this challenge!
      </p>
      <button className={`${Styles.whyUs__button}`}>get in touch</button>
      <div className={`${Styles.whyUs__planets} ${Styles.whyUs__planetsRight}`}>
        <img src={planets} alt="planets" className={Styles.whyUs__image} />
      </div>
      <div className={`${Styles.whyUs__planets} ${Styles.whyUs__planetsLeft}`}>
        <img src={planets} alt="planets" className={Styles.whyUs__image} />
      </div>
    </section>
  );
};
export default WhyUs;
