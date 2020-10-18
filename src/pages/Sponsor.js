import React, { useEffect } from "react";
import PartnerItem from "../components/PartnersItem";
import {connect} from 'react-redux';
import{fetchCategory} from '../actions'

const Sponsor = (props) => {
  const sponsorName = props.match.params.sponsor;
  const categoryName = props.match.params.category

  useEffect(()=>{
    props.fetchCategory(categoryName);
  },[]);

  if(props[categoryName]){
    const item = props[categoryName].find(item => item.name === sponsorName )
    console.log(item)

    return <PartnerItem {...item}/>  ;
  }
  return ''

};

const mapStateToProps = (state,ownProps) => {
  return{
    [ownProps.match.params.category]:state.partners[ownProps.match.params.category]
  }
}

export default connect(mapStateToProps,{fetchCategory})(Sponsor);