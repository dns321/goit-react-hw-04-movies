import React, { Component } from 'react';
import axios from 'axios';

export class Cast extends Component {
  state = {
    cast: null,
  };

  async componentDidMount() {
    const API_KEY = '69b18394d8ba2f066276fc5ba1d70545';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const movieId = this.props.movieId;

    axios.defaults.baseURL = BASE_URL;

    const { data } = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );
    console.log(data);
    this.setState({ ...data });
  }

  render() {
    const Base_url = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
    const { cast } = this.state;

    console.log(cast);

    return (
      <>
        <div>Cast</div>
        <ul>
          {/* {cast.map(actor => (
            <li kay={actor.id}>
              <img src={`${Base_url}${actor.profile_path}`} alt="photo" />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))} */}
        </ul>
      </>
    );
  }
}

export default Cast;
