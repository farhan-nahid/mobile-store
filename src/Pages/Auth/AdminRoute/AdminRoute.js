import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import PreLoader from '../../SharedComponents/PreLoader/PreLoader';

const AdminRoute = ({ children, ...rest }) => {
  const { loggedInUser, isLoading, isAdmin } = useAuth();

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <Route
          {...rest}
          render={({ location }) =>
            loggedInUser && isAdmin ? (
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
