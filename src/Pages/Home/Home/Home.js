import React from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
