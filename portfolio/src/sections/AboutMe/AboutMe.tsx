import React from "react";
import profile from '../../assets/portrait.jpg';
import SkillsList from "../../components/skillsList/SkillsList";
import { useInView } from "react-intersection-observer";

// import SkillsList from "../../components/
import "./aboutMe.css"; // For styling

function AboutMe() {
  const { ref: refDescription, inView: inViewDescription } = useInView({});

  const frontend = ['React', 'NextJS', 'HTML', 'CSS', 'Javascript', 'Vite', 'Tailwind'];
  const backend = ['Java', 'C', 'C++', 'Python', 'NodeJS'];
  const databases = ['MongoDB', 'MySQL', 'PostgreSQL'];

  return (
    <div id="aboutMe-page" className="black-page">
      <h1 className="title">About Me</h1>
      <div ref={refDescription} id="image-description-container" className={`image-description-ani ${inViewDescription ? 'visible' : ''}`}
      >
          <img src={profile} id="profile-image" alt="portrait" className="w-full h-full object-cover"/>
          <p id="description-text" >My name is Joshua Sy. I am a student from University of New South Wales where I study software engineering and biotechnology. Outside of coding, I worked as a receptionist and won the Peter Farrell Cup competition in 2022 <a href="https://unswfounders.com/newsletter/pfcs-triumphant-return-to-full-house-finals-night-at-nida" target="_blank" rel="noopener noreferrer" id="pfc-link">(Check it out here!)</a></p>
      </div>
      <div id="skills-container">
        <p id="tech-text">I have used many TECHNOLOGIES which include: </p>
        <div id="skillsList-container">
          <SkillsList title="Frontend" skills={frontend} />
          <SkillsList title="Backend" skills={backend} />
          <SkillsList title="Databases" skills={databases} />
      </div>

      </div>
      
    </div>
  );
}

export default AboutMe;