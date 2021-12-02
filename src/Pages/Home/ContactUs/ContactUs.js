import React from 'react';
import contactImg from '../../../assets/images/contact-me.png';
import './ContactUs.css';

const ContactUs = () => {
  const handelSubmit = (e) => e.preventDefault();

  return (
    <section className='container'>
      <div className='contact'>
        <div className='contact__image'>
          <img src={contactImg} alt='contact' />
        </div>
        <div className='contact__form'>
          <h2 className='brand__color'>Contact Us</h2>
          <form className='contact__input' onSubmit={handelSubmit}>
            <div className='inputs'>
              <input type='text' required />
              <label>Name</label>
            </div>
            <div className='inputs'>
              <input type='text' required />
              <label>Email</label>
            </div>
            <div className='inputs'>
              <input type='number' required />
              <label>Phone</label>
            </div>
            <div className='inputs'>
              <input type='text' required />
              <label>Your Message</label>
            </div>
            <button type='submit' className='brand__button'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
