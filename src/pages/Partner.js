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
     if(!props.highlightedPartners){
      props.fetchCategory('highlighted');
     }
     
     
  },[])
 const renderPartners = () => {
  const listOfPartners = []
      if(props.highlightedPartners){
      listOfPartners.push( props.highlightedPartners.map((partner) => {
        return <PartnerItem
        key={partner.name} 
        {...partner} 
        partner = 'highlighted' 
        viewLink = {`/partners/${categoryName}/${partner.name}`} 
        isAdmin = {props.isAdmin}
        history = {props.history}
        />;
      }))}
      if (props.partner) {
        
        listOfPartners.push( props.partner.map((partner) => {
          let highlighted = false;
          for(let item = 0; item< props.highlightedPartners.length; item++){
            if ( props.highlightedPartners[item].name === partner.name){
              highlighted = true;
              break;
            }
          }
          if(highlighted){
            return '';
          }
          return <PartnerItem
          key={partner.name} 
          {...partner} 
          partner = {categoryName} 
          viewLink = {`/partners/${categoryName}/${partner.name}`} 
          isAdmin = {props.isAdmin}
          history = {props.history}
          />;
        }))
      return listOfPartners
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
    isAdmin: state.auth.isAdmin,
    highlightedPartners: state.partners.highlighted
  }
}
export default connect(mapStateToProps,{
  fetchCategory
}) (Partner);
