import React from "react";
import Styles from "./Demographics.module.css";

const Graphics = (props) => {
  return (
    <div className={`${Styles.graphics}`}>
      <h3>Demographics</h3>

      <div className={`${Styles.ulContainer} container`}>
        <ul className="list-unstyled">
          <li>Age</li>
          <li>Male 70%</li>
          <li>Female 30%</li>
          <br /> <br /> <br />
          <li>18.24 - 24%, 25.34 - 39%</li>
          <li>35.44 - 16%, 45.54 - 9 %</li>
          <li>55.64 - 6%, 65 - 4%</li>
        </ul>
        <ul className="list-unstyled">
          <li>Top Countries</li>
          <li> United Kingdom, United States </li>
          <li> Canada, Hong Kong</li>
          <li>Australia, Singapore, Germany, France</li>
        </ul>
      </div>
    </div>
  );
};
export default Graphics;
