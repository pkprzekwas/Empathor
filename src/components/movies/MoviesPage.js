import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';

class MoviesPage extends React.Component {
  static movieRow(movie, index) {
    return <div key={index}>{movie.title}</div>;
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      movie: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const movie = this.state.movie;
    movie.title = event.target.value;
    this.setState({movie: movie});
  }

  onClickSave() {
    this.props.actions.createMovie(this.state.movie);
  }

  render()  {
    return (
      <div>
        <h1>Filmy</h1>
        {this.props.movies.map(MoviesPage.movieRow)}
        <h2>Dodaj film:</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.movie.title} />

        <input
          type="submit"
          value="Zapisz"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

MoviesPage.propTypes = {
  movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
