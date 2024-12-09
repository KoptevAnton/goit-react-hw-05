import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api';

import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieList from '../../components/MovieList/MovieList';

import s from './HomePage.module.css';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError('');
        const data = await getTrendingMovies();
        setTrendMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1 className={s.title}>Trending today</h1>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {trendMovies.length > 0 && <MovieList movies={trendMovies} />}
    </div>
  );
};

export default HomePage;
