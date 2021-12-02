import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signupImg from '../../../assets/images/signup.png';
import Footer from '../../SharedComponents/Footer/Footer';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import './SignUp.css';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({});

  const handleBlur = (e) => {
    const field = e.target.name;
    console.log(field);
    const value = e.target.value;
    console.log(value);
    const newData = { ...signUpData };
    newData[field] = value;
    setSignUpData(newData);
  };

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    console.log(signUpData);
  };

  return (
    <>
      <Navigation />
      <section className='login__bg'>
        <div className='container grid__container'>
          <div className='right__border'>
            <form className='login__signUp__input' onSubmit={handleEmailSignUp}>
              <div className='inputs'>
                <input
                  name='name'
                  type='text'
                  required
                  onBlur={handleBlur}
                  autoComplete='none'
                />
                <label>Your Name</label>
              </div>
              <div className='inputs'>
                <input
                  name='email'
                  type='text'
                  required
                  onBlur={handleBlur}
                  autoComplete='off'
                />
                <label>Your Email</label>
              </div>
              <div className='inputs'>
                <input
                  type='password'
                  required
                  onBlur={handleBlur}
                  name='password'
                />
                <label>Password</label>
              </div>
              <div className='inputs'>
                <input
                  type='password'
                  required
                  onBlur={handleBlur}
                  name='confirmPassword'
                />
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
