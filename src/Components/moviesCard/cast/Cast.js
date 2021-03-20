import React, { Component } from 'react';
import './Cast.scss';
import newsApi from '../../../services/ApiServices';
import defaultImg from '../../../img/default-image.png';
import PropTypes from 'prop-types';

export class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const movieId = this.props.movieId;

    newsApi.fetchCast(movieId).then(data => {
      this.setState({ ...data });
    });
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
                src={
                  actor.profile_path
                    ? `${Base_url}${actor.profile_path}`
                    : defaultImg
                }
                alt="photo"
                width="200"
                height="300"
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

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
