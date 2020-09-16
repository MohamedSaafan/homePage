import React from "react";
import Styles from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={Styles.cards}>
      <div className={`${Styles.whiteAboutItems} container`}>
        <div className={Styles.aboutItem}>
          <div className={Styles.aboutItemContainer}>
            <div className="container">
              <i className="fa fa-user-secret fa-lg"></i>
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
              <i className="fa fa-user-secret fa-lg"></i>
              <h5>Security</h5>
              <p>
                cloud Servers for <span>Security</span>
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.aboutItem}>
          <div className={Styles.aboutItemContainer}>
            <div className="container">
              <i className="fa fa-user-secret fa-lg"></i>
              <h5>Security</h5>
              <p>
                cloud Servers for <span>Security</span>
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
            <i className="fa fa-handshake-o fa-lg"></i>
            <h6>Pledge</h6>
            <span>99,000</span>
            <hr />
            <p>
              A higher pledge gives reassurance that the best possible pool
              performance is also in the pool operators own interest just as
              much as it in yours!
            </p>
          </div>
        </div>
        <div className={`${Styles.footerCardsItem}   centered`}>
          <div className="container">
            <i className="fa fa-handshake-o fa-lg"></i>
            <h6>Pledge</h6>
            <span>99,000</span>
            <hr />
            <p>
              A higher pledge gives reassurance that the best possible pool
              performance is also in the pool operators own interest just as
              much as it in yours!
            </p>
          </div>
        </div>
        <div className={`${Styles.footerCardsItem}   centered`}>
          <div className="container">
            <i className="fa fa-handshake-o fa-lg"></i>
            <h6>Pledge</h6>
            <span>99,000</span>
            <hr />
            <p>
              A higher pledge gives reassurance that the best possible pool
              performance is also in the pool operators own interest just as
              much as it in yours!
            </p>
          </div>
        </div>
      </div>
      <div className={`${Styles.links} container centered `}>
        <button>learn how</button>
        <a href="/" target="_blank">
          (download PDF here)
        </a>
      </div>
    </div>
  );
};
export default Cards;
