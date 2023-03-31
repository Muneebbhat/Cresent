import React from 'react';
import './app.css';
import { Header, ImageSlider } from './Components';
import About from './pages/about/About';

const App = () => {
  return (
    <div
      style={{
        maxWidth: '1366px',
        width: '100%',
        margin: 'auto',
        position: 'relative',
      }}
    >
      <Header />
      <ImageSlider />
      <About />
    </div>
  );
};

export default App;
