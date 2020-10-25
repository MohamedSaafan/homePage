import React, { useState } from 'react';
import Styles from './subscribe.module.css';

const Subscribe = props => {
    const [inputValue,setInputValue] = useState('')
    return (
        <div className = {`${Styles.subscribe}`}>
            <h3 className = {`${Styles.subscribe__heading}`}>Subscribe to blog via email</h3>
            <p className = {`${Styles.subscribe__text}`}>
                Enter your email address to subscribe
                to this blog and receive notifications
                of new posts by email.
            </p>
            <input  
                type = 'text' 
                placeholder = 'Enter your email address' 
                value = {inputValue} 
                onChange = {e => setInputValue(e.target.value)}
                className = {`${Styles.subscribe__input}`}
            />
            <button className = {`${Styles.subscribe__button}`}>Subscribe</button>
        </div>
    )
}
export default Subscribe;