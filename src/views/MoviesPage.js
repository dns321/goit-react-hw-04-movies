import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MoviesPage extends Component {
  state = {
    films: [],
    query: '',
    total_pages: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.fetchMovies();
    this.setState({ query: '' });
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  fetchMovies = () => {
    const API_KEY = '69b18394d8ba2f066276fc5ba1d70545';
    const BASE_URL = 'https://api.themoviedb.org/3';
    axios.defaults.baseURL = BASE_URL;

    axios
      .get(
        `/search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.query}&page=1&include_adult=false`,
      )
      .then(response => {
        this.setState({ films: response.data.results });
        this.setState({ total_pages: response.data.total_pages });
      });
  };

  render() {
    const { films } = this.state;

    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Serch movies"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>

        <ul>
          {films.map(film => (
            <li key={film.id}>
              <Link to={`${this.props.match.url}/${film.id}`}>
                {film.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
