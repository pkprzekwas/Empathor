import {combineReducers} from 'redux';
import movies from './movieReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  movies,
  authors
});

export default rootReducer;
