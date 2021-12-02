import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/images/login.png';
import Footer from '../../SharedComponents/Footer/Footer';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import './Login.css';

const Login = () => {
  return (
    <>
      <Navigation />
      <section className='login__bg'>
        <div className='container grid__container'>
          <div>
            <img src={loginImg} alt='login' />
          </div>
          <div className='login__signUp__methods'>
            <form className='login__signUp__input'>
              <div className='inputs'>
                <input type='text' required />
                <label>Email</label>
              </div>
              <div className='inputs'>
                <input type='password' required />
                <label>Password</label>
              </div>
              <input type='submit' value='Login' />
            </form>
            <p className='toggle__link'>
              Don't have any Account? <Link to='/signup'>Sign up</Link>
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
