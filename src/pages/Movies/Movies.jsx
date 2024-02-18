import styles from "./movies.module.css";
import Movie from "../../components/Movie/Movie";
const Movies = () => {
  return (
    <div>
      <h1 className={styles.movies}>Trending today</h1>
      <Movie />
    </div>
  );
};

export default Movies;
