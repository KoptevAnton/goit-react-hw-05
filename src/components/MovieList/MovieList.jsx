// import s from './MovieList.module.css'

import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList