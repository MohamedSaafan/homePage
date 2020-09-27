import React from "react";
import Styles from "./OurSponsors.module.css";
import logo1 from "../../images/ECHunterSG (1).png";
import logo2 from "../../images/coinjar.png";
import logo3 from "../../images/cinema.png";
import banner from "../../images/sponsor/BannerII.png";

const OurSponsors = (props) => {
  return (
    <div className={`${Styles.sponsors} `}>
      <hr className={`${Styles.line}`} />
      <h4>Our Sponsors</h4>
      <div className={`${Styles.about} about`}>
        <div className={`${Styles.logos} logos`}>
          <i className="fa fa-arrow-left fa-lg"></i>
          <i className="fa fa-arrow-right fa-lg"></i>
          <div className="logos-item">
            <h4>INSPIRE</h4>
          </div>
          <div className="logos-item">
            <img src={logo1} alt="logo" />
          </div>
          <div className="logos-item">
            <img src={logo2} alt="logo" />
          </div>
          <div className="logos-item">
            <h4> PIXITE</h4>
          </div>
          <div className="logos-item">
            <h4> SOLID CONSULTANT</h4>
          </div>
          <div className="logos-item">
            <img src={logo3} alt="logo" />
          </div>
        </div>
      </div>
      <div className={`${Styles.sponsorsDetails}`}>
        <div className={`${Styles.imageContainer}`}>
          <img src={banner} alt="collaborations" />
        </div>
        <div className={`${Styles.sponsorsDetailsContent} container`}>
          <hr />
          <p>
            Our UK Community Interest Group is now at 5k+ members, and we will
            be passing on our crypto learning program, tutorials, video guide
            series and technology reviews to a much a larger global audience -
            while maintaining our community interest ethos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurSponsors;
