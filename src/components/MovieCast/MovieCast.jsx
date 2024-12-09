import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../api';
import { useParams } from 'react-router-dom';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

import clsx from 'clsx';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  console.log(getMovieCredits(movieId));

  useEffect(() => {
    async function getCasts() {
      try {
        setIsLoading(true);
        setError('');
        const data = await getMovieCredits(movieId);
        data.length === 0 && setError('there is no information about these actors');
        setCasts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCasts();
  }, [movieId]);

  return (
    <div className={clsx('container', s.container)}>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {casts.length > 0 && (
        <ul className={s.list}>
          {casts.map((cast) => (
            <li className={s.item} key={cast.id}>
              {cast.profile_path ? (
                <div className={s.containerPoster}>
                  <img
                    className={s.poster}
                    src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                    alt={cast.name}
                  />
                </div>
              ) : (
                <div className={s.noPoster}>
                  <span className={s.noPosterText}>No photo</span>
                </div>
              )}
              <div className={s.containerCastText}>
                <h3 className={s.name}>{cast.name}</h3>
                <p className={s.character}>Character: {cast.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
