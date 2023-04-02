import React from 'react';
import { AboutContainer } from './AboutContentStyle';
import data from '../../assets/local-data/Data.json';

const AboutContent = () => {
  console.log(data.about_image);
  return (
    <AboutContainer>
      <div className='image_container'>
        <img src={data.about_image} alt='chef image' />
      </div>
      <div className='text_container'>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magni.
            Dolorem nulla perferendis optio! Qui, voluptas, ratione rem
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam harum
            consectetur beatae itaque sequi facere unde quia natus. Molestias
          </li>
          <li>
            vel recusandae maxime sit in iure sunt aperiam quisquam cupiditate.
          </li>
          <li>maxime optio eveniet velit sed earum. Ipsum, mollitia.</li>
          <li>
            eum cumque debitis est corrupti tenetur corporis. Quae quo laborum
            doloribus voluptates accusantium voluptate corrupti earum maiores
            atque.
          </li>
        </ul>
      </div>
    </AboutContainer>
  );
};

export default AboutContent;
