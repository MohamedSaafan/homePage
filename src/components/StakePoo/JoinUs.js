import React from "react";
import { Link } from "react-router-dom";
import Styles from "./JoinUs.module.css";

const JoinUs = (props) => {
  return (
    <div className={`${Styles.joinUs} container `}>
      <div className={`${Styles.container}`}>
        <h3>Join Us </h3>
        <span></span>
        <ul className="list-unstyled">
          <li>
            <Link>
              <i className="fa fa-facebook fa-lg"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa fa-twitter fa-lg"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa fa-facebook fa-lg"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa fa-telegram fa-lg"></i>
            </Link>
          </li>
        </ul>
        <span></span>
        <button>get started</button>
      </div>
    </div>
  );
};
export default JoinUs;
