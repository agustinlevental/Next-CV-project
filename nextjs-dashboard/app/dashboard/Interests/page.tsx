"use client";

import React, { useState } from 'react';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import styles from './Interests.module.css';

export default function Intereses() {
  const interests = ["Programación", "Futbol", "Teatro", "Baile"];
  const [liked, setLiked] = useState(Array(interests.length).fill(false));

  const handleLikeClick = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Intereses</h1>
      <ul className={styles.list}>
        {interests.map((interest, index) => (
          <li key={index} className={styles.listItem}>
            {interest}
            <button 
              onClick={() => handleLikeClick(index)} 
              className={styles.button}
            >
              {liked[index] ? (
                <HeartSolid className={`${styles.icon} ${styles.red}`} />
              ) : (
                <HeartOutline className={`${styles.icon} ${styles.black}`} />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
