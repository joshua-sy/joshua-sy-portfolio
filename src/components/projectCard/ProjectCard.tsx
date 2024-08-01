import React from "react";
import './projectCard.css'; // Import the CSS for styling
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";


function ProjectCard({ project }) {
  const { ref: refProjectCard, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <div ref={refProjectCard} className={`project-card ${inView ? 'visible' : ''}`}
>
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <div className="project-buttons">
          <a href={project.github} className="button github" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>
          {project.deployed && (
            <a href={project.deployed} className="button site" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="icon" /> Deployed Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;