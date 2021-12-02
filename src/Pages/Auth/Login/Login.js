import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useHistory, useLocation } from 'react-router-dom';
import loginImg from '../../../assets/images/login.png';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../SharedComponents/Footer/Footer';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import './Login.css';

const Login = () => {
  const location = useLocation();
  const [signInData, setSignInData] = useState({});
  const { emailSignIn, googleSignIn, gitHubSignIn } = useAuth();
  const history = useHistory();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...signInData };
    newData[field] = value;
    setSignInData(newData);
  };

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(signInData.email)) {
      toast.error('Please Enter a valid Email Address..');
    } else {
      emailSignIn(signInData.email, signInData.password, history, location);
    }
  };

  return (
    <>
      <Navigation />
      <section className='login__bg'>
        <div className='container grid__container'>
          <div>
            <img src={loginImg} alt='login' />
          </div>
          <div className='login__signUp__methods'>
            <form className='login__signUp__input' onSubmit={handleEmailSignIn}>
              <div className='inputs'>
                <input
                  name='email'
                  type='text'
                  required
                  onBlur={handleBlur}
                  autoComplete='off'
                />
                <label>Email</label>
              </div>
              <div className='inputs'>
                <input
                  name='password'
                  type='password'
                  required
                  onBlur={handleBlur}
                />
                <label>Password</label>
              </div>
              <input type='submit' value='Login' />
            </form>
            <p className='toggle__link'>
              Don't have any Account? <Link to='/signup'>Sign up</Link>
            </p>

            <h5 className='other__methods'>OR</h5>

            <button
              className='google__button'
              onClick={() => googleSignIn(history, location)}
            >
              <FontAwesomeIcon icon={faGoogle} />
              Google sign in
            </button>
            <button
              className='github__button'
              onClick={() => gitHubSignIn(history, location)}
            >
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
