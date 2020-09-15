import React from "react";

import Styles from "./Pools.module.css";

const Pools = (props) => {
  return (
    <div className={`${Styles.aboutItems} container`}>
      <div className={Styles.aboutItem}>
        <div className={Styles.aboutItemContainer}>
          <div className="container">
            <div className={Styles.aboutItemContent}>
              <h5>Pool#1</h5>
              <hr />
              <div>
                <span>Name: </span>
                <span>AltsTogether</span>
                <br />
              </div>{" "}
              <div>
                <span>Ticker: </span>
                <span>ALTS</span>
                <br />
              </div>{" "}
              <div>
                <span>ID: </span>
                <span>
                  {" "}
                  937880739bd2192976d34ec245e6bac4053cf0e6e8f4e96b157413d0
                </span>
                <br />
              </div>
              <div>
                <span>Pledge: </span>
                <span>99k</span>
                <br />
              </div>
              <div>
                <span>Margin: </span>
                <span>1%</span>
                <br />
              </div>
              <div>
                <span>Fixed Cost: </span>
                <span>340A</span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.aboutItem}>
        <div className={Styles.aboutItemContainer}>
          <div className="container">
            <div className={Styles.aboutItemContent}>
              <h5>Pool#2</h5>
              <hr />
              <div>
                <span>Name: </span>
                <span>AltsTogether</span>
                <br />
              </div>{" "}
              <div>
                <span>Ticker: </span>
                <span>ALTS</span>
                <br />
              </div>{" "}
              <div>
                <span>ID: </span>
                <span>
                  {" "}
                  937880739bd2192976d34ec245e6bac4053cf0e6e8f4e96b157413d0
                </span>
                <br />
              </div>
              <div>
                <span>Pledge: </span>
                <span>99k</span>
                <br />
              </div>
              <div>
                <span>Margin: </span>
                <span>1%</span>
                <br />
              </div>
              <div>
                <span>Fixed Cost: </span>
                <span>340A</span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.aboutItem}>
        <div className={Styles.aboutItemContainer}>
          <div className="container">
            <div className={Styles.aboutItemContent}>
              <h5>Pool#3</h5>
              <hr />
              <div>
                <span>Name: </span>
                <span>AltsTogether</span>
                <br />
              </div>{" "}
              <div>
                <span>Ticker: </span>
                <span>ALTS</span>
                <br />
              </div>{" "}
              <div>
                <span>ID: </span>
                <span>
                  {" "}
                  937880739bd2192976d34ec245e6bac4053cf0e6e8f4e96b157413d0
                </span>
                <br />
              </div>
              <div>
                <span>Pledge: </span>
                <span>99k</span>
                <br />
              </div>
              <div>
                <span>Margin: </span>
                <span>1%</span>
                <br />
              </div>
              <div>
                <span>Fixed Cost: </span>
                <span>340A</span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pools;
