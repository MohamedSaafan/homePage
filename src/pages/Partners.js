import React from "react";
import Styles from "./Partners.module.css";

import MainNavBar from "../components/MainNavBar";
import PartnerHeader from "../components/Partners/PartnersHeader";
import PartnerItem from "../components/PartnersItem";
class Partners extends React.Component {
  state = {
    item: null,
  };
  componentDidMount() {
    // call the action to fetch the heighlighted partners
    fetch(
      "https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/partners/exchanges/coinjar"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "this is coin jar data");
        this.setState({
          item: data,
        });
      });
  }

  render() {
    if (this.state.item)
      var {
        website,
        shortDescription,
        fullDescription,
        location,
        name,
      } = this.state.item;
    return (
      <div className={`${Styles.partners}`}>
        <MainNavBar color="rgb(28,111,159) " />
        <PartnerHeader />
        {this.state.item ? (
          <PartnerItem
            website={website}
            location={location}
            shortDescription={shortDescription}
            fullDescription={fullDescription}
            name={name}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Partners;
