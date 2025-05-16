import React from 'react'
import './Experience.css'
import { experiences } from './data'


const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h2>{exp.client}</h2>
          <p className="period">{exp.period}</p>
          <h3>{exp.project}</h3>
          <p className="summary">{exp.summary}</p>
          <ul>
            {exp.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Experience