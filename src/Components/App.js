import React from 'react';
import './App.scss';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import routes from '../routes';
import AppBar from './appBar/AppBar';
import Section from '../Components/section/Section';

const App = () => (
  <>
    <Section>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.moviePage} component={MoviesPage} />
        <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
        <Redirect from="" to="/" />
      </Switch>
    </Section>
  </>
);

export default App;
