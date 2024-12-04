import React from 'react';
import './image_gallery.css';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`image-${index}`} className="gallery-image" />
      ))}
    </div>
  );
};

export default ImageGallery;