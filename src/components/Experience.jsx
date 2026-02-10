import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Desarrollador Backend',
            company: 'Crazy Family',
            period: '2025',
            description: 'Desarrollo de servicios backend en Node.js y Express para sincronización de stock y precios. Implementación de procesos de carga masiva de productos, reduciendo en un 40% los tiempos operativos. Validación y control de datos para asegurar la integridad y consistencia de la información. Trabajo con APIs REST y bases de datos relacionales',
        }
    ];

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experiencia Laboral</h2>
                <div className="experience-container">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-card glass">
                            <div className="experience-header">
                                <h3 className="experience-role">{exp.role}</h3>
                                <span className="experience-period">{exp.period}</span>
                            </div>
                            <h4 className="experience-company">{exp.company}</h4>
                            <p className="experience-description">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
