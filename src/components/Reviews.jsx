import { getMovieReviews } from 'MoviDbAPI/MovieDbApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    getMovieReviews(id).then(setReviews);
  }, [id]);
  return (
    <div>
      {reviews &&
        (reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        ))}
    </div>
  );
};
