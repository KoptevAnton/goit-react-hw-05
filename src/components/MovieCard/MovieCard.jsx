// import s from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  return (
    <div>
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
    </div>
  );
};

export default MovieCard;
