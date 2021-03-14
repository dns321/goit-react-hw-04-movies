import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
import './MoviesCard.scss';

const MoviesCard = ({
  imgUrl,
  title,
  date,
  score,
  overview,
  genres,
  match,
}) => {
  const Base_url = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
  console.log(genres);
  const movieId = match.params.movieId;

  return (
    <>
      <button type="button">Go back</button>
      <div className="movies-card">
        <img src={`${Base_url}${imgUrl}`} alt="poster" width="200" />
        <div className="movies-card-description">
          <h2>
            {title} ({date})
          </h2>
          <p>User Score: {score}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {/* {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))} */}
          </ul>
        </div>
      </div>
      <div className="movies-information">
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to={`${match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Route
        path={`${match.url}/cast`}
        render={props => <Cast movieId={movieId} {...props} />}
      ></Route>
      <Route
        path={`${match.url}/reviews`}
        render={props => <Reviews movieId={movieId} {...props} />}
      ></Route>
    </>
  );
};

export default MoviesCard;
