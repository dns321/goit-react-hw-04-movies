import { lazy } from 'react';

export const castReviewsRoutes = [
  {
    name: 'Cast',
    path: '/cast',
    exact: true,
    list: true,
    component: lazy(() =>
      import(
        '../Components/moviesCard/cast/Cast' /* webpackChunkName: "cast" */
      ),
    ),
  },
  {
    name: 'Reviews',
    path: '/reviews',
    exact: true,
    list: true,
    component: lazy(() =>
      import(
        '../Components/moviesCard/reviews/Reviews' /* webpackChunkName: "reviews" */
      ),
    ),
  },
];
