import React, { useState } from 'react';
import './Projects.css';
import rifafacil1 from '../assets/rifafacil/img1.png';
import rifafacil2 from '../assets/rifafacil/img2.png';
import rifafacil3 from '../assets/rifafacil/img3.png';
import rep1 from '../assets/rep-drill/rep1.png';
import rep2 from '../assets/rep-drill/rep2.png';
import jvl1 from '../assets/jvl/jvl1.png';

const STATIC_PROJECTS = [
    {
        id: 1,
        title: "Rep-Drill",
        description: "En conjunto con mi equipo de trabajo, se desarrollo un software para la gestión de inventario y ventas de una empresa de repuestos. La cual consta con sistema de modelos predictivos para la gestión de inventario y un chatbot para la atención al cliente.",
        tags: ["React", "Django", "PostgreSQL", "Prophet", "Docker", "Ollama"],
        link: "https://github.com/JorgeFreire95/rep-drill",
        images: [rep1, rep2],
        layout: "horizontal",
        initialImageCount: 0
    },
    {
        id: 2,
        title: "RifaFacil",
        description: "Desarrollé una aplicacion movil para gestionar rifas de manera sencilla y eficiente. La aplicación permite a los usuarios crear, administrar y participar en rifas, facilitando la organización y el seguimiento de los eventos.",
        tags: ["React", "Capacitor", "FireBase", "Glassmorphism", "JavaScript"],
        link: "https://github.com/JorgeFreire95/RifaFacil",
        images: [rifafacil1, rifafacil2, rifafacil3],
        layout: "vertical",
        initialImageCount: 0
    },
    {
        id: 3,
        title: "Iglesia Prebiteriana de Villa Alemana (en desarrollo)",
        description: "Desarrollé un sitio web para la Iglesia Presbiteriana de Villa Alemana, con el objetivo de proporcionar una plataforma en línea para que los miembros de la iglesia puedan acceder a información sobre eventos, servicios y actividades. El sitio web cuenta con un diseño moderno y fácil de navegar, permitiendo a los usuarios mantenerse conectados con la comunidad de la iglesia.",
        tags: ["React", "Python", "SQLite", "Django"],
        link: "https://github.com/JorgeFreire95/JVL",
        images: [jvl1],
        layout: "single",
        initialImageCount: 1
    }
];

const Projects = () => {
    // Inicializar estado con los datos estáticos para asegurar que HMR actualice los cambios
    const [projects, setProjects] = useState(STATIC_PROJECTS);

    const [flipped, setFlipped] = useState({});

    const toggleFlip = (projectId) => {
        setFlipped(prev => ({
            ...prev,
            [projectId]: !prev[projectId]
        }));
    };

    const handleImageUpload = (projectId, event) => {
        const files = Array.from(event.target.files);
        setProjects(prevProjects =>
            prevProjects.map(project =>
                project.id === projectId
                    ? {
                        ...project,
                        images: [
                            ...project.images.slice(0, 2),
                            ...files.map(file => URL.createObjectURL(file))
                        ].slice(0, 3)
                    }
                    : project
            )
        );
    };

    const removeImage = (projectId, imageIndex) => {
        setProjects(prevProjects =>
            prevProjects.map(project => {
                // Solo permite eliminar imágenes que no sean predefinidas
                if (project.id === projectId && imageIndex >= (project.initialImageCount || 0)) {
                    return {
                        ...project,
                        images: project.images.filter((_, index) => index !== imageIndex)
                    };
                }
                return project;
            })
        );
    };

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Mis Proyectos</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card-container">
                            <div
                                className={`project-card-flip ${flipped[project.id] ? 'flipped' : ''}`}
                                onClick={() => toggleFlip(project.id)}
                            >
                                {/* FRENTE */}
                                <div className="project-card-front glass">
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
                                    <div className="flip-hint">Haz clic para ver las imágenes</div>
                                </div>

                                {/* REVERSO */}
                                <div className="project-card-back glass">
                                    <div className="project-back-content">

                                        <div className={`images-grid layout-${project.layout || 'vertical'}`}>
                                            {project.images.map((image, index) => (
                                                <div key={index} className="image-card">
                                                    <img
                                                        src={image}
                                                        alt={`Proyecto ${index + 1}`}
                                                        style={{ objectFit: project.imageFit || 'cover' }}
                                                    />
                                                </div>
                                            ))}
                                            {!['horizontal', 'single'].includes(project.layout) && [...Array(3 - project.images.length)].map((_, index) => (
                                                <label key={`empty-${index}`} className="image-placeholder">
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => {
                                                            handleImageUpload(project.id, e);
                                                            e.stopPropagation();
                                                        }}
                                                        style={{ display: 'none' }}
                                                        onClick={(e) => e.stopPropagation()}
                                                    />
                                                    <div className="placeholder-content">
                                                        <span className="plus-icon">+</span>
                                                        <p>Subir imagen</p>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
