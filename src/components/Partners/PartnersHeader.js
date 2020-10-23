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
          <Link to="/partners/mining" className={`${Styles.partners__link}`}>
            Mining
          </Link>
        </li>
        <li className={`${Styles.partners__item}`}>
          <Link to="/partners/wallets" className={`${Styles.partners__link}`}>
            Wallets
          </Link>
        </li>
        <li className={`${Styles.partners__item}`}>
          <Link to="/partners/defi" className={`${Styles.partners__link}`}>
            Defi
          </Link>
        </li>
        <li className={`${Styles.partners__item}`}>
          <Link to="/partners/legal" className={`${Styles.partners__link}`}>
            Legal
          </Link>
        </li>
        <li className={`${Styles.partners__item}`}>
          <Link to="/partners/collectables" className={`${Styles.partners__link}`}>
            Collectables
          </Link>
        </li>
        <li className={`${Styles.partners__item}`}>
          <Link to="/partners/charity" className={`${Styles.partners__link}`}>
            charity
          </Link>
        </li>
        <li className={`${Styles.partners__item}`}>
          <Link to="/partners/shop" className={`${Styles.partners__link}`}>
            shop
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default PartnerHeader;
