import { getMovieCast } from 'MoviDbAPI/MovieDbApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState(null);
  useEffect(() => {
    getMovieCast(id).then(setCast);
  });
  return (
    <div>
      {cast &&
        (cast.length > 0 ? (
          <ul>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
                <h4>{actor.name}</h4>
                <p>{actor.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have information aboutcast of this movie</p>
        ))}
    </div>
  );
};
