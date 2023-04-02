import React from 'react';
import { Title } from '../../Components';
import { Section } from './ContactUsStyle';

const Contact = () => {
  return (
    <Section>
      <Title title='contact us' lineWidth='180px' />
      <div className='contact_info_wrapper'>
        {/* map  */}
        <div className='map_wrapper'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.3374133994407!2d74.79200361469896!3d34.03914132586892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18fb855d5e4d1%3A0x9e93cd29cbd41862!2sCompix%20-VFX%20%26%20Animation!5e1!3m2!1sen!2sin!4v1680347597404!5m2!1sen!2sin'
            width='100%'
            height='100%'
            style={{ border: '0' }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        {/* contact input wrapper */}
        <form action=''>
          <div className='input_wrapper'>
            {/* name input */}
            <div className='inputs'>
              <label htmlFor='name'>Enter Name:</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Enter Name'
              />
            </div>
            {/* email input */}
            <div className='inputs'>
              <label htmlFor='email'>Enter Email:</label>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Enter Email'
              />
            </div>

            {/* phone number input */}
            <div className='inputs'>
              <label htmlFor='phone'>Enter Phone:</label>
              <input
                type='number'
                id='phone'
                name='phone'
                placeholder='Enter Phone'
                minLength='4'
                maxLength='10'
              />
            </div>

            {/* message input */}
            <div className='inputs'>
              <label htmlFor='message'>Enter Message:</label>
              <textarea
                type='text'
                id='message'
                name='message'
                placeholder='Enter Message'
              />
            </div>

            {/* submit button */}
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
