import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-content">
                <div className="hero-text animate-fade-in">
                    <span className="greeting">Hola, soy</span>
                    <h1 className="name">Jorge Freire</h1>
                    <h2 className="role">Ingeniero en Informatica</h2>
                    <p className="description">
                        Creo experiencias digitales excepcionales, accesibles y centradas en el usuario.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
                        <a href="#contact" className="btn btn-outline">Contáctame</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="image-container">
                        <img
                            src="/perfil.jpg"
                            alt="Jorge Freire"
                            className="hero-image"
                        />
                        <div className="gradient-blob-behind"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
