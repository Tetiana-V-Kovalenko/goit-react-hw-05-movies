import { GoBackBtn } from './GoBackBtn';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'MoviDbAPI/MovieDbApi';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from '../../../node_modules/react-router-dom/dist/index';
import css from './MovieDetails.module.css';
import { TailSpin } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const MovieDetails = () => {
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
  }, [id]);

  return (
    <div>
      <GoBackBtn url={location.state?.from ?? '/'} />
      {movie && (
        <div className={css.movieContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={css.movieImg}
          />
          <div className={css.movieMainInform}>
            <h2>{movie.title}</h2>
            <p>User Score {Math.trunc(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
          </div>

          <ul>
            <h3>Additional information</h3>
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
      <Suspense
        fallback={
          <TailSpin
            height="80"
            width="80"
            color="brown"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
MovieDetails.propTypes = {
  params: PropTypes.string,
  location: PropTypes.array,
  state: PropTypes.object,
};
