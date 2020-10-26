import React from 'react';
import SearchBar from '../searchbar';
import Styles from './header.module.css';
import mainbanner from '../../../images/news/mainbanner.png'

const Header = props => {
    return (
        <header className = {`${Styles.header}`}>
            <SearchBar />
            <div className = {`${Styles.header__content}`}>
                <img className = {`${Styles.header__image}`} 
                src = {mainbanner} 
                alt = 'blockchain' 
                title = 'blockchani' />
                <h3 className = {`${Styles.header__heading}`}>
                    The two 51% attacks on the Ethereum
                    Classic blockchain will be contested
                    in court
                </h3>
                <br />
                <p className = {`${Styles.header__details}`}>
                    When a group of miners achieves 51% of the
                    mining power, it can branch off the network
                    or cause double expenditure…
                </p>
                <br />
                <p className = {`${Styles.header__date}`}>
                 AUGUST 21, 2020

                </p>
            </div>
        </header>
    )
}
export default Header;