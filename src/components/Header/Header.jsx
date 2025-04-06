import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.jpg'; 

const Header = ({ title }) => (
  <header className={styles.header}>
    <img src={logo} alt="Logo" className={styles.logo} />
    <h1 className={styles.title}>{title}</h1>
  </header>
);

export default Header;

