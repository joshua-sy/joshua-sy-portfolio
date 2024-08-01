import React, {useState} from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import "./contact.css"; // For styling

function Contact() {

  const handleCopy = () => {
    const email = "joshsy18@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
    });
  };
  
  return (
    <div id="contact-page" className="black-page">
      <h1 id="contact-title" className="title">Let's get in touch!</h1>
      <h3 id="contact-email">
        joshsy18@gmail.com  
        <IoCopyOutline id="copy-icon" onClick={handleCopy}/>
      </h3>

      <h3 id="contact-know-me-better">or get to know me better here</h3>
      <div id="contact-socials-container">
        <div className="socials-text">
          <a className="socials-link" href="https://github.com/joshua-sy" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="icon" /> GITHUB
          </a>
        </div>
        <div className="socials-text">
          <a className="socials-link" href="https://www.linkedin.com/in/joshua-sy-02a90a212/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon"/> LINKEDIN
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;