import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <p className={styles.description}>
  I specialize in <span style={{ fontWeight: 'bold', color: 'white' }}>React and Modern JavaScript</span>, leveraging best practices to create scalable and maintainable projects. <br />
  My experience spans working on diverse projects, from small business websites to <span style={{ fontWeight: 'bold', color: 'white' }}>complex Front-end Systems</span>, always aiming for clean code.
</p>

      <p className={styles.description}> I have worked on  different Web Development Projects.</p>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
