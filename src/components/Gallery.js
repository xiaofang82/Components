import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((url, index) => (
        <img key={index} src={url} alt={`Gallery item ${index + 1}`} />
      ))}
    </div>
  );
};

export default Gallery;
