import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <section id='subscribe'>
      <div className='container'>
        <h2>SUBSCRIBE FOR NEW FEATURES</h2>
        <p>
          We Provide some offers for our spacial customers regularly. If you
          want to be a spacial customer please subscribe us. So that when we
          provide offers we can notify you quickly.
        </p>
        <form className='email__form' onSubmit={handleSubmit}>
          <input
            type='email'
            id='email'
            name='subscribe'
            autoComplete='none'
            placeholder='Enter Your Email'
            required
          />
          <button type='submit' className='submit__button'>
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
