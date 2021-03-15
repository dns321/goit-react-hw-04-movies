import React, { Component } from 'react';
import axios from 'axios';
import './Cast.scss';

export class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const API_KEY = '69b18394d8ba2f066276fc5ba1d70545';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const movieId = this.props.movieId;

    axios.defaults.baseURL = BASE_URL;

    const { data } = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );
    this.setState({ ...data });
  }

  render() {
    const Base_url = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
    const { cast } = this.state;

    return (
      <>
        <ul className="items-cast">
          {cast.map(actor => (
            <li key={actor.id} className="item-cast">
              <img
                src={`${Base_url}${actor.profile_path}`}
                alt="photo"
                width="200"
              />
              <h3 className="title-cast">{actor.name}</h3>
              <p className="text-cast">Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
