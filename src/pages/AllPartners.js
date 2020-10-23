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
    useEffect(  () =>{
        const fetchHighlighted = async ()=>  await props.fetchCategory('highlighted');
        fetchHighlighted();
        categories.forEach(async category=>  {
            if(category === 'highlighted') return;
            await props.fetchCategory(category)
        })
        setIsPartnerFetched(true) 
       
    }, [])
    const renderPartners = ()=> {
        
        if(props.highlightedPartner){
            
            const list = [];
            list.push (props.highlightedPartner.map(partner => {
                return <PartnerItem 
                key={partner.name} 
                {...partner} 
                partner = {'highlighted'}
                viewLink = {`/partners/highlighted/${partner.name}`} 
                isAdmin = {props.isAdmin}
                />;

            }))
            
            for(let category in props.partners){
                if(category === 'highlighted') continue;
               list.push( props.partners[category].map(partner => {
                    let isHighlighed = false;
                    if(props.partners.highlighted){
                        for(let item = 0; item< props.partners.highlighted.length; item++){
                            if ( props.partners.highlighted[item].name === partner.name){
                                isHighlighed = true;
                                break;
                            }
                        }
                    }
                   if(isHighlighed){
                       return '';
                   }
                    
                    return <PartnerItem 
                    key={partner.name} 
                    {...partner} 
                    partner = {isHighlighed===true?'highlighted':category}
                    viewLink = {`/partners/${category}/${partner.name}`} 
                    isAdmin = {props.isAdmin}
                    />;
                }))
            }
            return list
        }
        return <div>Loading...</div>

    }
    return <div className = {`${Styles.allpartners}`}>
        <PartnerBreadCrumb />
        {renderPartners()}
    </div>
}
    

const mapStateToProps = state => {
    return {
        partners:state.partners,
        highlightedPartner: state.partners.highlighted,
        isAdmin: state.auth.isAdmin,
    }
}
export default connect(mapStateToProps,{
    fetchCategory
})(AllPartners);