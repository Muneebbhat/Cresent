import React from 'react';
import { CardList } from './cardStyle';
import data from '../../assets/local-data/Data.json';

const Card = ({ product: { image, title } }) => {
  console.log(image);
  return (
    <CardList>
      <div className='card_image'>
        <img src={image} alt={title} loading='lazy' />
      </div>
      <div className='card_title'>
        <p>{title}</p>
      </div>
    </CardList>
  );
};

export default Card;
