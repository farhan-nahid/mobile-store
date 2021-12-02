import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import signupImg from '../../../assets/images/signup.png';
import Footer from '../../SharedComponents/Footer/Footer';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import './SignUp.css';

const SignUp = () => {
  return (
    <>
      <Navigation />
      <section className='login__bg'>
        <div className='container grid__container'>
          <div className='login__signUp__methods right__border'>
            <form className='login__signUp__input'>
              <div className='inputs'>
                <input type='text' required />
                <label>Your Name</label>
              </div>
              <div className='inputs'>
                <input type='text' required />
                <label>Your Email</label>
              </div>
              <div className='inputs'>
                <input type='password' required />
                <label>Password</label>
              </div>
              <div className='inputs'>
                <input type='password' required />
                <label>Confirm Password</label>
              </div>
              <input type='submit' value='Login' />
            </form>
            <p className='toggle__link'>
              Already have Account? <Link to='/login'>login</Link>
            </p>

            <h5 className='other__methods'>OR</h5>

            <button className='google__button'>
              <FontAwesomeIcon icon={faGoogle} />
              Google sign in
            </button>
            <button className='github__button'>
              <FontAwesomeIcon icon={faGithub} />
              GitHub sign in
            </button>
          </div>
          <div className='signup__img'>
            <img src={signupImg} alt='signup' />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
