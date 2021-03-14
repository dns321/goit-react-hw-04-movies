import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const API_KEY = '69b18394d8ba2f066276fc5ba1d70545';
    const BASE_URL = 'https://api.themoviedb.org/3';
    axios.defaults.baseURL = BASE_URL;

    const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    this.setState({ films: data.results });
  }

  render() {
    const { films } = this.state;

    return (
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.original_title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default HomePage;
