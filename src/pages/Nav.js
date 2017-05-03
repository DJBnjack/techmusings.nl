import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
    <nav id="nav">
        <ul className="links">
            <li><NavLink exact to="/" activeClassName="active">These are Techmusings</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About me</NavLink></li>
        </ul>
        <ul className="icons">
            <li><a href="https://www.linkedin.com/in/jrebertens/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://jreb.nl" target="_blank" className="icon fa-globe"><span className="label">Webpage</span></a></li>
            <li><a href="https://github.com/djbnjack" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
        </ul>
    </nav>
);

export default Nav;
