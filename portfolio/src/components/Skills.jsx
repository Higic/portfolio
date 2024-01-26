import React from "react";

const Skills = () => {
    return (
        <div>
            <h2>Skills</h2>
            <p>Here are some of the skills I have acquired so far in order of comfortability. Skills marked as <b>bold</b> are ones I am really comfortable with.</p>
            <div className="skills-container">

                <div className="skills-list">
                    <h3>Spoken languages:</h3>
                    <ul>
                        <li>Finnish - Native</li>
                        <li>English - Excellent</li>
                        <li>Swedish - Basics</li>
                        <li>German - Basics</li>
                    </ul>
                </div>

                <div className="skills-list">
                    <h3>Programming languages:</h3>
                    <ul>
                        <li><b>HTML</b></li>
                        <li><b>Java</b></li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>C</li>
                        <li>C#</li>
                        <li>Rust</li>
                    </ul>
                </div>

                <div className="skills-list">
                    <h3>Frameworks and libraries:</h3>
                    <ul>
                        <li><b>React</b></li>
                        <li><b>Firebase</b></li>
                        <li>NodeJS</li>
                        <li>Playwright</li>
                    </ul>
                </div>

                <div className="skills-list">
                    <h3>Tools:</h3>
                    <ul>
                        <li><b>GitHub</b></li>
                        <li><b>VSCode</b></li>
                        <li>Github Copilot</li>
                        <li>Davinci Resolve</li>
                        <li>PuTTY</li>
                        <li>Office 365</li>
                        <li>Ableton Live 11</li>
                    </ul>
                </div>

                <div className="skills-list">
                    <h3>Proficiencies:</h3>
                    <ul>
                        <li>Backend</li>
                        <li>Frontend</li>
                        <li>Testing</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;