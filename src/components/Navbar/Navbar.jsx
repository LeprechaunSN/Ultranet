import React from 'react'
import s from './Navbar.module.css'
import NavbarItem from './NavbarItem/NavbarItem'
import profileIcon from '../../assets/images/icons/profile.png'
import messagesIcon from '../../assets/images/icons/messages.png'
import usersIcon from '../../assets/images/icons/users.png'
import newsIcon from '../../assets/images/icons/news.png'
import musicIcon from '../../assets/images/icons/music.png'
import settingsIcon from '../../assets/images/icons/settings.png'

function Navbar() {
    return (
        <nav className={s.nav}>
            <NavbarItem path="/profile" name="Profile" iconLink={profileIcon} />
            <NavbarItem path="/messages" name="Messages" iconLink={messagesIcon} />
            <NavbarItem path="/users" name="Users" iconLink={usersIcon} />
            <NavbarItem path="/news" name="News" iconLink={newsIcon} />
            <NavbarItem path="/music" name="Music" iconLink={musicIcon} />
            <hr/>
            <NavbarItem path="/settings" name="Settings" iconLink={settingsIcon} />
        </nav>
    );
}

export default Navbar;