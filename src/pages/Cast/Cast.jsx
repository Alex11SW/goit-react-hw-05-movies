import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api/postmovie";
import styles from "./cast.module.css";

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieCredits(movieId);

        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      <div>
        <h2>Cast</h2>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {cast && (
          <ul>
            {cast.map((actor) => (
              <li className={styles.textLeft} key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                />
                <p>{actor.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Cast;
