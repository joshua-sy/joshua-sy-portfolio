import React from 'react'
import './App.css'
import Name from './sections/Name/Name.tsx';
import AboutMe from './sections/AboutMe/AboutMe';
import Projects from './sections/projects/Projects.tsx';
import Contact from './sections/contact/Contact.tsx';

function App() {

  return (
    <>
      <Name />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}

export default App
