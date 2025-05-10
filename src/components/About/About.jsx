import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              
              <p>
                I’m Ritika Sharma, a Frontend Developer skilled in JavaScript, React.js, and Node.js. I’ve built projects like Video Pi and an IMDB Clone, reflecting my passion for clean, responsive, and user-focused design.

I hold a B.Tech in Computer Science with a CGPA of 8.41 and have deepened my core CS concepts through GATE preparation. I'm also proficient in C++, OOP, and Data Structures, and have participated in hackathons like ACM W Hack 2022.
<br/>
Beyond tech, I enjoy travelling, exploring nature, playing badminton, and helping needy ones.
<br/>
<br />

With strong communication skills, a team-oriented mindset, and a drive to keep learning. I aim to build impactful digital experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
             

             
              <h3> Fast Learner</h3>
              
            </div>
          </li>
          
          <li className={styles.aboutItem}>
           
            <div className={styles.aboutItemText}>
              <h3>TeamWork</h3>
              
            </div>
            
          </li>

          <li className={styles.aboutItem}>
           
            <div className={styles.aboutItemText}>
              <h3>Creative</h3>
               
            </div>
            
          </li>
        </ul>
      </div>
    </section>
  );
};
