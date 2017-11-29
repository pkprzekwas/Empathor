import * as types from './actionTypes';

export function createMovie(movie) {
  return { type: types.CREATE_MOVIE, movie };
}
