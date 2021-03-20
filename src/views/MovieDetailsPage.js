import React, { Component, Suspense, lazy } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import defaultImg from '../img/default-image.png';
import Navigation from '../Components/navigation/Navigation';
import { castReviewsRoutes } from '../routes/castReviewsRoutes';
import newsApi from '../services/ApiServices';
import PropTypes from 'prop-types';

export class MovieDetailsPage extends Component {
  state = {
    genres: [],
    original_title: '',
    overview: '',
    poster_path: '',
    release_date: '',
    vote_average: '',
    from: '',
    query: '',
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;

    newsApi.fetchMoviesDetail(movieId).then(data => {
      this.setState({
        ...data,
        from: this.props.location.state?.from,
        query: this.props.location.state?.query,
      });
    });
  }

  handleGoBack = () => {
    const { from, query } = this.state;

    const { history } = this.props;
    from && query
      ? history.push({
          pathname: from,
          search: `query=${query}`,
          query,
        })
      : history.push('/');
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

    const Base_url = 'https://image.tmdb.org/t/p/original';

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
          <img
            src={poster_path ? `${Base_url}${poster_path}` : defaultImg}
            alt="poster"
            width="200"
          />
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
          <Navigation routes={castReviewsRoutes} match={this.props.match.url} />
        </div>

        <Suspense fallback={<Loader />}>
          {castReviewsRoutes.map(({ path, component: MyComponent }) => (
            <Route
              key={path}
              path={`${this.props.match.url}${path}`}
              render={props => <MyComponent movieId={movieId} {...props} />}
            ></Route>
          ))}
        </Suspense>
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default MovieDetailsPage;
