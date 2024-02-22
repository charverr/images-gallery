import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const navbarStyle = {
  backroundColour: 'lightblue',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired, // Specify that 'title' is a required string
};

export default Header;
