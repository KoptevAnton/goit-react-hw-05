// import s from "./SearchBar.module.css";

import toast, { Toaster } from 'react-hot-toast';
import { CgSearch } from 'react-icons/cg';

const SearchBar = ({ onSearch }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
      query === ''
          ? toast.error('Search query cannot be empty!')
          : onSearch(query);
    e.target.reset();
  }

  return (
    <header>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoFocus
          autoComplete="off"
          placeholder="Enter movie name here..."
        />
        <button type="submit">
          <CgSearch size="18px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
