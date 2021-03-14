import React, { Component } from 'react';
import axios from 'axios';

export class Reviews extends Component {
  state = {
    results: null,
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
    console.log(results);

    return (
      <>
        Reviews
        {/* {results.map(result => (
          <ul>
            {result.author}
            <li>{result.content}</li>
          </ul>
        ))} */}
      </>
    );
  }
}

export default Reviews;
