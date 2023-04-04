import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Gallery from "./gallery/Gallery";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Franchise from "./franchise/Franchise";

const Index = ({modelHandler}) => {
  return (
    <>
      <Home />
      <About />
      <Gallery />
      <Franchise modelHandler={modelHandler}/>
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
