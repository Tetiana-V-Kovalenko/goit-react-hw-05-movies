import { GoBackBtn } from './GoBackBtn';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'MoviDbAPI/MovieDbApi';
import { useEffect, useState } from 'react';
import { Outlet } from '../../node_modules/react-router-dom/dist/index';

export const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieDetails = await getMovieById(id);
      setMovie(movieDetails);
    };
    fetchMovie().catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <GoBackBtn url={location.state.from} />
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>User Score {Math.trunc(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast" state={{ from: location.state.from }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location.state.from }}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      )}{' '}
      <Outlet />
    </div>
  );
};
