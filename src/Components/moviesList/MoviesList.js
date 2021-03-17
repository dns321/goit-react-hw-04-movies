import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import defaultImg from '../../img/default-image.png';

const MoviesList = ({ films, location }) => {
  const Base_url = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

  return (
    <ul className="items-movies-list">
      {films.map(film => (
        <li key={film.id} className="item-movies-list">
          <Link
            to={{
              apdateList: location.apdateList,
              pathname: `/movies/${film.id}`,
              state: {
                from: location.search
                  ? location.pathname + location.search
                  : location.pathname,
                query: location.query,
              },
            }}
          >
            <img
              src={film.poster_path && `${Base_url}${film.poster_path}`}
              alt="poster"
              width="200"
              height="300"
            />
            <p>{film.original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.defaultProps = {
  films: [
    {
      poster_path: defaultImg,
    },
  ],
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
    }),
  ),
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesList);
