// import s from "./MovieCard.module.css";

import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
        {movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
        ) : (
          <div>
            <span>Poster not found</span>
          </div>
        )}
        <div>
          {movie.title}
          {movie.release_date}
        </div>
    </Link>
  );
};

export default MovieCard;
