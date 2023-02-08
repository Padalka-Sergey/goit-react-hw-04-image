import { useState } from 'react';
import { AppContainer } from './App.styled';
import { SearchbarForm } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export function App() {
  const [textForm, setTextForm] = useState('');
  const [dataQty, setDataQty] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [textFormLetter, setTextFormLetter] = useState('');

  return (
    <AppContainer>
      <SearchbarForm
        onSubmitProps={setTextForm}
        textFormLetter={textFormLetter}
        setTextFormLetter={setTextFormLetter}
      />
      {/* <SearchbarForm onSubmitProps={text => setTextForm(text)} /> */}
      <ImageGallery
        textForm={textForm}
        dataQty={dataQty}
        setDataQty={setDataQty}
        status={status}
        setStatus={setStatus}
        page={page}
        setPage={setPage}
      />
    </AppContainer>
  );
}
