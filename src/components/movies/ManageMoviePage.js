import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from '../../actions/movieActions';
import MovieForm from "./MovieForm";


class ManageMoviePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      movie: Object.assign({}, props.movie),
      // authors: Object.assign([], props.authors),
      errors: {}
    };
  }

  render() {
    return (
      <div>
      <h1>Edytuj</h1>
      <MovieForm
        movie={this.state.movie}
        allAuthors={this.props.authors}
        errors={this.state.errors} />
      </div>
    );
  }
}

ManageMoviePage.propTypes = {
  movie: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  let movie = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  const authorsFormattedForDropdown = state.authors.map(author => {
      return {
        value: author.id,
        text: author.firstName + ' ' + author.lastName
      };
    });

  return {
      movie: movie,
      authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMoviePage);
