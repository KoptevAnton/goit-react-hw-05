import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../api';
import { useParams } from 'react-router-dom';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

import s from './MovieReviews.module.css';
import clsx from 'clsx';

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError('');
        const data = await getMovieReviews(movieId);
        data.length === 0 && setError('There are no reviews for this movie');
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <div className={clsx('container', s.container)}>
      {error && <ErrorMessage error={error} />}
      {isLoading && <Loader />}
      {reviews.length > 0 && (
        <ul className={s.list}>
          {reviews.map((review) => (
            <li className={s.item} key={review.id}>
              <h4>Author: {review.author_details.rating}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
