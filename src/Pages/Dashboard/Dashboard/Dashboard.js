import {
  faHome,
  faList,
  faMoneyBillAlt,
  faPlus,
  faQuoteLeft,
  faShoppingBag,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Auth/AdminRoute/AdminRoute';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Profile from '../Profile/Profile';
import Review from '../Review/Review';
import './Dashboard.css';

const Dashboard = () => {
  const [admin, setAdmin] = useState(false);
  let { path, url } = useRouteMatch();
  const { logOut, loggedInUser } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${loggedInUser.email}`)
      .then((res) => setAdmin(res.data?.admin))
      .catch((err) => toast.error(err.message));
  }, [loggedInUser.email]);

  console.log(admin);

  useEffect(() => {
    document.title = 'Dashboard | Mobile Store';
  }, []);

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
            {!admin ? (
              <>
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
                  <NavLink
                    to={`${url}/review`}
                    activeClassName='sidebar__active'
                  >
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
              </>
            ) : (
              <>
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
                <li>
                  <NavLink
                    to={`${url}/add-admin`}
                    activeClassName='sidebar__active'
                  >
                    {' '}
                    <FontAwesomeIcon icon={faPlus} />
                    Add Admin
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`${url}/manage-products`}
                    activeClassName='sidebar__active'
                  >
                    {' '}
                    <FontAwesomeIcon icon={faList} />
                    Manage Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`${url}/manage-orders`}
                    activeClassName='sidebar__active'
                  >
                    {' '}
                    <FontAwesomeIcon icon={faList} />
                    Manage Orders
                  </NavLink>
                </li>
              </>
            )}
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
          <AdminRoute path={`${path}/add-product`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/manage-products`}>
            <ManageProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/manage-orders`}>
            <ManageOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/add-admin`}>
            <AddAdmin />
          </AdminRoute>
          {/* <Route path={`${path}/add-product`} component={AddProduct} />
          <Route path={`${path}/manage-products`} component={ManageProducts} />
          <Route path={`${path}/manage-orders`} component={ManageOrders} />
          <Route path={`${path}/add-admin`} component={AddAdmin} /> */}
        </Switch>
      </div>
    </section>
  );
};

export default Dashboard;
