import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='footer__grid'>
          <div className='about__us'>
            <h3>About us</h3>
            <p>
              We provide best mobile phone to our customers. Honesty is the key
              of our success. We always try to make happy our customers. We
              treat our customers like our family member.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/'>Feature</NavLink>
              </li>
              <li>
                <NavLink to='/'>About</NavLink>
              </li>
              <li>
                <NavLink to='/'>Review</NavLink>
              </li>
              <li>
                <NavLink to='/'>Pricing</NavLink>
              </li>
              <li>
                <NavLink to='/'>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a
                  href='https://www.facebook.com/dev.farhanNahid/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/farhan-nahid'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/farhan-nahid/'
                  target='_blank'
                  rel='noreferrer'
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/farhan__nahid/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='https://farhan-nahid.medium.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <address>
            <h3>Contact Us</h3>

            <div className='phone'>
              <div className='flex__area'>
                <div>
                  <i className='fas fa-phone'></i>
                </div>
                <div>
                  <p>+88018XXXXXXXX</p>
                  <p>+88019XXXXXXXX</p>
                </div>
              </div>
            </div>

            <div className='mail'>
              <div className='flex__area'>
                <div>
                  <i className='fas fa-envelope'></i>
                </div>
                <div>
                  <p>test@email.com</p>
                  <p>example@gmail.com</p>
                </div>
              </div>
            </div>

            <div className='location'>
              <div className='flex__area'>
                <div>
                  <i className='fas fa-map-marker-alt'></i>
                </div>
                <div>
                  <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                </div>
              </div>
            </div>
          </address>
        </div>
      </div>

      <div className='copyright container'>
        <p>Copyright &copy; All Right Reserved by Farhan</p>
      </div>
    </footer>
  );
};

export default Footer;
