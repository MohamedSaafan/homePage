import React from 'react';
import Styles from './SponsorOfTheWeek.module.css';
import sponsor from '../images/ECHunterSG (1).png';
import {Link} from 'react-router-dom'

const SponsorOfTheMonth = props => {
    return <div className = {`${Styles.sponsor}`}>
        <h3 className = {`${Styles.sponsor__heading}`}>Sponsor of the Month</h3>
        <div className = {`${Styles.sponsor__logo}`}>
            <div className = {`${Styles.sponsor__wrapper}`}>
                <img src = {sponsor} alt = 'sponsor' title = 'sponsor' className = {`${Styles.sponsor__image}`} />
            </div>
        </div>
        <div className = {`${Styles.sponsor__details}`}>
            <h4 className = {`${Styles.details__heading}`}>Easy Crypto Hunter</h4>
            <p className = {`${Styles.details__text}`}>
            Easy Crypto Hunter is the UK’s leading team for Cryptocurrency mining.  
            Since our inception in 2017, we have transformed the way investors can
             enter into the Cryptocurrency mining sector.
            </p>
           <Link to ='/partners'><button className = {`${Styles.details__button}`}>LEARN MORE</button></Link>
        </div>
    </div>
}
export default SponsorOfTheMonth;