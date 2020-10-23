import React from "react";
import Styles from "./PartnerBreadCrumb.module.css";
import { Link } from "react-router-dom";

const PartnerBreadCrumb = (props) => {
  return (
    <div className={`${Styles.breadCrumb}`}>
      <Link to="/partners">Directory</Link>
      <Link to="/allpartners" className={`${Styles.breadCrumb__link}`}>
        View All Listings
      </Link>
    </div>
  );
};
export default PartnerBreadCrumb;
