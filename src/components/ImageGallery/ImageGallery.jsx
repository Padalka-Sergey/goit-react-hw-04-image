import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { TitleVisoutImg } from 'components/App/App.styled';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export function ImageGallery({ textForm }) {
  const [dataQty, setDataQty] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);

  // const isLoadingMore = useRef(true);
  // console.log(isLoadingMore.current);
  // let isLoading = true;

  const onClickBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  // =================================================
  console.log(dataQty);

  // if (page * 12 - 12 >= dataQty) {
  //   console.log(page * 12 - 12 >= dataQty);

  //   isLoading = false;
  // }
  // if (isLoadingMore.current) {
  //   isLoadingMore.current = false;
  // }

  // console.log(isLoading);

  const value = page * 12 >= dataQty;
  console.log('Буль если на странице больше', value);
  console.log(page * 12);
  console.log('страница', page);
  // ======================================================

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
      {dataQty === 0 && (
        <TitleVisoutImg>Картинки с именем {textForm} нет :(</TitleVisoutImg>
      )}
      {!value && dataQty > 0 && status !== 'pending' && (
        <Button onClickBtn={onClickBtn} />
      )}
    </>
  );
}

ImageGallery.propTypes = {
  textForm: PropTypes.string.isRequired,
};
