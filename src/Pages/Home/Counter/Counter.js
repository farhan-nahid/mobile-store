import {
  faMobile,
  faStar,
  faUser,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Counter.css';

const Counter = () => {
  return (
    <section className='counter'>
      <div className='container counter__container'>
        <div className='single__counter'>
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h5>1550+</h5>
          <p>Satisfied Customers</p>
        </div>

        <div className='single__counter'>
          <span>
            <FontAwesomeIcon icon={faMobile} />
          </span>
          <h5>200+</h5>
          <p>Available Phones</p>
        </div>

        <div className='single__counter'>
          <span>
            <FontAwesomeIcon icon={faUserSecret} />
          </span>
          <h5>12+</h5>
          <p>Total Sales Man</p>
        </div>

        <div className='single__counter'>
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          <h5>6000+</h5>
          <p>Total Ratting</p>
        </div>
      </div>
    </section>
  );
};

export default Counter;
