import React, { Component } from 'react';
import MoviesList from '../Components/moviesList/MoviesList';
import newsApi from '../services/ApiServices';

export class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    newsApi.fetchMoviesDay().then(data => {
      this.setState({ films: data.results });
    });
  }

  render() {
    const { films } = this.state;

    return (
      <>
        <MoviesList films={films} />
      </>
    );
  }
}

export default HomePage;
