// import s from './MovieCast.module.css'

import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../api';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useEffect, useState } from 'react';
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
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {casts.length > 0 && (
        <ul>
          {casts.map((cast) => (
            <li key={cast.id}>
              {cast.profile_path ? (
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                    alt={cast.name}
                  />
                </div>
              ) : (
                <div>
                  <span>No photo</span>
                </div>
              )}
              <div>
                <h3>{cast.name}</h3>
                <p>Character: {cast.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
