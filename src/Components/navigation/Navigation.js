import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list-items">
        <li className="naw-list-item">
          <NavLink
            exact
            to={routes.home}
            className="nav-link"
            activeClassName="nav-link-activ"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.moviePage}
            className="nav-link"
            activeClassName="nav-link-activ"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
