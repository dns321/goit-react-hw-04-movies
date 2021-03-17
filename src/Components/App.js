import React, { Suspense, lazy } from 'react';
import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
// import HomePage from '../views/HomePage';
// import MoviesPage from '../views/MoviesPage';
// import MovieDetailsPage from '../views/MovieDetailsPage';
import routes from '../routes';
import AppBar from './appBar/AppBar';
import Section from '../Components/section/Section';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('../views/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('../views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../views/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => (
  <>
    <Section>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.moviePage} component={MoviesPage} />
          <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
          <Redirect from="" to="/" />
        </Switch>
      </Suspense>
    </Section>
  </>
);

export default App;
