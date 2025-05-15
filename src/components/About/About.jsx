import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        I'm Shaojun Bao, a passionate full-stack developer with over 5 years of
        experience building user-centric web applications. I specialize in
        creating responsive, scalable, and accessible interfaces using modern
        technologies like React, Node.js, and TypeScript.
      </p>

      <div className="about-details">
        <div>
          <h2>Experience</h2>
          <p>5+ years in full-stack development</p>
        </div>
        <div>
          <h2>Tech Stack</h2>
          <ul className="tech-list">
            <li>
              <strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python,
              SQL
            </li>
            <li>
              <strong>Frontend:</strong> React, Redux, HTML5, CSS3, Tailwind
              CSS, Material UI
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, MongoDB, RESTful
              APIs
            </li>
            <li>
              <strong>Testing:</strong> Jest, React Testing Library, Cypress
            </li>
            <li>
              <strong>DevOps:</strong> AWS (EC2, Lambda), Docker, Git
            </li>
          </ul>
        </div>
        <div>
          <h2>Interests</h2>
          <p>
            UI/UX design, performance optimization, and learning new frameworks
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
