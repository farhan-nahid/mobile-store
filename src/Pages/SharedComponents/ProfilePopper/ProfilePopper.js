import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './ProfilePopper.css';

const ProfilePopper = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const { loggedInUser, logOut } = useAuth();

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <img
        style={{ border: '1px solid #814096' }}
        onClick={handleClick}
        src={loggedInUser.photoURL}
        alt={loggedInUser.name}
        className='rounded-circle'
      />

      <Overlay show={show} target={target} placement='bottom' container={ref}>
        <Popover id='popover-contained' className='profile__body'>
          <Popover.Body>
            <img
              onClick={handleClick}
              src={loggedInUser.photoURL}
              alt={loggedInUser.name}
              className='rounded-circle profile__popper'
            />
            <h6>
              <strong>{loggedInUser.displayName}</strong>
            </h6>
            <p>
              <strong>{loggedInUser.email}</strong>
            </p>
            <button onClick={logOut} className='brand__button'>
              <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
            </button>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default ProfilePopper;
