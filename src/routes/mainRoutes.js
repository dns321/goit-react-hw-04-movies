import { Suspense, lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    list: true,
    component: lazy(() =>
      import('../views/HomePage.js' /* webpackChunkName: "home-page" */),
    ),
  },
  {
    name: 'Movies',
    path: '/movies',
    exact: true,
    list: true,
    component: lazy(() =>
      import('../views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
    ),
  },
  {
    name: 'movieDetailsPage',
    path: '/movies/:movieId',
    exact: false,
    list: false,
    component: lazy(() =>
      import(
        '../views/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
      ),
    ),
  },
];
