import React from 'react';
import { Modal, Box } from '@mui/material';
import { Button } from '../button/button';
import styles from './ConfirmationModal.module.css';

interface ConfirmationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
  message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onRequestClose,
  onConfirm,
  message
}) => {
  return (
    <Modal open={isOpen} onClose={onRequestClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box className={styles.modal}>
        <h2 className={styles.title}>
          Confirmación
          </h2>
        <p className={styles.content}>
          {message}
        </p>
        <Box className={styles.buttons}>
          <Button style={{backgroundColor: "#B22222"}} onClick={onConfirm}>Sí</Button>
          <Button onClick={onRequestClose}>No</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
