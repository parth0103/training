import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import ImageForm from './components/ImageForm';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  const handleAddImage = (image) => {
    setImages([...images, image]);
  };

  const handleEditImage = (index, newImage) => {
    const updatedImages = [...images];
    updatedImages[index] = newImage;
    setImages(updatedImages);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className="App">
      <ImageForm onAddImage={handleAddImage} />
      <ImageGrid images={images} onEdit={handleEditImage} onRemove={handleRemoveImage} />
    </div>
  );
}

export default App;
