import React from "react";
import "./FirstNavBar.css";

const FirstNavBar = (props) => {
  return (
    <div>
      {" "}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <h2>MARKET DATA</h2>
          </div>
          <ul className="list-unstyled">
            <li>
              BTC $11,031.93 <span>-3.63%</span>
            </li>
            <li>
              ETH$415.43 <span>-7.15%</span>
            </li>
            <li>
              XRP $0.26 <span>-5.95%</span>
            </li>
            <li>
              LTC $55.29 <span>-5.95%</span>
            </li>
            <li>
              EOS $2.93 <span>-.35%</span>
            </li>
            <li>
              XMR $86.27 <span>-5.13%</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FirstNavBar;
