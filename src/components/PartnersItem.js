import React from "react";
import Styles from "./PartnerItem.module.css";
import { Link } from "react-router-dom";
import coinJar from "../images/coinjar.png";
import logoIcon from "../images/logoIcon.png";

const PartnerItem = (props) => {
  const regExp = /%20/;
  const name = props.name.replace(regExp,' ')
  console.log(props, 'from partner item')
  return (
    <div className={`${Styles.partner}`}>
      <h4 className={`${Styles.partner__heading}`}>{name}</h4>
      <hr className={`${Styles.partner__hr}`} />
      <div className={`${Styles.partner__wrapper}`}>
        <div className={`${Styles.partner__logo}`}>
          <img
            src={props.image}
            alt="logo"
            className={`${Styles.partner__image}`}
          />
        </div>
        <div className={`${Styles.partner__content}`}>
          <div className={`${Styles.partner__category}`}>
            Location: {props.location} <br /> <br />
          </div>
          <div className={`${Styles.partner__description}`}>
            Short Description: {props.shortDescription} <br /> <br />
          </div>
          <div className={`${Styles.partner__description}`}>
            Full Description: {props.fullDescription} <br /> <br />
          </div>
          <div className={`${Styles.partner__website}`}>
            Website: <a href = {props.link}>{props.website}</a><br /> <br />
          </div>
          {props.follow ? (
            <div className={`${Styles.partner__follow}`}></div>
          ) : (
            ""
          )}

          {props.linkedIn ? (
            <div className={`${Styles.partner__linkedIn}`}></div>
          ) : (
            ""
          )}
          {props.whitePaper ? (
            <div className={`${Styles.partner__whitePaper}`}></div>
          ) : (
            ""
          )}
          <div className={`${Styles.partner__view}`}>
            {props.viewLink? <Link to={props.viewLink}>
              <button>View</button>
            </Link>:''}
           
          </div>
        </div>
        <div className={`${Styles.partner__highlighted}`}>
          <img
            className={`${Styles.partner__image}`}
            src={logoIcon}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerItem;
