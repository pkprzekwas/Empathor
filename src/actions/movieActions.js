import * as types from './actionTypes';
import MovieApi from '../api/mockMovieApi';

export function loadMoviesSuccess(movies) {
  return { type: types.LOAD_MOVIES_SUCCESS, movies };
}

export function updateMovieSuccess(movie) {
  return { type: types.UPDATE_MOVIE_SUCCESS, movie };
}

export function createMovieSuccess(movie) {
  return { type: types.CREATE_MOVIE_SUCCESS, movie };
}

export function loadMovies() {
  return function (dispatch) {
    return MovieApi.getAllMovies().then(movies => {
      dispatch(loadMoviesSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveMovie(movie) {
  return function (dispatch, getState) {
    return MovieApi.saveMovie(movie).then(savedMovie => {
      movie.id ? dispatch(updateMovieSuccess(savedMovie)) :
        dispatch(createMovieSuccess(savedMovie));
    }).catch(error => {
      throw(error);
    });
  };
}
