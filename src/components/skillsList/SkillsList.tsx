import React from "react";
// import "./skillsList.css"; 
import "./skillsList.css";
import { useInView } from "react-intersection-observer";

interface SkillsListProps {
  title: string;
  skills: string[];
}

function SkillsList({title, skills}: SkillsListProps) {
  const { ref: myRef, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <>
    <div ref={myRef} className={`skillsList ${inView ? 'visible' : ''}`}
    >
      <h5 className="skill-title">{title}</h5>
      <hr className="line"/>
        {skills.map((skill:string, index) => (
          <div className="skill-text" key={index}>{skill}</div>
        ))}
    </div>
      
    </>
  );
}
export default SkillsList;