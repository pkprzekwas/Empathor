import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Główna</IndexLink>
      {" | "}
      <Link to="/session" activeClassName="active">Filmy</Link>
      {" | "}
      <Link to="/about" activeClassName="active">Info</Link>
    </nav>
  );
};

export default Header;
