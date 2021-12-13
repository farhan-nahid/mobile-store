import React, { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import resetImg from '../../../assets/images/forget-password.png';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../SharedComponents/Footer/Footer';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import './ResetPassword.css';

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const resetEmailRef = useRef();
  const handelReset = (e) => {
    e.preventDefault();
    const email = resetEmailRef.current.value;
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please Enter a valid Email Address..');
    } else {
      console.log(email);
      resetPassword(email, e);
    }
  };

  useEffect(() => {
    document.title = 'Reset Password | Mobile Store';
  }, []);

  return (
    <>
      <Navigation />
      <section className='reset__section container'>
        <div className='reset__container'>
          <img src={resetImg} alt='resetImg' />
          <form className='reset__email' onSubmit={handelReset}>
            <div className='inputs'>
              <input
                name='email'
                type='text'
                required
                ref={resetEmailRef}
                autoComplete='off'
              />
              <label>Email</label>
            </div>
            <button className='brand__button' type='submit'>
              Reset
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResetPassword;
