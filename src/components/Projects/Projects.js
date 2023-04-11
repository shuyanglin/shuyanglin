import React from 'react';
import styles from './Projects.module.css';


function Projects() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/whale.png" />
        <h1>Projects</h1>
        <div className={styles.project}></div>
      </header>

      
    </div>
  );
}

export default Projects;
