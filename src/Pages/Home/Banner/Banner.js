import React from 'react';
import bannerImg from '../../../assets/images/banner.png';
import rank from '../../../assets/images/rank.png';
import './Banner.css';

const Banner = () => {
  return (
    <section id='banner'>
      <div className='container banner__section'>
        <div className='banner__content'>
          <div>
            <div className='ranking__area'>
              <img src={rank} alt='rank' />
              <h6>#1 Best Seller of 2020</h6>
            </div>
            <h1>
              BEST MOBILE <span className='brand__color'>Showroom</span> For
              Your Modern Lifestyle
            </h1>
            <p>
              We provide best mobile phone to our customers. Honesty is the key
              of our success. We always try to make happy our customers. We
              treat our customers like our family member. So if you want to buy
              a new smartphone so we can easily trust us.
            </p>
            <button className='brand__button'>Order Now</button>
          </div>
        </div>
        <div className='banner__image'>
          <img src={bannerImg} alt='banner' />
        </div>
      </div>
    </section>
  );
};

export default Banner;
