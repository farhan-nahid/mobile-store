import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import PreLoader from '../../SharedComponents/PreLoader/PreLoader';

const AdminRoute = ({ children, ...rest }) => {
  const [admin, setAdmin] = useState(false);
  const { loggedInUser, isLoading } = useAuth();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${loggedInUser.email}`)
      .then((res) => setAdmin(res.data?.admin))
      .catch((err) => toast.error(err.message));
  }, [loggedInUser.email]);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <Route
          {...rest}
          render={({ location }) =>
            loggedInUser && admin ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: location },
                }}
              />
            )
          }
        />
      )}
    </>
  );
};

export default AdminRoute;
