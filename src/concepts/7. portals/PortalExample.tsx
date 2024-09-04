import React, { useState } from 'react';
import Modal from './Modal';
import { Button } from '@/components/ui/button';

const PortalExample: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div id="app-root" className='bg-slate-300/80 p-8 border rounded-md space-y-4'>
      <h1>Portal Example with TypeScript</h1>
      <Button onClick={openModal}>Open Modal</Button>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>This is a Modal</h2>
          <p>Rendered inside a custom DOM element with ID "modal-root"!</p>
        </Modal>
      )}
    </div>
  );
};

export default PortalExample;
