import PropTypes from 'prop-types';
import { GalleryItem, Img } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ openModal, id, alt, src }) {
  return (
    <GalleryItem>
      <Img id={id} alt={alt} src={src} onClick={openModal} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
