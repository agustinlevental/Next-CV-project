"use client";

import React, { useState } from 'react';
import { validateName, validateEmail } from '@/app/lib/utils';
import styles from './ContactForm.module.css';
import { Button } from '@/app/ui/button';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'name') {
      setErrors({
        ...errors,
        name: validateName(value) ? '' : 'Coloque un nombre con caracteres válidos',
      });
    }

    if (name === 'email') {
      setErrors({
        ...errors,
        email: validateEmail(value) ? '' : 'Coloque un email válido',
      });
    }

    if (name === 'message') {
      setErrors({
        ...errors,
        message: value.trim() === '' ? 'El mensaje no puede estar vacío' : '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid = validateName(formData.name);
    const isEmailValid = validateEmail(formData.email);
    const isMessageValid = formData.message.trim() !== '';

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      setErrors({
        name: isNameValid ? '' : 'Coloque un nombre con caracteres válidos',
        email: isEmailValid ? '' : 'Coloque un email válido',
        message: isMessageValid ? '' : 'El mensaje no puede estar vacío',
      });
    } else {
      // Handle successful form submission
      alert('Formulario enviado con éxito');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label>
          Nombre y Apellido:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>
      <div className={styles.field}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>
      <div className={styles.field}>
        <label>
          Mensaje:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        {errors.message && <p className={styles.error}>{errors.message}</p>}
      </div>
      <Button type="submit" className={styles.button}>
        Enviar
      </Button>
    </form>
  );
}
