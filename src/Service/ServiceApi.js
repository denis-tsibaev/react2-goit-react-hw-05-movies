import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '5a0ea8669d169b89996fed3dc54f9383';

export const getTrendingMovies = page =>
    axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`);

export const getMovieBySearch = (searchQuery, page) =>
    axios.get(
        `${BASE_URL}search/movie?api_key=${API_KEY}&page=${page}&query=${searchQuery}`,
    );

export const getMovieDetails = movieId =>
    axios.get(`${BASE_URL}search/movie/${movieId}?api_key=${API_KEY}`);

export const getCast = movieId =>
    axios.get(`${BASE_URL}search/movie/${movieId}/credits?api_key=${API_KEY}`);

export const getReviews = movieId =>
    axios.get(
        `${BASE_URL}search/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`,
    );
