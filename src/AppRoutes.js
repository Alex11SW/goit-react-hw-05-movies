import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MainMenu = lazy(() => import("./components/MainManu/MainMenu"));
const SingleMovies = lazy(() =>
  import("./components/SingleMovies/SingleMovies")
);
const Cast = lazy(() => import("./pages/Cast/Cast"));
const Reviews = lazy(() => import("./pages/Reviews/Reviews"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <MainMenu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId/*" element={<SingleMovies />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
