import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Desarrollador Frontend',
            company: 'Tech Solutions Inc.',
            period: '2022 - Presente',
            description: 'Lideré el desarrollo de interfaces de usuario modernas utilizando React y Tailwind CSS. Mejoré el rendimiento del sitio web en un 40% y colaboré estrechamente con diseñadores UX/UI.',
        },
        {
            id: 2,
            role: 'Desarrollador Web Junior',
            company: 'Creative Agency',
            period: '2020 - 2022',
            description: 'Desarrollé sitios web responsivos para diversos clientes. Mantenimiento y actualización de plataformas existentes utilizando HTML, CSS y JavaScript.',
        },
        {
            id: 3,
            role: 'Pasante de Desarrollo',
            company: 'StartUp Innovadora',
            period: '2019 - 2020',
            description: 'Apoyo en la creación de componentes reutilizables y pruebas unitarias. Aprendizaje continuo de nuevas tecnologías y metodologías ágiles.',
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
