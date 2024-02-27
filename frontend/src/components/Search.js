/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  placeholder="Search for new image..."
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

Search.propTypes = {
  word: PropTypes.string.isRequired, // word prop should be a required string
  setWord: PropTypes.func.isRequired, // setWord prop should be a required function
  handleSubmit: PropTypes.func.isRequired, // handleSubmit prop should be a required function
};
export default Search;
