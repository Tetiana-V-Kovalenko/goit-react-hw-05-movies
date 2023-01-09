import { getTrendingMovies } from 'MoviDbAPI/MovieDbApi';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <main>
      <h1>Trending Video</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: '/' }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
