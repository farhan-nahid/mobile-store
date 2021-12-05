import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Profile.css';

const Profile = () => {
  const {
    loggedInUser: { photoURL, displayName, email },
    logOut,
  } = useAuth();
  return (
    <section className='my__profile'>
      <h3>My Profile</h3>
      <div className='container profile__container'>
        <img src={photoURL} alt={displayName} />
        <h5>{displayName}</h5>
        <p>{email}</p>
        <button className='brand__button' onClick={logOut}>
          Log Out
        </button>
      </div>
    </section>
  );
};

export default Profile;
