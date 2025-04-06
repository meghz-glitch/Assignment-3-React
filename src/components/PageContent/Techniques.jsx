import React from 'react';
import styles from './Techniques.module.css';

const techniques = [
  { name: 'Coiling', description: 'Creating tight coils with paper strips.' },
  { name: 'Scrolling', description: 'Making loose scrolls for decorative purposes.' },
  { name: 'Husking', description: 'Using pins to create loops and patterns.' },
];

const Techniques = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <img
        src="/images/techniques.jpg"
        alt="Quill Art Techniques"
        className={styles.image}
      />
      <ul className={styles.list}>
        {techniques.map((technique, index) => (
          <li key={index} className={styles.listItem}>
            <h3 className={styles.title}>{technique.name}</h3>
            <p className={styles.description}>{technique.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Techniques;


