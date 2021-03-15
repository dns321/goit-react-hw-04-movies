import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MoviesList.scss';
import PropTypes from 'prop-types';

const MoviesList = ({ films, location }) => {
  const Base_url = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

  return (
    <ul className="items-movies-list">
      {films.map(film => (
        <li key={film.id} className="item-movies-list">
          <Link
            to={{
              pathname: `/movies/${film.id}`,
              state: {
                from: location.search
                  ? location.pathname + location.search
                  : location.pathname,
              },
            }}
          >
            <img
              src={`${Base_url}${film.poster_path}`}
              alt="poster"
              width="200"
            />
            <p>{film.original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
    }),
  ),
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesList);
