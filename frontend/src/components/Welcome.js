/* eslint-disable prettier/prettier */
import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      <Button bsstyle="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
