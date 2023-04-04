import React from 'react';
import { Title, Card } from '../../Components';
import { GalleryWrapper } from './GalleryStyle';
import data from '../../assets/local-data/Data.json';

const Gallery = () => {
  return (
    <GalleryWrapper id='gallery'>
      <Title title='our products' lineWidth={230} />
      <div className='products'>
        {data.products_image.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </div>
    </GalleryWrapper>
  );
};

export default Gallery;
