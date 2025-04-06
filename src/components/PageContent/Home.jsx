import React from 'react';
import styles from './home.module.css';


const Home = () => (
  <div className={styles.homeContainer}>
    <section className={styles.section}>
      <img src="/images/quill_art_4.jpg" alt="Quilling Flowers" className={styles.image} />
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Welcome to Quill Art</h2>
        <p className={styles.text}>
          Dive into the delicate art of paper filigree where beauty is crafted from paper strips.
        </p>
      </div>
    </section>

    <section className={styles.section}>
      <img src="/images/quill_art_7.jpg" alt="Colorful Design" className={styles.image} />
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Inspiring Designs</h2>
        <p className={styles.text}>
          Explore vibrant and intricate patterns that highlight the creativity of quilling artists.
        </p>
      </div>
    </section>

    <section className={styles.section}>
      <img src="/images/quill_art_9.jpg" alt="Group Art" className={styles.image} />
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Join the Community</h2>
        <p className={styles.text}>
          Whether beginner or expert, there's a place for you in the world of quill art.
        </p>
      </div>
    </section>
  </div>
);

export default Home;


