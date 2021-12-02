import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import PreLoader from './Pages/SharedComponents/PreLoader/PreLoader';
import ScrollToTop from './Pages/SharedComponents/ScrollToTop/ScrollToTop';
const Home = lazy(() => import('./Pages/Home/Home/Home'));
const Login = lazy(() => import('./Pages/Auth/Login/Login'));
const SignUp = lazy(() => import('./Pages/Auth/SignUp/SignUp'));
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
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='*' component={NotFoundRoute} />
          </Switch>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
