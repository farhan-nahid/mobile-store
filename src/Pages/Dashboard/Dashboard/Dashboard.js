import {
  faHome,
  faMoneyBillAlt,
  faPlus,
  faQuoteLeft,
  faShoppingBag,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Profile from '../Profile/Profile';
import Review from '../Review/Review';
import './Dashboard.css';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  useEffect(() => {
    document.title = 'Dashboard | Mobile Store';
  }, []);

  const { logOut } = useAuth();

  return (
    <section className='dashboard__grid'>
      <aside>
        <NavLink to='/'>
          <h3 className='brand__color'>Mobile Store</h3>
        </NavLink>
        <div className='aside__nav'>
          <ul className='aside__nav__link'>
            <li>
              <NavLink to={`${url}/profile`} activeClassName='sidebar__active'>
                {' '}
                <FontAwesomeIcon icon={faUser} /> My Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/my-orders`}
                activeClassName='sidebar__active'
              >
                {' '}
                <FontAwesomeIcon icon={faShoppingBag} /> My Orders
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/review`} activeClassName='sidebar__active'>
                {' '}
                <FontAwesomeIcon icon={faQuoteLeft} />
                Review
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/pay`} activeClassName='sidebar__active'>
                {' '}
                <FontAwesomeIcon icon={faMoneyBillAlt} /> Pay Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/add-product`}
                activeClassName='sidebar__active'
              >
                {' '}
                <FontAwesomeIcon icon={faPlus} />
                Add Product
              </NavLink>
            </li>
            <li onClick={logOut}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to='/' className='brand__button'>
                {' '}
                <FontAwesomeIcon icon={faHome} /> Back to Home
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      <div className='container'>
        <Switch>
          <Route exact path={path} component={Profile} />
          <Route path={`${path}/profile`} component={Profile} />
          <Route path={`${path}/my-orders`} component={MyOrders} />
          <Route path={`${path}/review`} component={Review} />
          <Route path={`${path}/pay`} component={Pay} />
          <Route path={`${path}/add-product`} component={AddProduct} />
        </Switch>
      </div>
    </section>
  );
};

export default Dashboard;
