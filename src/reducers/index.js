import {combineReducers} from 'redux';
import movies from './movieReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  movies,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
