import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React to showcase my projects and skills.',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      year: '2024',
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourportfolio.com'
    },
    {
      title: 'Todo Application',
      description: 'A simple task management app with add, edit, up, down and delete functionality.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      year: '2024',
      github: 'https://github.com/yourusername/todo-app',
      demo: 'https://yourtodoapp.com'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application using API integration.',
      tech: ['React', 'API', 'CSS'],
      year: '2024',
      github: 'https://github.com/yourusername/weather-app',
      demo: 'https://yourweatherapp.com'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-year">{project.year}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn-primary"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn-secondary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;