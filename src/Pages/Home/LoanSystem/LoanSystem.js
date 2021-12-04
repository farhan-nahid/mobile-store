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
                <i className='fas fa-check-circle right__icon'></i> 1000+
                Downloads
              </li>
              <li>
                <i className='fas fa-times-circle wrong__icon'></i> Unlimited
                Storage
              </li>
              <li>
                <i className='fas fa-check-circle right__icon'></i> 5 Downloads
              </li>
              <li>
                <i className='fas fa-times-circle wrong__icon'></i> No
                Transaction Fees
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
                <i className='fas fa-check-circle right__icon'></i> 1000+
                Downloads
              </li>
              <li>
                <i className='fas fa-times-circle wrong__icon'></i> Unlimited
                Storage
              </li>
              <li>
                <i className='fas fa-check-circle right__icon'></i> 5 Downloads
              </li>
              <li>
                <i className='fas fa-check-circle right__icon'></i> No
                Transaction Fees
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
                <i className='fas fa-check-circle right__icon'></i> 1000+
                Downloads
              </li>
              <li>
                <i className='fas fa-check-circle right__icon'></i> Unlimited
                Storage
              </li>
              <li>
                <i className='fas fa-check-circle right__icon'></i> 5 Downloads
              </li>
              <li>
                <i className='fas fa-check-circle right__icon'></i> No
                Transaction Fees
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
