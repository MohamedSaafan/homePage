import React,{useState,useEffect} from "react";
import { connect } from "react-redux";
import MainNavBar from "../components/MainNavBar";
import PartnerBreadCrumb from "../components/PartnerBreadCrumb";
import PartnerItem from "../components/PartnersItem";
import Styles from "./Partner.module.css";
import {fetchCategory} from '../actions'

const Partner = props => {
  const categoryName = props.match.params.category
  useEffect(() =>{
     props.fetchCategory(categoryName)
  },[])
 const renderPartners = () => {
    if (props.partner) {
      return props.partner.map((partner) => {
        return <PartnerItem
        key={partner.name} 
        {...partner} 
        partner = {categoryName} 
        viewLink = {`/partners/${categoryName}/${partner.name}`} 
        isAdmin = {props.isAdmin}
        history = {props.history}
        />;
      });
    }
    return "";
  };
   
    return (
      <div className={`${Styles.partner}`}>
        <MainNavBar color="rgb(28, 111, 159)" />
        <PartnerBreadCrumb />
        {renderPartners()}
      </div>
    );
  
}
const mapStateToProps = (state,ownProps) => {
  return {
    partner: state.partners[ownProps.match.params.category],
    isAdmin: state.auth.isAdmin
  }
}
export default connect(mapStateToProps,{
  fetchCategory
}) (Partner);
