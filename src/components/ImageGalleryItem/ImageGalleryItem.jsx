import React from 'react';
 import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={css.galleryItem}>
      <img
        className={css.galleryItemImage}
        src={image.webformatURL}
        alt=""
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
