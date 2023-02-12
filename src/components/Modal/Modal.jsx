import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import { Overlay, Modal } from './Modal.styled';

export function AddModal({ largeImageURL, tags, onClose, id, setIsModalOpen }) {
  const handleKeyDown = useCallback(
    evt => {
      if (evt.code === 'Escape') {
        setIsModalOpen(false);
      }
    },
    [setIsModalOpen]
  );
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

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
