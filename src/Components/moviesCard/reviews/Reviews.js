import React, { Component } from 'react';
import axios from 'axios';
import './Reviews.scss';

export class Reviews extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const API_KEY = '69b18394d8ba2f066276fc5ba1d70545';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const movieId = this.props.movieId;

    axios.defaults.baseURL = BASE_URL;

    const { data } = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );
    this.setState({ ...data });
  }

  render() {
    const { results } = this.state;

    return (
      <>
        {results.length > 0 ? (
          <ul>
            {results.map(result => (
              <li key={result.author}>
                <h3 className="title-reviews">Author: {result.author}</h3>
                <p className="text-reviews">{result.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews forthis movie.</p>
        )}
      </>
    );
  }
}

export default Reviews;
