import React from 'react';
import styles from './Navigation.module.css';

const Navigation = ({ currentPage, setCurrentPage }) => (
  <nav className={styles.nav}>
    <button
      className={currentPage === 'Home' ? styles.active : ''}
      onClick={() => setCurrentPage('Home')}
    >
      Home
    </button>
    <button
      className={currentPage === 'Techniques' ? styles.active : ''}
      onClick={() => setCurrentPage('Techniques')}
    >
      Techniques
    </button>
    <button
      className={currentPage === 'Gallery' ? styles.active : ''}
      onClick={() => setCurrentPage('Gallery')}
    >
      Gallery
    </button>
  </nav>
);

export default Navigation;
