import React from 'react';
import Info from './components/Info';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';
import Contact from './components/Contact';

const Portfolio = () => {
    return (
        <div className='mainContent'>
            <h1>Greetings!</h1>
            <p>The name's Onni and this is my portfolio! </p>
            <Info/>
            <Experience/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Portfolio;