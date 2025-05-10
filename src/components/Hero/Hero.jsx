import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}
        style={{marginTop:'20px'}}>Hi, I'm Ritika Sharma</h1>
        <p className={styles.description}>A Passionate Web Developer and Software Developer.
     
        </p>
        <a href="/public/Resume Ritika Sharma.pdf" 
        download 
        className={styles.contactBtn} >
          Download CV 
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
