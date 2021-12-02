import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useHistory } from 'react-router-dom';
import signupImg from '../../../assets/images/signup.png';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../SharedComponents/Footer/Footer';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import './SignUp.css';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({});
  const { emailSignup } = useAuth();
  const history = useHistory();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...signUpData };
    newData[field] = value;
    setSignUpData(newData);
  };

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    const name = signUpData.name;
    const email = signUpData.email;
    const password = signUpData.password;
    const confirmPassword = signUpData.confirmPassword;

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please Enter a valid Email Address..');
    } else if (password !== confirmPassword) {
      toast.error('Password not matched...');
    } else if (password.length < 8) {
      toast.error('Your Password must have 8 characters...');
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      toast.error('Password should be at least 1 Uppercase');
    } else if (!/(?=.*?[0-9])/.test(password)) {
      toast.error('Password should be at least 1 Number');
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      toast.error('Password should be at least 1 Spacial character');
    } else {
      emailSignup(name, email, password, history);
    }
  };

  return (
    <>
      <Navigation />
      <section className='signUp__bg'>
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
              <input type='submit' value='Sign Up' />
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
        <div className='password__information'>
          <ul className='brand__color'>
            Password must have
            <li>8 Characters</li>
            <li>1 Uppercase</li>
            <li>1 Number</li>
            <li>1 Spacial character</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
