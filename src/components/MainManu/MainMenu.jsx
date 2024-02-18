import { NavLink } from "react-router-dom";
import styles from "./main-menu.module.css";

const MainMenu = () => {
  return (
    <>
      <ul className={styles.menu}>
        <li>
          <NavLink className={styles.link} to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
      <hr className={styles.hr} />
    </>
  );
};

export default MainMenu;
