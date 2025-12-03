import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Rep-Drill",
            description: "Panel de administración completo con gráficos y gestión de inventario.",
            tags: ["React", "Django", "PostgreSQL", "Prophet", "Docker", "Ollama"],
            link: "https://github.com/JorgeFreire95/rep-drill"
        },
        {
            id: 2,
            title: "App de Clima",
            description: "Aplicación de pronóstico del tiempo en tiempo real con geolocalización.",
            tags: ["React", "API", "CSS"],
            link: "https://github.com/JorgeFreire95/Portafolio"
        },
        {
            id: 3,
            title: "Task Manager",
            description: "Organizador de tareas con funcionalidad drag-and-drop.",
            tags: ["React", "Firebase", "DnD"],
            link: "#"
        }
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
