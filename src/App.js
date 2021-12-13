import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Auth/PrivateRoute/PrivateRoute';
import PreLoader from './Pages/SharedComponents/PreLoader/PreLoader';
import ScrollToTop from './Pages/SharedComponents/ScrollToTop/ScrollToTop';
const Home = lazy(() => import('./Pages/Home/Home/Home'));
const Login = lazy(() => import('./Pages/Auth/Login/Login'));
const SignUp = lazy(() => import('./Pages/Auth/SignUp/SignUp'));
const OrderNow = lazy(() => import('./Pages/OrderNow/OrderNow'));
const Products = lazy(() => import('./Pages/AllProducts/Products/Products'));
const ResetPass = lazy(() => import('./Pages/Auth/ResetPass/ResetPassword'));
const Dashboard = lazy(() => import('./Pages/Dashboard/Dashboard/Dashboard'));
const NotFoundRoute = lazy(() => import('./Pages/NotFoundRoute/NotFoundRoute'));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster />
        <ScrollToTop />
        <Suspense fallback={<PreLoader />}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/reset-password' component={ResetPass} />
            <PrivateRoute path='/order/:id'>
              <OrderNow />
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <Route path='*' component={NotFoundRoute} />
          </Switch>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
