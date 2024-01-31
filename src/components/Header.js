import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ name }) => (
    <header>
        <h1>{name}</h1>
        <nav>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/education">Education</Link>
            <Link to="/contactMe">Contact me</Link>
            <Link to="/blog">Blog</Link>
        </nav>
    </header>
);

export default Header;
