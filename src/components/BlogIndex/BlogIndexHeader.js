import React from "react";
import Styles from "./BlogIndexHeader.module.css";
import banner from "../../images/banner1.png";

const Header = (props) => {
  return (
    <header>
      <div className={`${Styles.container} container`}>
        <img src={banner} alt="banner1" />
        <div className={`${Styles.headerCover}`}>
          <div className={`${Styles.headerTop}`}>
            <button className={`${Styles.button1}`}>FEATURED</button>
            <button className={`${Styles.button2}`}>BITCOIN</button>
          </div>
          <div className={`${Styles.headerEnd}`}>
            <div className={`${Styles.container} container`}>
              <h2>Black Chain: What You Need To Know</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis commodi non perferendis soluta assumenda maxime
                laudantium adipisci laboriosam id incidunt, tenetur, fugiat
                numquam omnis fuga...
              </p>
              <div className={`${Styles.info}`}>
                <span className={`${Styles.horizontal}`}></span>
                <h3>Alex Brockenbrow</h3>
                <span className={`${Styles.vertical}`}></span>{" "}
                <span>September 9.2020</span>
                <br />
              </div>

              <button>read more</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
