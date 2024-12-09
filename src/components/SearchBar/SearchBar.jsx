import { CgSearch } from 'react-icons/cg';

import s from './SearchBar.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const SearchBar = ({ onSearch }) => {

const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();

      if (query === '') {
        setError('');
        setTimeout(() => setError('Search query cannot be empty!'), 0);
      } else {
        setError('');
        onSearch(query);
      }

    e.target.reset();
  }

  return (
    <header className={clsx('container', s.containerSearch)}>
      {error && <ErrorMessage error={error} />}
      <form className={s.formSearch} onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Enter movie name here..."
          className={s.inputSearch}
        />
        <button className={s.btnSearch} type="submit">
          <CgSearch size="24px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
