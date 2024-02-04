import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from 'components/ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={() => onImageClick(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
