import { Button, IconButton, Modal, Tooltip } from '@mui/material';
import dynamic from 'next/dynamic';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import styles from './header.module.css';

const PDFViewer = dynamic(() => import('../pdfViewer'), {
  ssr: false,
});

function CTA() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={styles.cta}>
      <Modal
        open={showModal}
        onClose={toggleModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className={styles.modalDiv}>
          <PDFViewer />
          <Tooltip
            title='Close PDF'
            color='primary'
            style={{
              height: '50px',
            }}
          >
            <IconButton onClick={toggleModal}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Modal>
      <Button
        variant='outlined'
        href={`mailto:test@example.com`}
      >
        Let&apos;s Talk!
      </Button>
      <Button
        variant='outlined'
        onClick={toggleModal}
      >
        View CV
      </Button>
    </div>
  );
}

export default CTA;
