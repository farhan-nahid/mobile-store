import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Testimonial.css';

const showRating = (star) => {
  const stars = [];
  const int = parseInt(star, 10);
  for (let i = 1; i <= int; i++) {
    stars.push(
      <FontAwesomeIcon key={i} className='rating__icon' icon={faStar} />
    );
  }
  return <div>{stars}</div>;
};

const Testimonial = ({ review: { ratting, image, name, message, email } }) => {
  return (
    <div className='testimonial__card'>
      <div className='testimonial__image'>
        <img src={image} alt={name} />
      </div>
      <i className='fas fa-quote-right quote__icon__right'></i>
      <i className='fas fa-quote-left quote__icon__left'></i>
      <h5 className='brand__color'>{name}</h5>
      <div className='testimonial__description'>
        <p>{message}</p>
      </div>
      {showRating(ratting)}
      <h6>{email}</h6>
    </div>
  );
};

export default Testimonial;
