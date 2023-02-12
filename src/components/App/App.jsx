import { useState } from 'react';
import { AppContainer } from './App.styled';
import { TitleVisoutImg } from './App.styled';
import { SearchbarForm } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export function App() {
  const [textForm, setTextForm] = useState('');
  const [dataQty, setDataQty] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [textFormLetter, setTextFormLetter] = useState('');

  const value = page * 12 >= dataQty;

  // Загрузить еще
  const onClickBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  // Searchbar
  const handleTextFormChange = event => {
    const evtValue = event.currentTarget.value.toLowerCase();
    setTextFormLetter(evtValue);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (textFormLetter.trim() === '') {
      alert('Введите текст');
      return;
    }

    setTextForm(textFormLetter);
    setDataQty(null);
  };

  return (
    <AppContainer>
      <SearchbarForm
        textFormLetter={textFormLetter}
        setTextFormLetter={setTextFormLetter}
        handleTextFormChange={handleTextFormChange}
        handleSubmit={handleSubmit}
      />

      {textForm && dataQty !== 0 && (
        <ImageGallery
          textForm={textForm}
          setDataQty={setDataQty}
          status={status}
          statusFunc={setStatus}
          page={page}
          setPage={setPage}
        />
      )}
      {status === 'pending' && <Loader />}
      {!value && dataQty > 0 && status === 'resolved' && (
        <Button onClickBtn={onClickBtn} />
      )}
      {dataQty === 0 && (
        <TitleVisoutImg>Картинки с именем {textForm} нет :(</TitleVisoutImg>
      )}
    </AppContainer>
  );
}
