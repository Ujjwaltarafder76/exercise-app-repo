import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <nav className="header">
            <h1>Physical Activity</h1>

            <div>
                <a href="index.html">Home</a>
                <a href="index.html">About Us</a>
                <a href="index.html">Contact</a>
                <a href="blog.html">Blog</a>
            </div>
        </nav>
    );
};

export default Header;