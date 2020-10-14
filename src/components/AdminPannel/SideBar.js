import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './SideBar.module.css';


const SideBar = props => {
    return <div className = {`${Styles.sidebar}`} >
        <h4 className = {`${Styles.sidebar__heading}`}><span className = {`${Styles.highlighted}`}>ADMIN </span> PANNEL</h4>
        <nav className = {`${Styles.sidebar__nav}`}>
            <ul className = 'list-unstyled'>
                <li className = {`${Styles.nav__item}`}><Link to = '/' className = {`${Styles.nav__link}`}>home</Link></li>
                <li className = {`${Styles.nav__item}`}><Link to = '/blog' className = {`${Styles.nav__link}`}>blog</Link></li>
                <li className = {`${Styles.nav__item}`}><Link to = '/sponsors' className = {`${Styles.nav__link}`}>sponsor us</Link></li>
                <li className = {`${Styles.nav__item}`}><Link to = '/campervan' className = {`${Styles.nav__link}`}>compervan</Link></li>
                <li className = {`${Styles.nav__item}`}><Link to = '/' className = {`${Styles.nav__link}`}>video</Link></li>
            </ul>
        </nav>
    </div>
}
export default SideBar;