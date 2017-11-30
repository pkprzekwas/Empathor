import React, {PropTypes} from 'react';
import MovieListRow from './MovieListRow';

const MovieList = ({movies}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Tytuł</th>
        <th>Autor</th>
        <th>Kategoria</th>
        <th>Czas trwania</th>
      </tr>
      </thead>
      <tbody>
      {movies.map(movie =>
        <MovieListRow key={movie.id} movie={movie}/>
      )}
      </tbody>
    </table>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
