import React, { useState } from "react";
import { Header, ImageSlider, SideMenu } from "../../Components/index";

const Home = () => {
  const [side, setSide] = useState(false);
  const sideMenuHandler = () => {
    setSide(!side);
  };
  return (
    <div>
      <Header sideMunuProp={sideMenuHandler} />
      <ImageSlider />
      <SideMenu sideMunuProp={side} sideMenuHandler={sideMenuHandler}/>
    </div>
  );
};

export default Home;
