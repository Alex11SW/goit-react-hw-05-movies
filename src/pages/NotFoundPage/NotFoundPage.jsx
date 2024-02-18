import { Link } from "react-router-dom";
import styles from "./not-found-page.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={styles.NotFoundpage}>Cannot found this page</h1>
      <Link to="/">Tomain page</Link>
    </div>
  );
};

export default NotFoundPage;
