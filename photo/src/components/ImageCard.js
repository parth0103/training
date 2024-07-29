import React, { useState,useRef } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const ImageCard = ({ image,   onEdit, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedImage, setEditedImage] = useState({...image});

  const fileInputRef = useRef(editedImage.src);
  const handleEdit = () => {
    setIsEditing(true);
    fileInputRef.current.val=editedImage.src
  };

  
  const handleSave = () => {
    console.log(editedImage,"hello")
    onEdit(editedImage);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedImage(image);
    setIsEditing(false);
  };

  console.log(editedImage)
  const imageUrl = editedImage.src ? URL.createObjectURL(editedImage.src) : null;

  return (
    <Card className="mb-3">
      {isEditing ? (
        <Card.Body>
          <Form>
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" ref={fileInputRef} onChange={(e) => setEditedImage({ ...editedImage, src: e.target.files[0] })} />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" value={editedImage.description} onChange={(e) => setEditedImage({ ...editedImage, description: e.target.value })} />
            </Form.Group>
            <Button variant="primary" onClick={handleSave}>Save</Button>
            <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          </Form>
        </Card.Body>
      ) : (
        <>
          <Card.Img variant="top" src={imageUrl} alt={editedImage.description} />
          <Card.Body>
            <Card.Title>{editedImage.description}</Card.Title>
            <Button variant="primary" size="sm" onClick={handleEdit}>Edit</Button>
            <Button variant="danger" size="sm" onClick={onRemove}>Remove</Button>
          </Card.Body>
        </>
      )}
    </Card>
  );
};

export default ImageCard;
