import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core & Languages",
      // Extracted from Resume: Python, C++, SQL, JavaScript (ES6+) [cite: 26]
      skills: ["C++ (DSA & OOP)", "Python", "JavaScript (ES6+)", "SQL"] 
    },
    {
      title: "Full Stack Web",
      // Extracted from Resume: React.js, Node.js, Express, MongoDB [cite: 26, 27]
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind/CSS"]
    },
    {
      title: "Tools & Cloud",
      // Extracted from Resume: Git, JWT, Oracle Cloud Cert [cite: 28, 30]
      skills: ["Git & GitHub", "JWT Auth", "MySQL", "Oracle Cloud (Gen AI)", "VS Code"]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2>Technical Arsenal</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;