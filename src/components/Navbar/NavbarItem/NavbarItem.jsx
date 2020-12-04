import React from 'react'
import s from './NavbarItem.module.css'

function NavbarItem(props) {
    return (
        <div className={s.navbarItem}>
            <img className={s.icon} src={props.iconLink} alt=""/>
            <span>{props.name}</span>
        </div>
    );
}

export default NavbarItem;