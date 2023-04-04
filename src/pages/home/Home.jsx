import React, { useState } from 'react';
import { Header, ImageSlider, SideMenu } from '../../Components/index';

const Home = ({all}) => {
  const [side, setSide] = useState(false);
  const sideMenuHandler = () => {
    setSide(!side);
  };
  return (
    <div name="home">
      <Header sideMunuProp={sideMenuHandler} />
      <ImageSlider />
      <SideMenu sideMunuProp={side} sideMenuHandler={sideMenuHandler} />
    </div>
  );
};

export default Home;
