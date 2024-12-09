import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

import s from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const releaseDate = movie.release_date ? format(new Date(movie.release_date), '(yyyy)') : '';

  return (
    <Link to={`/movies/${movie.id}`} state={location} className={s.link}>
      <div className={s.containerPoster}>
        {movie.poster_path ? (
          <img
            className={s.poster}
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className={s.noPoster}>
            <span className={s.noPosterText}>Poster not found</span>
          </div>
        )}
      </div>
      <div className={s.containerText}>
        {movie.title}
        {releaseDate}
      </div>
    </Link>
  );
};

export default MovieCard;
