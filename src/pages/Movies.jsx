import { getSearchedMovies } from 'MoviDbAPI/MovieDbApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from '../../node_modules/react-router-dom/dist/index';

export const Movies = () => {
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [searchedParams, setSearchedParams] = useSearchParams();
  const query = searchedParams.get('query') ?? '';
  useEffect(() => {
    if (query === '') {
      return;
    }
    getSearchedMovies(query).then(setSearchedMovie);
  }, [query]);

  const onSubmitClick = value => {
    setSearchedParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmitClick(e.target.elements.query.value);
        }}
      >
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchedMovie &&
          searchedMovie.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: '/movies' }}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};