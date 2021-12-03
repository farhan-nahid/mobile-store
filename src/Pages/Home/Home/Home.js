import React, { useEffect } from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Subscribe from '../Subscribe/Subscribe';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Mobile Store';
  }, []);

  return (
    <>
      <Navigation />
      <Banner />
      <Subscribe />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
