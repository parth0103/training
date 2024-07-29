import React from 'react';
import ImageCard from './ImageCard';
import { Container, Row, Col } from 'react-bootstrap';

const ImageGrid = ({ images, onEdit, onRemove }) => {
  return (
    <Container>
      <Row>
        {images.map((image, index) => (
          <Col key={index} md={4}>
            <ImageCard image={image} onEdit={() => onEdit(index)} onRemove={() => onRemove(index)} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageGrid;