import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import deleteIcon from '../../../assets/images/delete.png';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import './ManageOrders.css';

const ManageOrders = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/all-orders')
      .then((res) => setAllOrder(res.data))
      .catch((err) => toast.err(err.message));
  }, []);

  const handleCancelOrder = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'After deleted you will not be able to recover this Order!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const loading = toast.loading('Deleting...Please Wait!!');
        axios
          .delete(`http://localhost:5000/order/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              swal('Your Order has been deleted!!', {
                icon: 'success',
              });
              const restOrders = allOrder.filter((order) => order._id !== id);
              setAllOrder(restOrders);
            }
          })
          .catch((err) => toast.error(err.message))
          .finally(() => toast.dismiss(loading));
      } else {
        swal('Your Order is safe!!');
      }
    });
  };

  const handleStatusChange = (id, status) => {
    const modifiedOrders = [];
    allOrder.forEach((order) => {
      if (order._id === id) {
        order.status = status;
      }
      modifiedOrders.push(order);
    });
    setAllOrder(modifiedOrders);

    const modifiedStatus = { id, status };
    const loading = toast.loading('Updating....Please wait!');
    axios
      .put(`http://localhost:5000/order/${id}`, modifiedStatus)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.dismiss(loading);
          toast.success(`Order is ${modifiedStatus.status}`);
        }
      })
      .catch((err) => {
        toast.dismiss(loading);
        toast.error(err.message);
      });
  };

  return (
    <section className='order__manage'>
      <h3>Manage Order</h3>
      <div className='order__manage__orders'>
        <div className='order__manage__content'>
          <div className='order__row'>
            <div className='order__col'>
              <h2>Order Name</h2>
            </div>
            <div className='order__col'>
              <h2>Email</h2>
            </div>
            <div className='order__col'>
              <h2>Time</h2>
            </div>
            <div className='order__col'>
              <h2>Action</h2>
            </div>
            <div className='order__col'>
              <h2>Status</h2>
            </div>
          </div>
          {allOrder.length ? (
            <>
              {allOrder.map((order) => (
                <div className='order__row' key={order._id}>
                  <div className='order__col'>
                    <h4>{order.productName}</h4>
                  </div>
                  <div className='order__col'>
                    <h4 className='text__center'>{order.email}</h4>
                  </div>
                  <div className='order__col align__items'>
                    <h4 className='text__center'>{order.orderTime}</h4>
                  </div>
                  <div className='order__col align__items'>
                    <span
                      className='orderAction__btn'
                      onClick={() => handleCancelOrder(order._id)}
                    >
                      <img src={deleteIcon} alt='deleteIcon' />
                    </span>
                  </div>
                  <div className='order__col'>
                    <select
                      className={
                        order.status === 'Pending'
                          ? 'btn btn-warning'
                          : order.status === 'Shipped'
                          ? 'btn btn-success'
                          : 'btn btn-danger'
                      }
                      defaultValue={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                    >
                      <option className='bg-white text-muted'>Pending</option>
                      <option className='bg-white text-muted'>Rejected</option>
                      <option className='bg-white text-muted'>Shipped</option>
                    </select>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </section>
  );
};

export default ManageOrders;
