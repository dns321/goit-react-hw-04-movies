import axios from 'axios';
import React, { Component } from 'react';
import MoviesCard from '../Components/movies/moviesCard/MoviesCard';

export class MovieDetailsPage extends Component {
  state = {
    genres: null,
    original_title: null,
    overview: null,
    poster_path: null,
    release_date: null,
    vote_average: null,
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
  }

  render() {
    const {
      genres,
      original_title,
      overview,
      poster_path,
      release_date,
      vote_average,
    } = this.state;

    const date = `${release_date}`.split('-')[0];
    const score = vote_average * 10;

    return (
      <>
        {/* <h2>Cторінка фільма {this.props.match.params.movieId}</h2> */}
        <MoviesCard
          match={this.props.match}
          imgUrl={poster_path}
          title={original_title}
          date={date}
          score={score}
          overview={overview}
          genres={genres}
        />
      </>
    );
  }
}

export default MovieDetailsPage;

// '/movies/:movieId';
