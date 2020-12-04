import React from 'react'
import s from './Navbar.module.css'
import NavbarItem from './NavbarItem/NavbarItem'

function Navbar() {
    return (
        <nav className={s.nav}>
            <NavbarItem name="Profile" iconLink="https://img.icons8.com/wired/64/000000/gender-neutral-user--v1.png" />
            <NavbarItem name="Messages" iconLink="https://img.icons8.com/wired/64/000000/secured-letter.png" />
            <NavbarItem name="News" iconLink="https://img.icons8.com/wired/64/000000/news.png" />
            <NavbarItem name="Music" iconLink="https://img.icons8.com/wired/64/000000/music.png" />
            <NavbarItem name="Settings" iconLink="https://img.icons8.com/wired/64/000000/settings.png" />
        </nav>
    );
}

export default Navbar;