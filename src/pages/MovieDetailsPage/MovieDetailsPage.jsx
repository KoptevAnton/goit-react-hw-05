// import s from './MovieDetailsPage.module.css';

import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api';
import { useEffect, useRef, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = useRef(location.state ?? '/movies');
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError('');
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);
  return (
    <>
      <div>
        <Link to={backLink.current}> &lt;&lt;&lt; Go back</Link>
        {isLoading && <Loader />}
        {error && <ErrorMessage error={error}/>}
        <div>
          {movie.poster_path ? (
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
          ) : (
            <div>
              <span>Poster not found</span>
            </div>
          )}
        </div>
        <div>
          <h2>
            {movie.title}
            {movie.release_date}
          </h2>
          <p>Rating:{movie.vote_average} </p>
          <h3>Overview</h3>
          <p>Overview: {movie.overview} </p>
          <h3>Genres</h3>
          <ul>
            {movie.genres?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
