import React from 'react'
import s from './Header.module.css'

function Header() {
    return (
        <header className={s.header}>
            <div className="wrapper">
                <img className={s.logo} alt="Ultranet" src="https://demo.joomlashine.com/joomla-templates/jsn_ultranet/pro//templates/jsn_ultranet/images/logo.png" />
            </div>
        </header>
    );
}

export default Header;