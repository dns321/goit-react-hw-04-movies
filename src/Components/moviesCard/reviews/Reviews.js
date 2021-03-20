import React, { Component } from 'react';
import './Reviews.scss';
import newsApi from '../../../services/ApiServices';
import PropTypes from 'prop-types';

export class Reviews extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const movieId = this.props.movieId;

    newsApi.fetchReviews(movieId).then(data => {
      this.setState({ ...data });
    });
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

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
