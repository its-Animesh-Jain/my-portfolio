import React from 'react';

const projectData = [
  {
    title: "Object Detection System",
    tech: ["Python", "Computer Vision"],
    description: "A system built using Python to detect objects in real-time.",
    link: "#" // Link to your GitHub repo
  },
  {
    title: "App Development Journey",
    tech: ["Flutter", "Dart"],
    description: "Currently exploring mobile app development and cross-platform solutions.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="grid">
        {projectData.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.tech.join(', ')}</p>
            <p>{project.description}</p>
            <a href={project.link}>View Code</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;