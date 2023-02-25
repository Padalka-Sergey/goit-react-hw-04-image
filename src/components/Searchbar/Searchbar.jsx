import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Btn, Input, Searhbar, BtnSpan } from './Searchbar.styled';

export function SearchbarForm({ onSubmitApp }) {
  const [textFormLetter, setTextFormLetter] = useState('');

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
    onSubmitApp(textFormLetter);
  };

  return (
    <Searhbar>
      <Form onSubmit={handleSubmit}>
        <Btn type="submit">
          <BtnSpan>Search</BtnSpan>
        </Btn>
        <Input
          type="text"
          name="textForm"
          value={textFormLetter}
          onChange={handleTextFormChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Searhbar>
  );
}

SearchbarForm.propTypes = {
  onSubmitApp: PropTypes.func.isRequired,
};
