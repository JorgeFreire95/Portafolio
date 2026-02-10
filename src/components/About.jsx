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
                            Desarrollador Full Stack con formación en Ingeniería en Informática y experiencia en proyectos reales de gestión de inventarios, 
                            ventas y aplicaciones móviles. Especializado en React.js y TypeScript, 
                            con experiencia en Node.js, APIs REST y bases de datos relacionales. 
                            Me destaco por mi enfoque en resultados, trabajo en equipo y capacidad para desarrollar soluciones escalables orientadas a negocio.
                        </p>
                        
                        <div className="skills-grid">
                            <div className="skill-item">React.js</div>
                            <div className="skill-item">TypeScript</div>
                            <div className="skill-item">JavaScript(ES6+)</div>
                            <div className="skill-item">Node.js</div>
                            <div className="skill-item">Express.js</div>
                            <div className="skill-item">APIs REST</div>
                            <div className="skill-item">PostgreSQL</div>
                            <div className="skill-item">MySQL</div>
                            <div className="skill-item">Oracle Database</div>
                            <div className="skill-item">HTML5</div>
                            <div className="skill-item">CSS3</div>
                            <div className="skill-item">Tailwind CSS</div>
                            <div className="skill-item">Git</div>
                            <div className="skill-item">GitHub</div>
                            <div className="skill-item">Docker</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
