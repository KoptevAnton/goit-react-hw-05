import { useEffect, useState } from 'react';
import { searchMovies } from '../../api';
import { useSearchParams } from 'react-router-dom';

import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SearchBar from '../../components/SearchBar/SearchBar';

const MoviesPage = () => {
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';
  const page = params.get('page') ? Number(params.get('page')) : 1;

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        setError('');
        const { results } = await searchMovies(query, page);
        if (results.length === 0) {
          setError('There are no movies matching your query');
        }
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  function handleSubmit(searchString) {
    setParams({ query: searchString, page: 1 });
    setMovies([]);
  }
  return (
    <div>
      <SearchBar onSearch={handleSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {movies.length > 0 && !isLoading && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
