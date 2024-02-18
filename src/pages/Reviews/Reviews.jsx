import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/postmovie";
// import SingleMovies from "../../components/SingleMovies/SingleMovies";

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieReviews(movieId);

        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      <div>
        <h2>Reviews</h2>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {reviews && reviews.length === 0 ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          <ul>
            {reviews &&
              reviews.map((review) => (
                <li key={review.id}>
                  <h2>Author: {review.author}</h2>
                  <p>{review.content}</p>
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Reviews;
