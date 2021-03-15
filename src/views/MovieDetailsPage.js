import axios from 'axios';
import React, { Component } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import Cast from '../Components/moviesCard/cast/Cast';
import Reviews from '../Components/moviesCard/reviews/Reviews';
import routers from '../routes';

export class MovieDetailsPage extends Component {
  state = {
    genres: [],
    original_title: null,
    overview: null,
    poster_path: null,
    release_date: null,
    vote_average: null,
    from: '',
  };

  async componentDidMount() {
    const API_KEY = '69b18394d8ba2f066276fc5ba1d70545';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const movieId = this.props.match.params.movieId;

    axios.defaults.baseURL = BASE_URL;

    const { data } = await axios.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    this.setState({ ...data });
    this.setState({ from: this.props.location.state?.from });
  }

  handleGoBack = () => {
    const { from } = this.state;
    const { history } = this.props;
    from ? history.push(from) : history.push(routers.home);
  };

  render() {
    const {
      genres,
      original_title,
      overview,
      poster_path,
      release_date,
      vote_average,
      from,
    } = this.state;
    const movieId = this.props.match.params.movieId;

    const date = `${release_date}`.split('-')[0];
    const score = vote_average * 10;

    const Base_url = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

    return (
      <>
        {/* <h2>Cторінка фільма {this.props.match.params.movieId}</h2> */}
        <button
          type="button"
          onClick={this.handleGoBack}
          // disabled={!from && 'disabled'}
        >
          Go back
        </button>
        <div className="movies-card">
          <img src={`${Base_url}${poster_path}`} alt="poster" width="200" />
          <div className="movies-card-description">
            <h2>
              {original_title} ({date})
            </h2>
            <p>User Score: {score}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="movies-information">
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Route
          path={`${this.props.match.url}/cast`}
          render={props => <Cast movieId={movieId} {...props} />}
        ></Route>
        <Route
          path={`${this.props.match.url}/reviews`}
          render={props => <Reviews movieId={movieId} {...props} />}
        ></Route>
      </>
    );
  }
}

export default MovieDetailsPage;
