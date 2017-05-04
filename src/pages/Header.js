import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header id="header">
        <NavLink exact to="/" className="logo">Techmusings</NavLink>
    </header>
);

export default Header;
