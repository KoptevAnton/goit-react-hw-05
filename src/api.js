import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjJmOTc5NjBlMTU2NDFmMmUwODMzYzBiODE0MWRmZSIsIm5iZiI6MTczMzA4NTQxMS41MjksInN1YiI6IjY3NGNjOGUzNjQ5Y2FjOTNjYjY0MDQ2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XA-w3Mo5qnqJOd3QP7oX68h_g5oimUI3B3sGQE2jM9Q',
  },
};

export async function getTrendingMovies() {
  const response = await axios.get(`/trending/movie/day`, options);
  return response.data.results;
}

export async function searchMovies(searchQuery, page) {
  options.params = {
    query: searchQuery,
    include_adult: 'false',
    language: 'en-US',
    page: page,
  };
  const response = await axios.get('/search/movie', options);
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
}

export async function getMovieCredits(movieId) {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data.cast;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data.results;
}
