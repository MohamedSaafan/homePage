import React from "react";
import Styles from "./PostHeader.module.css";
import hero from "../../images/side-posts-1.jpg";

const Header = (props) => {
  return (
    <header className={`container ${Styles.postHeader}`}>
      <button>BITCOIN</button>
    </header>
  );
};
export default Header;
