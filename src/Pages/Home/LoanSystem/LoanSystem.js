import React from 'react';
import './LoanSystem.css';

const LoadSystem = () => {
  return (
    <section id='loan'>
      <div className='container'>
        <h3>Our Loan System</h3>
        <div className='loan_cards__container'>
          <div className='loan_single__card'>
            <i className='fas fa-comment-dollar loan__icon'></i>
            <h3 className='card__heading'>Basic</h3>
            <p>
              <span className='price'>$10</span> \Monthly
            </p>
            <ul>
              <li>
                <i className='fas fa-check-circle right__icon'></i> Service
                Warranty
              </li>
              <li>
                <i className='fas fa-times-circle wrong__icon'></i> Eid Offer
              </li>
              <li>
                <i className='fas fa-check-circle right__icon'></i> 2 year Time
              </li>
              <li>
                <i className='fas fa-times-circle wrong__icon'></i> Exchange
                Offer
              </li>
            </ul>
            <button className='brand__button'>Check Out</button>
          </div>

          <div className='loan_single__card'>
            <i className='fas fa-comment-dollar loan__icon'></i>
            <h3 className='card__heading'>Standards</h3>
            <p>
              <span className='price'>$15</span> \Monthly
            </p>
            <ul>
              <li>
                <i className='fas fa-check-circle right__icon'></i> Eid Offer
              </li>
              <li>
                <i className='fas fa-times-circle wrong__icon'></i> Exchange
                Offer
              </li>
              <li>
                <i className='fas fa-check-circle right__icon'></i> Service
                Warranty
              </li>
              <li>
                <i className='fas fa-check-circle right__icon'></i> 2 year Time
              </li>
            </ul>
            <button className='brand__button'>Check Out</button>
          </div>

          <div className='loan_single__card'>
            <i className='fas fa-comment-dollar loan__icon'></i>
            <h3 className='card__heading'>Premium</h3>
            <p>
              <span className='price'>$30</span> \Monthly
            </p>
            <ul>
              <li>
                <i className='fas fa-check-circle right__icon'></i> Eid Offer
              </li>
              <li>
                <i className='fas fa-check-circle right__icon'></i> Service
                Warranty
              </li>
              <li>
                <i className='fas fa-check-circle right__icon'></i> Exchange
                Offer
              </li>
              <li>
                <i className='fas fa-check-circle right__icon'></i> 2 year Time
              </li>
            </ul>
            <button className='brand__button'>Check Out</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadSystem;
