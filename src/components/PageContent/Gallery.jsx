import React from 'react';
import styles from './Gallery.module.css';


const galleryImages = [
  { src: '/images/quill_art_1.jpg', alt: 'Quilled Women' },
  { src: '/images/quill_art_2.jpg', alt: 'Quilled Work' },
  { src: '/images/quill_art_3.jpg', alt: 'Quilled Bird' },
  { src: '/images/quill_art_4.jpg', alt: 'Quilled Butterfly' },
  
];

const Gallery = () => (
  <div className={styles.galleryContainer}>
    {galleryImages.map((image, index) => (
      <div key={index} className={styles.imageWrapper}>
        <img src={image.src} alt={image.alt} className={styles.galleryImage} />
        <p className={styles.imageCaption}>{image.alt}</p>
      </div>
    ))}
  </div>
);

export default Gallery;
