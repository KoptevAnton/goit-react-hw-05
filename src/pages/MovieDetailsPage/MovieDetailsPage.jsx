import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

import { getMovieDetails } from '../../api';

import s from './MovieDetailsPage.module.css';
import clsx from 'clsx';

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

  const releaseDate = movie.release_date ? format(new Date(movie.release_date), '(yyyy)') : '';

  function navigateAddInfoLink({ isActive }) {
    return clsx(s.additionalNavLink, isActive && s.active);
  }

  return (
    <>
      <div className={clsx('container', s.movieContainer)}>
        <Link to={backLink.current} className={s.goBackLink}>
          &lt;&lt;&lt; Go back
        </Link>
        {isLoading && <Loader />}
        {error && <ErrorMessage error={error} />}
        <div className={s.movieInfo}>
          <div className={s.posterContainer}>
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
          <div className={s.movieContainerDetails}>
            <div>
              <h2 className={s.movieTitle}>
                {movie.title}
                {releaseDate}
              </h2>
              <p className={s.userRating}>Rating: {movie.vote_average} </p>
            </div>
            <div>
              <h3 className={s.subtitle}>Genres</h3>
              <ul className={s.genresList}>
                {movie.genres?.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={s.subtitle}>Overview</h3>
              <p className={s.movieOverview}>{movie.overview} </p>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx('container', s.additionalInfo)}>
        <h2 className={s.addInfoTitle}>Additional information</h2>
        <ul className={s.listAddInfo}>
          <li>
            <NavLink to="cast" className={navigateAddInfoLink}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={navigateAddInfoLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
