"use client";

import React, { useState, ChangeEvent } from 'react';
import { useLikes, Interest } from '@/app/context/LikesContext';
import styles from './Interests.module.css';
import { Button } from '@/app/ui/button/button';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import ConfirmationModal from '@/app/ui/confirmationModal/ConfirmationModal';

const Intereses: React.FC = () => {
  const { interests, addInterest, modifyInterest, deleteInterest } = useLikes();
  const [newInterest, setNewInterest] = useState<string>("");
  const [editingInterest, setEditingInterest] = useState<Interest | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);

  const handleAddInterest = () => {
    if (newInterest.trim() !== "") {
      addInterest({ name: newInterest });
      setNewInterest("");
    }
  };

  const handleModifyInterest = () => {
    if (editingInterest && newInterest.trim() !== "") {
      modifyInterest({ ...editingInterest, name: newInterest });
      setNewInterest("");
      setEditingInterest(null);
    }
  };

  const handleDeleteInterest = (id: number) => {
    deleteInterest(id);
    setIsModalOpen(false);
  };

  const handleEditClick = (interest: Interest) => {
    setEditingInterest(interest);
    setNewInterest(interest.name);
  };

  const handleDeleteClick = (interest: Interest) => {
    setSelectedInterest(interest);
    setIsModalOpen(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewInterest(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Intereses</h1>
      <ul className={styles.list}>
        {interests.map((interest) => (
          <li key={interest.id} className={styles.listItem}>
            <div className={styles.textContainer}>{interest.name}</div>
            <div className={styles.buttonContainer}>
              <Button onClick={() => handleEditClick(interest)} className={styles.button}>
                <PencilIcon className={styles.icon} />
              </Button>
              <Button onClick={() => handleDeleteClick(interest)} style={{ backgroundColor: "#B22222" }} className={styles.button}>
                <TrashIcon className={styles.icon} />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newInterest}
        onChange={handleChange}
        className={styles.input}
      />
      {editingInterest ? (
        <Button onClick={handleModifyInterest} className={`${styles.button} ${styles.suggestButton}`}>Modificar sugerencia</Button>
      ) : (
        <Button onClick={handleAddInterest} className={`${styles.button} ${styles.suggestButton}`}>Sugerir</Button>
      )}

      {selectedInterest && (
        <ConfirmationModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onConfirm={() => handleDeleteInterest(selectedInterest.id)}
          message={`¿Estás seguro de que deseas eliminar "${selectedInterest.name}"?`}
        />
      )}
    </div>
  );
};

export default Intereses;
