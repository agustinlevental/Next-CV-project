"use client";
import React, { useState } from 'react';
import styles from './About/About.module.css';
import { Button } from '../ui/button';
import AboutMeDescription from './AboutMeDescription';
import Experience from './Experience';

export default function About() {
  const [showExperience, setShowExperience] = useState(false);

  const handleShowExperienceClick = () => {
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
}
