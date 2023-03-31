import React from 'react';
import AboutContent from '../../Components/aboutDetails/AboutContent';
import Title from '../../Components/PageTitle/title';
import { AboutWrapper } from './aboutStyle';

const About = () => {
  return (
    <AboutWrapper>
      <Title title='about us' lineWidth='170px' />
      <AboutContent />
    </AboutWrapper>
  );
};

export default About;
