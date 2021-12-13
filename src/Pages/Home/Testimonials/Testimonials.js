import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

SwiperCore.use([Pagination, Autoplay]);

const swiperSettings = {
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  spaceBetween: 20,
  slidesPerView: 3,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
};

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
        <Swiper {...swiperSettings}>
          {testimonials.map((review) => (
            <SwiperSlide key={review._id}>
              <Testimonial review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default Testimonials;
