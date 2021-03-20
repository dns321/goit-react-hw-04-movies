import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ routes, match = '' }) => {
  return (
    <nav>
      <ul className="nav-list-items">
        {routes.map(
          ({ name, path, exact, list }) =>
            list && (
              <li className="naw-list-item" key={path}>
                <NavLink
                  exact={exact}
                  to={`${match}${path}`}
                  className="nav-link"
                  activeClassName="nav-link-activ"
                >
                  {name}
                </NavLink>
              </li>
            ),
        )}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.object.isRequired,
      exact: PropTypes.bool.isRequired,
      list: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
};

export default Navigation;
