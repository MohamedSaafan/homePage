import React, { useState } from 'react';
import Styles from './searchbar.module.css';

const SearchBar = props => {
    const [inputValue,setInputValue] = useState('');
    return <div className = {`${Styles.searchbar}`}>
        <input 
            type = 'text' 
            onChange = {(e)=> setInputValue(e.target.value)} 
            value = {inputValue} 
            className = {`${Styles.searchbar__input}`}
            placeholder = 'search'
        />
        <div className = {`${Styles.searchbar__icon}`}>
        <i className = {`fa fa-search fa-lg `}></i>

        </div>
    </div>
}
export default SearchBar;