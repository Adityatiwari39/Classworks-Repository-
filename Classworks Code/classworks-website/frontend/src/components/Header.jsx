import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Our Courses</Link></li>
                    <li><Link to="/software">Our Software</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/program">Our Program</Link></li>
                </ul>
            </nav>
            <SearchBar />
        </header>
    );
};

const SearchBar = () => {
    return (
        <input type="text" placeholder="Search..." />
    );
};

export default Header;