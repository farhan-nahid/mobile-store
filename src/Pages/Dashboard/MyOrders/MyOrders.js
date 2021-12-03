import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import MyOrderCard from '../MyOrderCard/MyOrderCard';
import './MyOrders.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { loggedInUser } = useAuth();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/all-orders?email=${loggedInUser.email}`)
      .then((res) => setOrders(res.data))
      .catch((err) => toast.error(err.message));
  }, [loggedInUser.email]);

  return (
    <section className='my__order__container'>
      <h3>This is my Order</h3>
      {orders.length ? (
        <div className='my__orders'>
          {orders.map((item) => (
            <MyOrderCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </section>
  );
};

export default MyOrders;
