import React from 'react';
import './app.css';
import { Header } from './Components';
import About from './pages/about/About';

const App = () => {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
};

export default App;
