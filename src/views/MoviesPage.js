import React, { Component } from 'react';
import MoviesList from '../Components/moviesList/MoviesList';
import Button from '../Components/button/Button';
import Loader from '../Components/loader/Loader';
import FormSubmit from '../Components/formSubmit/FormSubmit';
import newApi from '../services/ApiServices';
import PropTypes from 'prop-types';

export class MoviesPage extends Component {
  state = {
    films: [],
    page: 1,
    query: '',
    error: null,
    isLoading: false,
    showBtn: true,
  };

  componentDidMount() {
    const { query } = this.props.location;
    const { page } = this.state;
    const options = { query, page };

    this.props.location.query &&
      newApi
        .fetchMoviesPage(options)
        .then(() => {
          this.setState(() => ({
            query: this.props.location.query,
          }));

          this.windowScroll();
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchMovies();
    }
  }

  onChengeQuery = query => {
    this.setState({
      query: query,
      page: 1,
      films: [],
      error: null,
    });
  };

  fetchMovies = () => {
    this.setState({ isLoading: true });
    const { query, page } = this.state;
    const options = { query, page };

    newApi
      .fetchMoviesPage(options)
      .then(data => {
        this.setState(prevState => ({
          films: [...prevState.films, ...data.results],
          page: prevState.page + 1,
          query: this.props.location.query,
        }));

        this.lengthArr(data.results.length);

        this.windowScroll();
      })
      .finally(() => {
        const { films } = this.state;
        if (films.length < 1) {
          this.setState({ error: true });
        } else {
          this.setState({ error: false });
        }
        this.setState({ isLoading: false });
      });
  };

  windowScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  lengthArr = value => {
    if (value < 19) {
      this.setState({ showBtn: false });
    }
  };

  render() {
    const { films, query, error, isLoading, showBtn } = this.state;
    const showLoadMoreBtn = films.length > 0 && !isLoading && showBtn;

    return (
      <>
        <FormSubmit onSubmit={this.onChengeQuery} />
        <MoviesList films={films} />
        {error && <h2>Something went wrong</h2>}
        {isLoading && <Loader />}
        {showLoadMoreBtn && <Button fetchImajes={this.fetchMovies} />}
      </>
    );
  }
}

MoviesPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MoviesPage;
