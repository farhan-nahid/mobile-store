import React from 'react';
import { useHistory } from 'react-router-dom';
import './Product.css';

const Product = ({ product: { _id, name, image, price, description } }) => {
  const history = useHistory();
  return (
    <div className='product__card'>
      <img src={image} alt={name} />
      <div className='card__content'>
        <h4>{name}</h4>
        <p>{description}</p>
        <div className='card__price__button'>
          <h4>${price}</h4>
          <button
            className='brand__button'
            onClick={() => history.push(`/order/${_id}`)}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
