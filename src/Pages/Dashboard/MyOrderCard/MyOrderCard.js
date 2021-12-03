import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import cross from '../../../assets/images/cross.png';
import './MyOrderCard.css';

const MyOrderCard = ({ item, orders, setOrders }) => {
  const { _id, image, productName, productQuantity, orderTime, email } = item;

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
              const restOrders = orders.filter((order) => order._id !== id);
              setOrders(restOrders);
            }
          })
          .catch((err) => toast.error(err.message))
          .finally(() => toast.dismiss(loading));
      } else {
        swal('Your Order is safe!!');
      }
    });
  };

  return (
    <div className='orders__details container'>
      <img
        src={cross}
        className='delete'
        alt='cross'
        onClick={(e) => handleCancelOrder(_id)}
      />
      <div className='order'>
        <img src={image} alt={productName} />
        <div className='order__details'>
          <h5>Mobile : {productName}</h5>
          <h6>Quantity : {productQuantity}</h6>
          <h6>Date : {orderTime}</h6>
          <p>Email : {email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyOrderCard;
