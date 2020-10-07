import React from "react";
import { Link } from "react-router-dom";
import PartnerBreadCrumb from "../PartnerBreadCrumb";
import Styles from "./PartnersHeader.module.css";

const PartnerHeader = (props) => {
  return (
    <div className={`${Styles.partners}`}>
      <PartnerBreadCrumb />
      <ul className={`${Styles.partners__ul} container`}>
        <li className={`${Styles.partners__item}`}>
          <Link to="/partners/exchanges" className={`${Styles.partners__link}`}>
            Exchanges
          </Link>
        </li>
        <li className={`${Styles.partners__item}`}>
          <Link to="/" className={`${Styles.partners__link}`}>
            Exchanges
          </Link>
        </li>
        <li className={`${Styles.partners__item}`}>
          <Link to="/" className={`${Styles.partners__link}`}>
            Exchanges
          </Link>
        </li>
        <li className={`${Styles.partners__item}`}>
          <Link to="/" className={`${Styles.partners__link}`}>
            Exchanges
          </Link>
        </li>
        <li className={`${Styles.partners__item}`}>
          <Link to="/" className={`${Styles.partners__link}`}>
            Exchanges
          </Link>
        </li>
        <li className={`${Styles.partners__item}`}>
          <Link to="/" className={`${Styles.partners__link}`}>
            Exchanges
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default PartnerHeader;
