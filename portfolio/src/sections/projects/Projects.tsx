import React from "react";
import "./projects.css"; // For styling
import ProjectCard from "../../components/projectCard/ProjectCard";
import campusCollab from "../../assets/campusCollab.jpg";
import charitrix from "../../assets/charitix.png";
import stockPulse from "../../assets/stockpulse.png";
import marian from "../../assets/marian.png";
import sigAlgothon2024 from "../../assets/sig2024Algothon.png"

function Projects() {
  const projects = [
    {
      title: "Charitrix",
      description: "View charity events organised by your company on your confluence page.",
      github: "https://github.com/joshua-sy/forgeHack2024-Jiranimo-Charitrix",
      image: charitrix,
    },
    {
      title: "CAMPUS COLLAB",
      description: "Find passionate students to work on projects with.",
      github: "https://github.com/sohumshah2/campuscollab",
      image: campusCollab,
    },
    {
      title:"StockPulse",
      description: "StockPulse notifies users of potential stock movements.",
      github: "https://github.com/big-hero-6-unihack24/stockpulse",
      deployed: "https://big-hero-6-unihack24.github.io/stockpulse/",
      image: stockPulse,
    },
    {
      title: "English to Italian Translator",
      description: "We trained a Marian model to translate English to Italian.",
      github: "https://github.com/joshua-sy/marian",
      image: marian,

    },
    {
      title: "SIG Algothon 2024",
      description: "We developed a trading bot in python to make trades for the SIG Algothon 2024 competition.",
      github: "https://github.com/joshua-sy/algothon24-SIG-SIGmaTradingSquad",
      image: sigAlgothon2024,

    },
  ]
    
  
  return (
    <div id="projects-page" className="white-page">
      <h1 className="title">Projects</h1>
      <div id="projects-card-container">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index.toString()} />
        ))}
      </div>
    </div>
  );
}

export default Projects;