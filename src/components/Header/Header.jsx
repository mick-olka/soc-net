import React from 'react';
import './Header.css';
import tree_logo from '../../img/tree_logo.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className='header'>
        <div className='logo'><img alt='logo' src={tree_logo} /></div>
        <div className='heading'><h1>Treenet</h1></div>
        <input className='search' placeholder='search'></input>
        <div className='loginBlock' >
            {props.isAuth ? props.login : <NavLink to={'/login'}>
                Login
            </NavLink>}
        </div>
    </header>
}

export default Header;