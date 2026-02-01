import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Rep-Drill",
            description: "En conjunto con mi equipo de trabajo, se desarrollo un software para la gestión de inventario y ventas de una empresa de repuestos. La cual consta con sistema de modelos predictivos para la gestión de inventario y un chatbot para la atención al cliente.",
            tags: ["React", "Django", "PostgreSQL", "Prophet", "Docker", "Ollama"],
            link: "https://github.com/JorgeFreire95/rep-drill"
        },
         {
            id: 2,
            title: "RifaFacil",
            description: "Desarrollé una aplicacion movil para gestionar rifas de manera sencilla y eficiente. La aplicación permite a los usuarios crear, administrar y participar en rifas, facilitando la organización y el seguimiento de los eventos.",
            tags: ["React", "Capacitor", "FireBase", "Glassmorphism", "JavaScript"],
            link: "https://github.com/JorgeFreire95/RifaFacil"
        },
       
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Mis Proyectos</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card glass">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="btn-link" target="_blank" rel="noopener noreferrer">Ver Proyecto &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
