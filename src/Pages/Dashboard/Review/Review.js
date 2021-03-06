import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const Review = () => {
  const { loggedInUser } = useAuth();
  const [reviewData, setReviewData] = useState({
    image: loggedInUser.photoURL,
    name: loggedInUser.displayName,
    email: loggedInUser.email,
  });

  const handelBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...reviewData };
    newData[field] = value;
    setReviewData(newData);
  };

  const handelReviewSubmit = (e) => {
    const loading = toast.loading('Loading...Please Wait!!!');
    e.preventDefault();
    if (Number(reviewData.ratting) > 5) {
      reviewData.ratting = '5';
    }

    axios
      .post('https://mobiles--store.herokuapp.com/add-reviews', reviewData)
      .then((res) => {
        if (res.data.insertedId) {
          swal({
            title: 'Good job!',
            text: 'Your Review is successful!',
            icon: 'success',
            button: 'OK!',
          });
          e.target.reset();
        }
      })
      .catch((err) => toast.error(err.message))
      .finally(() => toast.dismiss(loading));
  };

  return (
    <section className='user__review'>
      <h3>Review Us</h3>
      <div className='review__form container'>
        <form className='review__input' onSubmit={handelReviewSubmit}>
          <div className='simple__grid'>
            <div className='inputs'>
              <input
                defaultValue={loggedInUser.displayName}
                name='name'
                type='text'
                required
                autoComplete='off'
                onBlur={handelBlur}
              />
              <label>Name</label>
            </div>
            <div className='ratting__area'>
              <label htmlFor='star__count'>Ratting</label>
              <select name='ratting' id='star__count' onBlur={handelBlur}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
          </div>
          <div className='inputs'>
            <input
              defaultValue={loggedInUser.email}
              name='email'
              type='text'
              required
              autoComplete='off'
              onBlur={handelBlur}
            />
            <label>Email</label>
          </div>
          <div className='inputs'>
            <textarea
              name='message'
              cols='30'
              rows='10'
              required
              onBlur={handelBlur}
            ></textarea>
            <label>Your Message</label>
          </div>
          <button type='submit' className='brand__button'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Review;
