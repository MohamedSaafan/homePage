import React,{useEffect, useState} from 'react';
import Styles from './AllPartners.module.css';
import {connect} from 'react-redux';
import {fetchCategory} from '../actions';
import PartnerItem from '../components/PartnersItem';
import PartnerBreadCrumb from '../components/PartnerBreadCrumb';

const AllPartners = props => {
    console.log(props)
    const categories = [
    'exchanges',
    'mining',
    'wallets',
    'defi',
    'legal',
    'collectables',
    'shop',
    'charity',
    ];
    const [isPartnerFetched,setIsPartnerFetched] = useState(false)
    useEffect( () =>{
        categories.forEach(async category=>  await props.fetchCategory(category))
        setIsPartnerFetched(true) 
       
    }, [])
    const renderPartners = ()=> {
        if(isPartnerFetched){
            const list = []
            console.log(props.partners,'from')
            for(let category in props.partners){
                if(category === 'highlighted') continue;
               list.push( props.partners[category].map(partner => {
                    return <PartnerItem 
                    key={partner.name} 
                    {...partner} 
                    partner = {category}
                    viewLink = {`/partners/${category}/${partner.name}`} 
                    isAdmin = {props.isAdmin}
                    />;
                }))
            }
            return list
        }
        return <div>Loading...</div>

    }
    return <div>
        <PartnerBreadCrumb />
        {renderPartners()}
    </div>
}
    

const mapStateToProps = state => {
    return {
        partners:state.partners,
        isAdmin: state.auth.isAdmin
    }
}
export default connect(mapStateToProps,{
    fetchCategory
})(AllPartners);