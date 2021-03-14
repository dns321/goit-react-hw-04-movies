import React from 'react';
import './App.scss';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';

const App = () => (
  <>
    <ul className="nav-list-items">
      <li className="naw-list-item">
        <NavLink
          exact
          to="/"
          className="nav-link"
          activeClassName="nav-link-activ"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="nav-link"
          activeClassName="nav-link-activ"
        >
          Movies
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Redirect from="" to="/" />
    </Switch>
  </>
);

export default App;
