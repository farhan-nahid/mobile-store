import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const history = useHistory();
  return (
    <nav>
      <ul className='navbar'>
        <ul className='logo'>
          <li>
            <NavLink to='/'>Mobile Store</NavLink>
          </li>
        </ul>

        <input type='checkbox' name='checkbox' id='click' />
        <label htmlFor='click'>
          <FontAwesomeIcon icon={faBars} />
        </label>

        <ul className='nav__items'>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/products'>Products</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
          <li>
            <button
              onClick={() => history.push('/login')}
              className='brand__button'
            >
              Login
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navigation;
