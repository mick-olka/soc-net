import React from 'react';
import './Header.css';
import tree_logo from '../../img/tree_logo.png';

const Header = () => {
    return <header className='header'>
        <div className='logo'><img alt='logo' src={tree_logo} /></div>
        <div className='heading'><h1>Treenet</h1></div>
        <input className='search' placeholder='search'></input>
    </header>
}

export default Header;