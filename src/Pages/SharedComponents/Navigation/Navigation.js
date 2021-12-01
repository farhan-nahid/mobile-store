import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul className='navbar'>
        <ul className='logo'>
          <li>
            <a href='#'>Mobile Store</a>
          </li>
        </ul>

        <input type='checkbox' name='checkbox' id='click' />
        <label for='click'>
          <FontAwesomeIcon icon={faBars} />
        </label>

        <ul className='nav__items'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#feature'>Products</a>
          </li>
          <li>
            <a href='#about'>Dashboard</a>
          </li>
          <li>
            <a href='#review'>Review</a>
          </li>
          <li>
            <a href='#pricing'>Pricing</a>
          </li>
          <li>
            <a href='#contact__us'>Contact</a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navigation;
