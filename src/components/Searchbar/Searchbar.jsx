import PropTypes from 'prop-types';
import { Form, Btn, Input, Searhbar, BtnSpan } from './Searchbar.styled';

export function SearchbarForm({
  textFormLetter,
  handleTextFormChange,
  handleSubmit,
}) {
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
  handleTextFormChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  textFormLetter: PropTypes.string.isRequired,
};
