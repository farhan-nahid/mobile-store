import React, { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PreLoader from './Pages/SharedComponents/PreLoader/PreLoader';
import ScrollToTop from './Pages/SharedComponents/ScrollToTop/ScrollToTop';
const Home = lazy(() => import('./Pages/Home/Home/Home'));

function App() {
  return (
    <Router>
      <Toaster />
      <ScrollToTop />
      <Suspense fallback={<PreLoader />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
