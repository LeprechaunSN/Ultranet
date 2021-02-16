import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import AuthData from './AuthData';
import Button from '../common/Button/Button'
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className={s.header}>
            <div className={"wrapper " + s.headerWrapper}>
                <img className={s.logo} alt="Ultranet" src={logo} />
                <div className={s.authInfo}>
                    {props.isAuth 
                    ? <AuthData photo={props.photo} login={props.login} logout={props.logout} /> 
                    : <NavLink to="/login"><Button text="Login"/></NavLink> }
                </div>
            </div>
        </header>
    );
}

export default Header;