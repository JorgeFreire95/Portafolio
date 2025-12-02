import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">Sobre Mí</h2>
                <div className="about-content glass">
                    <div className="about-text">
                        <p>
                            Soy un apasionado desarrollador web con experiencia en la creación de aplicaciones modernas y escalables.
                            Me especializo en el área de FrontEnd y siempre estoy buscando aprender nuevas tecnologías.
                        </p>
                        <p>
                            Mi enfoque es escribir código limpio, eficiente y mantenible, mientras creo interfaces de usuario intuitivas y atractivas.
                        </p>
                        <div className="skills-grid">
                            <div className="skill-item">React</div>
                            <div className="skill-item">JavaScript</div>
                            <div className="skill-item">Node.js</div>
                            <div className="skill-item">CSS3</div>
                            <div className="skill-item">HTML5</div>
                            <div className="skill-item">Git</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
