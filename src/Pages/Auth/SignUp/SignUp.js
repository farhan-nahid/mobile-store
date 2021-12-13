import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useHistory } from 'react-router-dom';
import gitHubIcon from '../../../assets/images/github.png';
import googleIcon from '../../../assets/images/google.png';
import signupImg from '../../../assets/images/signup.png';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../SharedComponents/Footer/Footer';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import './SignUp.css';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({});
  const history = useHistory();
  const { emailSignup, googleSignIn, gitHubSignIn } = useAuth();

  useEffect(() => {
    document.title = 'SignUp | Mobile Store';
  }, []);

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
        <div className='container flex__container'>
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

            <button
              className='google__button'
              onClick={() => googleSignIn(history, '/')}
            >
              <img src={googleIcon} alt='googleIcon' />
              Google sign in
            </button>
            <button
              className='github__button'
              onClick={() => gitHubSignIn(history, '/')}
            >
              <img src={gitHubIcon} alt='gitHubIcon' />
              GitHub sign in
            </button>
          </div>
          <div className='signUp__img'>
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
