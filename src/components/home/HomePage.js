import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Strona startowa</h1>
        <p>Projekt realizowany w ramach przedmiotu "Projekt Grupowy" na drugim stopniu studów stacjonarnych</p>
        <Link to="about" className="btn btn-primary btn-lg">Sprawdz</Link>
      </div>
    );
  }
}

export default HomePage;
