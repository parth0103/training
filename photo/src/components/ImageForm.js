import React, { useState,useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

const ImageForm = ({ onAddImage }) => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      onAddImage({ src: image, description });
      setImage(null);
      setDescription('');
      fileInputRef.current.value = '';
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formImage">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" ref={fileInputRef} onChange={(e) => setImage(e.target.files[0])} />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)}   
 />
      </Form.Group>
      <Button variant="primary" type="submit">   

        Add Image
      </Button>
    </Form>
  );
};

export default ImageForm;