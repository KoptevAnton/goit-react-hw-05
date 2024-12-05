import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api';
import { useEffect, useState } from 'react';
// import s from './MovieReviews.module.css'

const MovieReviews = () => {
  const { movieId } = useParams();
  console.log(getMovieReviews(movieId));
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
    <div>
      {error && <ErrorMessage error={error} />}
      {isLoading && <Loader />}
      {reviews.length > 0 && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h4>Author: {review.author_details.rating}</h4>
              <p>Added: {review.created_at}</p>
              <p>Author: {review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
