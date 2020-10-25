import React, { useEffect } from "react";
import PartnerItem from "../components/PartnersItem";
import {connect} from 'react-redux';
import{fetchCategory} from '../actions'
import PartnerBreadCrumb from "../components/PartnerBreadCrumb";

const Sponsor = (props) => {
  const sponsorName = props.match.params.sponsor;
  const categoryName = props.match.params.category;

  useEffect(()=>{
    props.fetchCategory(categoryName);
  },[]);

  if(props[categoryName]){
    const item = props[categoryName].find(item => item.name === sponsorName )

    return (
      <>
      <PartnerBreadCrumb />
        <PartnerItem {...item} name = {sponsorName}/>
      </>
    ) ;
  }
  return ''

};

const mapStateToProps = (state,ownProps) => {
  return{
    [ownProps.match.params.category]:state.partners[ownProps.match.params.category]
  }
}

export default connect(mapStateToProps,{fetchCategory})(Sponsor);