"use client";
import React, { useState } from 'react';
import styles from './About/About.module.css';
import { Button } from '../ui/button/button';
import AboutMeDescription from './About/AboutMeDescription';
import Experience from './About/Experience';

const About: React.FC = () => {
  const [showExperience, setShowExperience] = useState<boolean>(false);

  const handleShowExperienceClick = (): void => {
    setShowExperience(!showExperience);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Sobre mí
      </h1>
      <br></br>
      <AboutMeDescription />
      <Button className={styles.button} onClick={handleShowExperienceClick}>
        {!showExperience ? "Conocer mis experiencias" : "Ocultar Experiencias"}
      </Button>
      {showExperience && <div className={styles.experience}><Experience /></div>}
    </div>
  );
};

export default About;
