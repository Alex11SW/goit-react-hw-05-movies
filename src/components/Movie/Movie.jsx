import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../api/postmovie.js";
import Button from "../Button/Button.jsx";
import MovieList from "../MovieList/MovieLest.jsx";

const Movie = () => {
  // const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await searchMovies(search, currentPage);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchMovies();
    } else {
      setMovies([]);
    }
  }, [search, currentPage]);

  const handleSearch = (searchQuery) => {
    setSearchParams({ search: searchQuery });
    // setSearch(searchQuery);
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const isMovies = Boolean(movies.length);
  const shouldRenderLoadMore = isMovies && !loading && !error;

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search movies..."
        />
        <Button type="submit">Search</Button>
      </form>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {isMovies && <MovieList movies={movies} />}
      {shouldRenderLoadMore && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </>
  );
};

export default Movie;
