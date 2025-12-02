import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>&copy; {new Date().getFullYear()} Jorge. Todos los derechos reservados.</p>
                <div className="social-links">
                    <a href="https://github.com/JorgeFreire95" aria-label="GitHub">GitHub</a>
                    <a href="#" aria-label="LinkedIn">LinkedIn</a>
                    <a href="#" aria-label="Twitter">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
