import React from 'react';
import Subscribe from '../subscribe';
import Styles from './sidebar.module.css';

const SideBar = props => {
    return (
        <aside className = {`${Styles.sidebar}`}>
            <Subscribe/>
            <ul className = {`${Styles.sidebar__list} list-unstyled`}>
                <h3>CATEGORIES</h3>
                <li>Adoption</li>
                <li>Bitcoin</li>
                <li>BlockChain</li>
                <li>Cards</li>
                <li>Coin</li>
                <li>Crypto</li>
                <li>Cryptocurrencies</li>
                <li>Economics</li>
                <li>Ethereum</li>
                <li>Kuailian</li>
                <li>Mining</li>
                <li>Security</li>
            </ul>
        </aside>
    )
}
export default SideBar;