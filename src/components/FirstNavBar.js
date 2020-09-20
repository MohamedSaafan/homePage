import React, { useState } from "react";
import { useEffect } from "react";
import "./FirstNavBar.css";

const FirstNavBar = (props) => {
  const [coins, setCoins] = useState(null);
  useEffect(() => {
    let url = new URL(
      "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest"
    );
    let params = {
      symbol: "BTC,ETH,XRP,LTC,EOS,XMR",
      CMC_PRO_API_KEY: "982c8f11-bd68-4f67-9d77-8c7a3f200d77",
    };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCoins(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(coins, "from coins");
  if (!coins) {
    return (
      <div>
        {" "}
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <h2>MARKET DATA</h2>
            </div>
            <ul className="list-unstyled">
              <li>BTC</li>
              <li>ETH</li>
              <li>XRP</li>
              <li>LTC</li>
              <li>EOS</li>
              <li>XMR</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
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
              BTC ${coins.data.BTC.quote.USD.price.toFixed(2)}{" "}
              <span>
                {coins.data.BTC.quote.USD.percent_change_24h.toFixed(2)}%
              </span>
            </li>
            <li>
              ETH ${coins.data.ETH.quote.USD.price.toFixed(2)}{" "}
              <span>
                {coins.data.ETH.quote.USD.percent_change_24h.toFixed(2)}%
              </span>
            </li>
            <li>
              XRP ${coins.data.XRP.quote.USD.price.toFixed(2)}{" "}
              <span>
                {coins.data.XRP.quote.USD.percent_change_24h.toFixed(2)}%
              </span>
            </li>
            <li>
              LTC ${coins.data.LTC.quote.USD.price.toFixed(2)}{" "}
              <span>
                {coins.data.LTC.quote.USD.percent_change_24h.toFixed(2)}%
              </span>
            </li>
            <li>
              EOS ${coins.data.EOS.quote.USD.price.toFixed(2)}{" "}
              <span>
                {coins.data.EOS.quote.USD.percent_change_24h.toFixed(2)}%
              </span>
            </li>
            <li>
              XMR ${coins.data.XMR.quote.USD.price.toFixed(2)}{" "}
              <span>
                {coins.data.XMR.quote.USD.percent_change_24h.toFixed(2)}%
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FirstNavBar;
