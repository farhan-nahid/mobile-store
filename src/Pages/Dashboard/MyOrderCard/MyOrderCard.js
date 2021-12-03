import React from 'react';
import cross from '../../../assets/images/cross.png';
import './MyOrderCard.css';

const MyOrderCard = ({
  item: { _id, image, productName, productQuantity, orderTime, email },
}) => {
  const handleCancelOrder = (id) => {};
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
