export const getTrendingMovies = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=542eb136f2935291d264064efe348750'
  ).then(response => response.json());

  return response.results;
};
export const getMovieById = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=542eb136f2935291d264064efe348750&language=en-US`
  ).then(response => response.json());
  return response;
};
export const getMovieReviews = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1`
  ).then(response => response.json());
  return response.results;
};
export const getMovieCast = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1`
  ).then(response => response.json());
  return response.cast;
};
export const getSearchedMovies = async query => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1&query=${query}`
  ).then(response => response.json());
  return response.results;
};
