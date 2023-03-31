import React from 'react';
import { PageTitle } from './titlestyle';

const Title = ({ title, lineWidth }) => {
  return (
    <PageTitle width={lineWidth}>
      <div className='title_container'>
        <h1>{title}</h1>
      </div>
      <div className='line_div'>
        <span className='dot1'></span>
        <span className='dot2'></span>
        <span className='dot3'></span>
        <span className='dot4'></span>
      </div>
    </PageTitle>
  );
};

export default Title;
