import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/PageContent/Home';
import Techniques from './components/PageContent/Techniques';
import Gallery from './components/PageContent/Gallery';
import './App.module.css';


const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Techniques':
        return <Techniques />;
      case 'Gallery':
        return <Gallery />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header title="Quill Art Showcase" />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;

