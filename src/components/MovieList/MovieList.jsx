import MovieCard from '../MovieCard/MovieCard';

import clsx from 'clsx';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={clsx(s.list, 'container')}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
