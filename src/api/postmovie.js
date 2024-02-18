import axios from "axios";

const API_KEY = "7fa1de4f202d6fd853924ceed0b441bf";
const BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export const getTrendingMovies = () => {
  return instance.get("/trending/movie/day");
};

export const searchMovies = (query, page = 1) => {
  return instance.get("/search/movie", {
    params: { query, page },
  });
};

export const getMovieDetails = (movieId) => {
  return instance.get(`/movie/${movieId}`);
};
export const getMovieCredits = (movieId) => {
  return instance.get(`/movie/${movieId}/credits`);
};
export const getMovieReviews = (movieId) => {
  return instance.get(`/movie/${movieId}/reviews`);
};
