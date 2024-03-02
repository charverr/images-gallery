/* eslint-disable prettier/prettier */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'; // Import PropTypes

const ImageCard = ({ image, deleteImage }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image?.urls?.small} />
      <Card.Body>
        <Card.Title>{image.title?.toUpperCase()}</Card.Title>
        <Card.Text>{image?.description || image?.alt_description}</Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
// Define PropTypes for the ImageCard component
ImageCard.propTypes = {
  image: PropTypes.object.isRequired, // Prop validation for the image object
  deleteImage: PropTypes.func.isRequired, // Prop validation for the deleteImage function
};

export default ImageCard;
