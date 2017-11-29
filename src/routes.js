import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import MoviesPage from './components/movies/MoviesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="session" component={MoviesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
