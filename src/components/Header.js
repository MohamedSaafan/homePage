import React from "react";

import Styles from "./Header.module.css";
import MainNavBar from "./MainNavBar";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

const Header = (props) => {
 
  
  return (
    <header className={Styles.mainHeader}>
      <MainNavBar
        styles={Styles}
        shouldManipulate={true}
        isAdmin = {props.isAdmin}
      />

      <div className="container">
        <div className={Styles.headerContent}>
          <h1>Cardano StakePools</h1>

          <p>
            {" "}
            Learn with Us and now Earn with us. Our Cardano stakepools are now
            live.
          </p>
          <Link to="/stakepool">
            <button>learn more</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
const mapStateToProps = state => {
const {isAdmin} = state.auth
return {
  isAdmin
}
 
}
export default connect(mapStateToProps)(Header);
