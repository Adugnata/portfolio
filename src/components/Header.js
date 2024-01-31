import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ name }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header>
            <h1>{name}</h1>
            <nav>
                <div className="dropdown">
                    <button onClick={toggleDropdown} className="dropbtn">Menu</button>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <Link to="/about">About</Link>
                            <Link to="/skills">Skills</Link>
                            <Link to="/experience">Experience</Link>
                            <Link to="/education">Education</Link>
                            <Link to="/contactMe">Contact Me</Link>
                            <Link to="/blog">Blog</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
