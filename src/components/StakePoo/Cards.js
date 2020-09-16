import React from "react";
import Styles from "./Cards.module.css";
import time from "../../images/time.png";
import maintanance from "../../images/maintenance.png";
import handshaking from "../../images/partnership-handshake.png";
import coin from "../../images/coin.png";
import medal from "../../images/medal.png";
import data from "../../images/data-center.png";

const Cards = (props) => {
  return (
    <div className={Styles.cards}>
      <div className={`${Styles.whiteAboutItems} container`}>
        <div className={Styles.aboutItem}>
          <div className={Styles.aboutItemContainer}>
            <div className="container">
              <div className={Styles.aboutItemIcon}>
                <img src={data} alt="icon" />
              </div>

              <h5>Security</h5>
              <p>
                cloud Servers for <span>Security</span>
              </p>
            </div>
          </div>
        </div>{" "}
        <div className={Styles.aboutItem}>
          <div className={Styles.aboutItemContainer}>
            <div className="container">
              <div className={Styles.aboutItemIcon}>
                <img src={time} alt="icon" />
              </div>
              <h5>Uptime</h5>
              <p>
                Uptime of
                <br /> <span>99.99%</span>
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.aboutItem}>
          <div className={Styles.aboutItemContainer}>
            <div className="container">
              <div className={Styles.aboutItemIcon}>
                <img src={maintanance} alt="icon" />
              </div>
              <h5>Implementation</h5>
              <p>
                scripts to automate <span>intance restrain</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${Styles.whyUs} container centered`}>
        <i className="fa fa-lightbulb-o fa-lg"></i>
        <h5>Why Us</h5>
        <p>
          Advice from UK leading Security CISSP Specialists and AWS solution
          Architects, to help protect nodes and relays and automate processes.
        </p>
      </div>
      <div className={`${Styles.footerCards} container `}>
        <div className={`${Styles.footerCardsItem}   centered`}>
          <div className="container">
            <div className={Styles.footerCardsItemIcon}>
              <img src={handshaking} alt="hand icon" />
            </div>
            <h6>Pledge (ADA)</h6>
            <span>99,000</span>
            <hr />
            <p>
              A higher pledge gives reassurance that the best possible pool
              performance is also in the pool operators own interest just as
              much as it in yours!
              <span>
                interest just as much as kjdflajdlkfjalkdjf it in yours!
              </span>
            </p>
          </div>
        </div>
        <div className={`${Styles.footerCardsItem}   centered`}>
          <div className="container">
            <div className={Styles.footerCardsItemIcon}>
              <img src={medal} alt="hand icon" />
            </div>
            <h6>POOL FEE</h6>
            <span>1%</span>
            <hr />
            <p>
              Deducted from your delegation rewards. You receive 99% of your
              delegation rewards. The difference between in ROS between a 3%
              pool and 1% pool is only 0.1%. Not only do you get quality, we are
              bringing you quantity too.
            </p>
          </div>
        </div>
        <div className={`${Styles.footerCardsItem}   centered`}>
          <div className="container">
            <div className={Styles.footerCardsItemIcon}>
              <img src={coin} alt="hand icon" />
            </div>
            <h6>FIXED FEE MINIMUM</h6>

            <hr />
            <p>
              The shelley protocol imposes a minimum fixed cost of 340 ADA per
              epoch, deducted from total pool rewards. The difference in ROS
              between a 10M pool and a 150M pool is only 02%. No need to choose
              the biggest one: Just choose the pool you love!
            </p>
          </div>
        </div>
      </div>
      <div className={`${Styles.links} container centered `}>
        <button>learn how</button>
        <a
          href="http://altstogether.com/NikkiDesigns/Website/Guides/HowToDelegate.pdf"
          target="_blank"
        >
          (download PDF here)
        </a>
      </div>
    </div>
  );
};
export default Cards;
