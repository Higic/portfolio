import React from "react";
import Ast3Drois from "../img/Ast3Drois.jpg"
import NutritionTracker from "../img/NutritionTracker.png"
import Giphygle from "../img/Giphygle.png"
import Whisperfeed from "../img/Whisperfeed.jpg"
import JFXSim from "../img/JFX sim.png"
import Mokille from "../img/Mokille.jpg"

const Projects = () => {
    return (
        <div>
            <p>
            </p>
            <h2>Completed Projects</h2>
            <p>Here are some of the projects I have completed so far. The projects are listed in chronological order.</p>
            <div className="projectList">
                <div className="project">
                    <h3><a href="https://github.com/Vandarks/WhisperFeed" target="_blank" rel="noreferrer">WhisperFeed</a></h3>
                    <p>WhisperFeed is the latest project made in my second year of school. It is a web-based feedback system for both teachers and students. Made as a course project in a group of 4.</p>
                    <p className="projectTechnologies"><b>Used technologies:</b> React, Node, Firebase, Git</p>
                    <div className="projectImage">
                        <img src={Whisperfeed} alt="WhisperFeed homescreen" />
                    </div>
                </div>
                <div className="project">
                    <h3><a href="https://github.com/Higic/Giphygle" target="_blank" rel="noreferrer">Giphygle</a></h3>
                    <p>Giphygle is a web-based GIF search engine. Made as a second year class project in a group of 4.</p>
                    <p className="projectTechnologies"><b>Used technologies:</b> React, Node, Firebase, Git</p>
                    <div className="projectImage">
                        <img src={Giphygle} alt="Giphygle homescreen" />
                    </div>
                </div>
                <div className="project">
                    <h3><a href="#">Java FX Sorting simulator</a></h3>
                    <p>A GUI meant to simulate the sorting of delivery parcels. This project was a school course for testing the JavaFX platform for creating a GUI. This was done in a group of 3 usgin Subversion instead of Git.</p>
                    <p className="projectTechnologies"><b>Used technologies:</b> Eclipse IDE, Java, JavaFX, MariaDB, SVN</p>
                    <div className="projectImage">
                        <img src={JFXSim} alt="JavaFx homescreen" />
                    </div>
                </div>
                <div className="project">
                    <h3><a href="https://github.com/Higic/Ravintoarvosovellus" target="_blank" rel="noreferrer">Nutrition Tracker</a></h3>
                    <p>Nutrition Tracker is an Android app used to track differrent nutritions on your diet. Made as a class project in a group of 3.</p>
                    <p className="projectTechnologies"><b>Used technologies:</b> Android Studio, Java, SQLite, Git</p>
                    <div className="projectImage">
                        <img src={NutritionTracker} alt="NutritionTracker homescreen" />
                    </div>
                </div>
                <div className="project">
                    <h3><a href="https://github.com/Higic/Summer-cottage">Mökille.fi</a></h3>
                    <p>Mökille.fi was an all-in-one summer cottage assistant website. This one taught us the basics of HTML. Made as a class project in a group of 4.</p>
                    <p className="projectTechnologies"><b>Used technologies:</b> HTML, JavaScript, MariaDB, Git</p>
                    <div className="projectImage">
                        <img src={Mokille} alt="Mökille homepage" />
                    </div>
                </div>
                <div className="project">
                    <h3><a href="https://youtu.be/B1MGsIF8cdA?si=YpuuJNFSW-0zrXuf" target="_blank" rel="noreferrer">Ast3Droids</a></h3>
                    <p>As3Drois was a 3D adaptation of the classic Asteroids arcade game. Unfortunately this project is now lost to time. This was the first school project and was done in a group of 3.</p>
                    <p className="projectTechnologies"><b>Used technologies:</b> Unity, C#, Git</p>
                    <div className="projectImage">
                        <img src={Ast3Drois} alt="Ast3Droids gameplay"/>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Projects;