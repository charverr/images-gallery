/* eslint-disable prettier/prettier */
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';
import PropTypes from 'prop-types';

const navbarStyle = {
  backroundColour: '#eeeeee',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '12rem', maxHeigth: '2rem' }} />
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired, // Specify that 'title' is a required string
};

export default Header;
