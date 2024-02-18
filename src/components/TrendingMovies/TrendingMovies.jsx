import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../../api/postmovie";
import styles from "./trending-movies.module.css";
import { Link, useLocation } from "react-router-dom";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1 className={styles.textLeft}>Trending Today</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {trendingMovies.map((movie) => (
          <li className={styles.textLeft} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovies;
