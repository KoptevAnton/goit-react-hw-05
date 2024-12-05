import { format } from 'date-fns';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const releaseDate = movie.release_date ? format(new Date(movie.release_date), '(yyyy)') : '';

  return (
    <div className={s.card}>
      <Link to={`/movies/${movie.id}`} state={location} className={s.link}>
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
        <div className={s.title}>
          {movie.title}
          {releaseDate}
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
