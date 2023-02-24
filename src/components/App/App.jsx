import { useState, useEffect } from 'react';
import { AppContainer } from './App.styled';
import { TitleVisoutImg } from './App.styled';
import { SearchbarForm } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { AddModal } from 'components/Modal/Modal';
import fetchAPI from 'services/fetch-api';

export function App() {
  const [textForm, setTextForm] = useState('');
  const [dataQty, setDataQty] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idImg, setIdImg] = useState(null);

  const value = page * 12 >= dataQty;

  // =============================================
  // useEffect

  useEffect(() => {
    if (!textForm) {
      return;
    }
    setStatus('pending');

    fetchAPI
      .fetchApi(textForm, page)
      .then(responseDataFetch => {
        setResponseData(prevItems => [
          ...prevItems,
          ...onResponseDataFetch(responseDataFetch),
        ]);

        setDataQty(responseDataFetch.total);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [page, textForm]);

  const onResponseDataFetch = responseDataFetch => {
    return responseDataFetch.hits.map(
      ({ id, webformatURL, tags, largeImageURL }) => {
        return { id, webformatURL, tags, largeImageURL };
      }
    );
  };

  // Загрузить еще
  const onClickBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  //  Modalka

  const closeModal = evt => {
    const { tagName } = evt.target;
    if (tagName === 'IMG') {
      return;
    }
    setIsModalOpen(false);
  };

  const openModal = evt => {
    const { tagName } = evt.target;
    const evtTarget = Number(evt.target.getAttribute('id'));

    if (tagName !== 'IMG') {
      return;
    }
    setIsModalOpen(true);
    setIdImg(evtTarget);
  };

  return (
    <AppContainer>
      <SearchbarForm
        setTextForm={setTextForm}
        setDataQty={setDataQty}
        setPage={setPage}
        setResponseData={setResponseData}
      />
      {textForm && dataQty !== 0 && (
        // status === 'resolved' && ---- перерендериваются все картинки!!!!!!
        <ImageGallery responseData={responseData} openModal={openModal} />
      )}
      {status === 'pending' && <Loader />}
      {!value && dataQty > 0 && status === 'resolved' && (
        <Button onClickBtn={onClickBtn} />
      )}

      {status === 'resolved' &&
        responseData.map(
          ({ id, tags, largeImageURL }) =>
            isModalOpen &&
            id === idImg && (
              <AddModal
                key={id}
                id={id}
                tags={tags}
                largeImageURL={largeImageURL}
                onClose={closeModal}
                setIsModalOpen={setIsModalOpen}
              />
            )
        )}

      {dataQty === 0 && (
        <TitleVisoutImg>Картинки с именем {textForm} нет :(</TitleVisoutImg>
      )}
      {status === 'rejected' && <h1>{error.message}</h1>}
    </AppContainer>
  );
}
