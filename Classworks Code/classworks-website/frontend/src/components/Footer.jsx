import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling the footer

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <ul>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/legal-policy">Company Legal Policy</a></li>
                </ul>
                <div className="social-media">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;