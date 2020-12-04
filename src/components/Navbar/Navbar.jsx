import React from 'react'
import s from './Navbar.module.css'
import NavbarItem from './NavbarItem/NavbarItem'

function Navbar() {
    return (
        <nav className={s.nav}>
            <NavbarItem path="/profile" name="Profile" iconLink="https://img.icons8.com/wired/64/000000/gender-neutral-user--v1.png" />
            <NavbarItem path="/messages" name="Messages" iconLink="https://img.icons8.com/wired/64/000000/secured-letter.png" />
            <NavbarItem path="/news" name="News" iconLink="https://img.icons8.com/wired/64/000000/news.png" />
            <NavbarItem path="/music" name="Music" iconLink="https://img.icons8.com/wired/64/000000/music.png" />
            <NavbarItem path="/settings" name="Settings" iconLink="https://img.icons8.com/wired/64/000000/settings.png" />
        </nav>
    );
}

export default Navbar;