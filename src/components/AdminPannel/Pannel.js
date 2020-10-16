import React from 'react';
import Styles from './Pannel.module.css';
import {Link} from 'react-router-dom';

const Pannel = props => {
    return <div className = {`${Styles.pannel}`} >
        <div className = {`${Styles.nav}`}>
            
        </div>
        <div className = {`${Styles.pannel__heading}`}>Dash Board <sub className = {`${Styles.sub}`}>Controle pannel</sub></div>
        <div className = {`${Styles.cards}`}>
        <Link to = '/admin/addpost' className = {`${Styles.card}`}>
            <i className = 'fa fa-pencil-square-o fa-lg'></i>
            <span className = {`${Styles.card__text}`}>add post</span>
            <span className = {`${Styles.card__text} ${Styles.card__textBackgrounded}`}>click here <i className = 'fa fa-arrow-circle-right fa-lg'></i></span>
        </Link>
        <Link className = {`${Styles.card}`}>
            <i className = 'fa fa-home fa-lg'></i>
            <span className = {`${Styles.card__text}`}>home page settings</span>
            <span className = {`${Styles.card__text} ${Styles.card__textBackgrounded}`}>click here <i className = 'fa fa-arrow-circle-right fa-lg'></i></span>
        </Link>
        <Link className = {`${Styles.card}`}>
            <i className = 'fa fa-home fa-lg'></i>
            <span className = {`${Styles.card__text}`}>home page settings</span>
            <span className = {`${Styles.card__text} ${Styles.card__textBackgrounded}`}>click here <i className = 'fa fa-arrow-circle-right fa-lg'></i></span>
        </Link>
        <form ></form>
        <Link className = {`${Styles.card}`}>
            <i className = 'fa fa-home fa-lg'></i>
            <span className = {`${Styles.card__text} `}>home page settings</span>
            <span className = {`${Styles.card__text} ${Styles.card__textBackgrounded}`}>click here <i className = 'fa fa-arrow-circle-right fa-lg'></i></span>
        </Link>
        <Link className = {`${Styles.card}`}>
            <i className = 'fa fa-home fa-lg'></i>
            <span className = {`${Styles.card__text}`}>home page settings</span>
            <span className = {`${Styles.card__text} ${Styles.card__textBackgrounded}`}>click here <i className = 'fa fa-arrow-circle-right fa-lg'></i></span>
        </Link>
        <Link className = {`${Styles.card}`}>
            <i className = 'fa fa-home fa-lg'></i>
            <span className = {`${Styles.card__text}`}>home page settings</span>
            <span className = {`${Styles.card__text} ${Styles.card__textBackgrounded}`}>click here <i className = 'fa fa-arrow-circle-right fa-lg'></i></span>
        </Link>
        </div>

    </div>
}
export default Pannel;