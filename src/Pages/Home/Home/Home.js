import React, { useEffect } from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Counter from '../Counter/Counter';
import LoanSystem from '../LoanSystem/LoanSystem';
import Products from '../Products/Products';
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
      <Products />
      <Subscribe />
      <LoanSystem />
      <Counter />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
