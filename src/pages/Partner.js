import React from "react";
import MainNavBar from "../components/MainNavBar";
import PartnerBreadCrumb from "../components/PartnerBreadCrumb";
import PartnerItem from "../components/PartnersItem";
import Styles from "./Partner.module.css";

class Partner extends React.Component {
  state = {
    partners: null,
  };
  componentDidMount() {
    fetch(
      `https://ey5anj8005.execute-api.us-east-2.amazonaws.com/dev/partners/${this.props.match.params.name}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "partners from fetch");
        this.setState({ partners: data });
      });
  }
  renderPartners = () => {
    if (this.state.partners) {
      return this.state.partners.map((partner) => {
        return <PartnerItem key={partner.name} {...partner} />;
      });
    }
    return "";
  };
  render() {
    return (
      <div className={`${Styles.partner}`}>
        <MainNavBar color="rgb(28, 111, 159)" />
        <PartnerBreadCrumb />
        {this.renderPartners()}
      </div>
    );
  }
}
export default Partner;
