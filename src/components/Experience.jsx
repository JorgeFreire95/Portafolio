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
        },
        {
            id: 2,
            role: 'Desarrollador FullStack',
            company: 'Freelance',
            period: '2026',
            description: 'Desarrollé una aplicación móvil orientada a empresas de seguridad, enfocada en la gestión y supervisión de rondas operativas. La solución permite la marcación de puntos de control en tiempo real, asegurando el cumplimiento de recorridos establecidos por el personal de vigilancia. Además, implementé un sistema de registro de asistencia integrado, que facilita el control de horarios y la trazabilidad de los guardias. La aplicación mejora la eficiencia operativa, la supervisión remota y la generación de reportes para la toma de decisiones.\n\nFunciones principales:\n\n-Registro y seguimiento de rondas mediante marcación de puntos de control\n-Sistema de control de asistencia del personal\n-Monitoreo en tiempo real de actividades\n-Generación de reportes operativos\n-Mejora en la trazabilidad y cumplimiento de protocolos de seguridad',
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
