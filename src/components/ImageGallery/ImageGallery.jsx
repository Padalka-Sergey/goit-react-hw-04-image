import PropTypes from 'prop-types';
// import { useState } from 'react';
import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { TitleVisoutImg } from 'components/App/App.styled';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export function ImageGallery({
  textForm,
  dataQty,
  setDataQty,
  status,
  setStatus,
  page,
  setPage,
}) {
  // const [dataQty, setDataQty] = useState(null);
  // const [status, setStatus] = useState('idle');
  // const [page, setPage] = useState(1);

  const value = page * 12 >= dataQty;

  const onClickBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {textForm && (
        <ImageList>
          <ImageGalleryItem
            onFetchTotal={setDataQty}
            textForm={textForm}
            statusFunc={setStatus}
            status={status}
            page={page}
            setPage={setPage}
          />
        </ImageList>
      )}
      {status === 'pending' && <Loader />}
      {!value && dataQty > 0 && status === 'resolved' && (
        <Button onClickBtn={onClickBtn} />
      )}
      {dataQty === 0 && (
        <TitleVisoutImg>Картинки с именем {textForm} нет :(</TitleVisoutImg>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  textForm: PropTypes.string.isRequired,
};
