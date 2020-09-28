import React from "react";
import Styles from "./Demographics.module.css";

const Graphics = (props) => {
  return (
    <div className={`${Styles.graphics}`}>
      <h3>Demographics</h3>

      <div className={`${Styles.ulContainer} container`}>
        <ul className="list-unstyled">
          <li>Age</li>
          <li>18-24 : 24%, 25-34 : 39%</li>
          <li>35-44 : 16%, 45-54 : 9 %</li>
          <li>55-64 : 6%, 65+ : 4%</li>
          <br /> <br /> <br />
          <li>Male 70%</li>
          <li>Female 30%</li>
        </ul>
        <ul className="list-unstyled">
          <li>Top Countries</li>
          <li>United </li>
          <li> Kingdom</li>
          <li>Australia</li>
          <li> United States </li>
          <li> Canada </li>
        </ul>
      </div>
    </div>
  );
};
export default Graphics;
