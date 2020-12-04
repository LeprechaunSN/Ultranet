import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './NavbarItem.module.css'

function NavbarItem(props) {
    return (
        <NavLink to={props.path} className={s.navbarItem}>
            <img className={s.icon} src={props.iconLink} alt=""/>
            <span>{props.name}</span>
        </NavLink>
    );
}

export default NavbarItem;