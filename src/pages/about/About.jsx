import React from 'react';

import { Title, AboutContent } from '../../Components/index';
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
