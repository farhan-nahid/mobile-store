import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import PreLoader from '../../SharedComponents/PreLoader/PreLoader';

const PrivateRoute = ({ children, ...rest }) => {
  const { loggedInUser, isLoading } = useAuth();

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <Route
          {...rest}
          render={({ location }) =>
            loggedInUser ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
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

export default PrivateRoute;
