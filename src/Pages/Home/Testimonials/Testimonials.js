import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get('https://mobiles--store.herokuapp.com/all-reviews')
      .then((res) => setTestimonials(res.data))
      .catch((err) => toast.error(err.message));
  }, []);

  return (
    <section className='testimonials container'>
      <h3>Testimonials</h3>
      {testimonials.length ? (
        <div className='testimonial__container'>
          {testimonials.map((review) => (
            <Testimonial key={review._id} review={review} />
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default Testimonials;
