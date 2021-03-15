import axios from 'axios';
import React, { Component } from 'react';
import MoviesList from '../Components/moviesList/MoviesList';
import Button from '../Components/button/Button';
import Loader from '../Components/loader/Loader';
import FormSubmit from '../Components/formSubmit/FormSubmit';

export class MoviesPage extends Component {
  state = {
    films: [],
    page: 1,
    query: '',
    total_pages: '',
    error: null,
    isLoading: false,
    showBtn: true,
  };

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
    const { query, page } = this.state;
    const API_KEY = '69b18394d8ba2f066276fc5ba1d70545';
    const BASE_URL = 'https://api.themoviedb.org/3';
    axios.defaults.baseURL = BASE_URL;

    this.setState({ isLoading: true });

    axios
      .get(
        `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
      )
      .then(response => {
        this.setState(prevState => ({
          films: [...prevState.films, ...response.data.results],
          total_pages: response.data.total_pages,
          page: prevState.page + 1,
        }));

        this.lengthArr(response.data.results.length);

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

export default MoviesPage;
