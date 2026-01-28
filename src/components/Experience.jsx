import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Desarrollador Backend',
            company: 'Crazy Family',
            period: '2025',
            description: 'Se trabajo principalmente en la optimizacion y mantencion del backend del sitio web e implementando funcionalidades segun requerimiento del cliente ',
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
