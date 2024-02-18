import styles from "./single-post.module.css";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../../api/postmovie";
import { NavLink, useParams, useNavigate, useLocation } from "react-router-dom";
import Cast from "../../pages/Cast/Cast";
import Reviews from "../../pages/Reviews/Reviews";

const SingleMovies = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const location = useLocation();
  const from = location.state.from || "/home";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieDetails(movieId);

        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  const handleCastClick = () => {
    setShowCast(true);
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowReviews(true);
    setShowCast(false);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {movies && (
        <>
          <div className={styles.divblock}>
            <div>
              <button
                onClick={() => navigate(from)}
                className={styles.buttonback}
              >
                Go back
              </button>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                alt={movies.title}
              />
            </div>
            <div className={styles.textLeft}>
              <h1 className={styles.singlepost}>{movies.title}</h1>
              <p>User Score: {Math.floor(movies.popularity)}%</p>

              <h3>Overview</h3>
              <p>{movies.overview}</p>
              <h4>Genres</h4>
              <ul>
                {movies.genres.map((genres) => (
                  <li className={styles.genres} key={genres.id}>
                    {genres.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.textLeft}>
            <hr />
            <h2> Information</h2>
            <ul>
              <li>
                <NavLink to="cast" state={{ from }} onClick={handleCastClick}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="reviews"
                  state={{ from }}
                  onClick={handleReviewsClick}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <hr />
          </div>

          {showCast && <Cast />}

          {showReviews && <Reviews />}
          {/* <Outlet /> */}
        </>
      )}
    </div>
  );
};

export default SingleMovies;
