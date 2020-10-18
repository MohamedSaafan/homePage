import React from "react";
import Styles from "./Partners.module.css";

import MainNavBar from "../components/MainNavBar";
import PartnerHeader from "../components/Partners/PartnersHeader";
import PartnerItem from "../components/PartnersItem";
import {connect} from 'react-redux'
import {fetchHighlighted} from '../actions'
class Partners extends React.Component {

  componentDidMount() {
    // call the action to fetch the heighlighted partners
    this.props.fetchHighlighted();
   
  }
   renderPartners = () => {
    if (this.props.highlighted) {
      return this.props.highlighted.map((partner) => {
        return <PartnerItem key={partner.name} {...partner} viewLink = {`/partners/highlighted/${partner.name}`} />;
      });
    }
    return "";
  };

  render() {
    return (
      <div className={`${Styles.partners}`}>
        <MainNavBar color="rgb(28,111,159) " />
        <PartnerHeader />
        {this.renderPartners()}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    highlighted:state.partners.highlighted
  }
}
export default connect(mapStateToProps,{
  fetchHighlighted
})(Partners);
