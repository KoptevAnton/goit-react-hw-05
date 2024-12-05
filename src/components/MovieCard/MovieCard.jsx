// import s from "./MovieCard.module.css";

import { format } from 'date-fns';
import { Link, useLocation } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const releaseDate = movie.release_date
    ? format(new Date(movie.release_date), '(yyyy)')
    : '';
  
  return (
    <Link to={`/movies/${movie.id}`} state={location}>
      {movie.poster_path ? (
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
      ) : (
        <div>
          <span>Poster not found</span>
        </div>
      )}
      <div>
        {movie.title}
        {releaseDate}
      </div>
    </Link>
  );
};

export default MovieCard;
