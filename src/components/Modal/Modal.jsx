import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, Modal } from './Modal.styled';

export function AddModal({ largeImageURL, tags, onClose, id, setIsModalOpen }) {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setIsModalOpen]);

  return (
    <Overlay onClick={onClose}>
      <Modal>
        <img src={largeImageURL} alt={tags} id={id} />
      </Modal>
    </Overlay>
  );
}

AddModal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
