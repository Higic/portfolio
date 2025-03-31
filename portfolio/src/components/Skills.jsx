const Skills = () => {
    return (
        <div>
            <h2>Skills</h2>
            <p>Here are some of the skills I have acquired so far in order of comfortability.</p>
            <p>Skills marked as <b>bold</b> are ones I am really comfortable with or have significant experience in.</p>
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
                        <li><b>Python</b></li>
                        <li><b>HTML</b></li>
                        <li><b>Java</b></li>
                        <li>JavaScript</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>Rust</li>
                        <li>C#</li>
                        <li>TypeScript</li>
                    </ul>
                </div>

                <div className="skills-list">
                    <h3>Databases and libraries</h3>
                    <ul>
                        <li><b>MySQL</b></li>
                        <li><b>React</b></li>
                        <li><b>Firebase</b></li>
                        <li>MongoDB</li>
                        <li>NodeJS</li>
                        <li>Playwright</li>
                        <li>NextJS</li>
                    </ul>
                </div>

                <div className="skills-list">
                    <h3>Tools:</h3>
                    <ul>
                        <li><b>GitHub</b></li>
                        <li><b>VSCode</b></li>
                        <li>Linux</li>
                        <li>Jenkins</li>
                        <li>Office 365</li>
                        <li>Github Copilot</li>
                        <li>Davinci Resolve</li>
                        <li>Ableton</li>
                    </ul>
                </div>

                <div className="skills-list">
                    <h3>Proficiencies:</h3>
                    <ul>
                        <li>Full stack development</li>
                        <li>Test automation</li>
                        <li>Backend</li>
                        <li>Frontend</li>
                        <li>Customer Service</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;