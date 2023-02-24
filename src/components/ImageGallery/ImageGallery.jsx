import PropTypes from 'prop-types';

import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

// export function ImageGallery({ ...otherProps }) {
export function ImageGallery({ responseData, openModal }) {
  return (
    <>
      <ImageList>
        {/* <ImageGalleryItem {...otherProps} /> */}
        {responseData.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            alt={tags}
            src={webformatURL}
            openModal={openModal}
          />
        ))}
      </ImageList>
    </>
  );
}

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  responseData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
