import React from 'react';

const Nav = () => (
    <nav id="nav">
        <ul className="links">
            <li className="active"><a href="index.html">These are Techmusings</a></li>
            <li><a href="generic.html">Generic Page</a></li>
            <li><a href="elements.html">Elements Reference</a></li>
        </ul>
        <ul className="icons">
            <li><a href="https://www.linkedin.com/in/jrebertens/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://jreb.nl" target="_blank" className="icon fa-globe"><span className="label">Webpage</span></a></li>
            <li><a href="https://github.com/djbnjack" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
        </ul>
    </nav>
);

export default Nav;
