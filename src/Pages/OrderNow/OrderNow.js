import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import Footer from '../SharedComponents/Footer/Footer';
import LoadingSpinner from '../SharedComponents/LoadingSpinner/LoadingSpinner';
import Navigation from '../SharedComponents/Navigation/Navigation';
import './OrderNow.css';

const OrderNow = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [productCount, setProductCount] = useState(1);
  const { loggedInUser } = useAuth();
  const addressRef = useRef();
  const { name, description, price, image } = selectedProduct;
  const totalPrice = price * productCount;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    document.title = 'Book Now | Mobile Store';
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((res) => setSelectedProduct(res.data))
      .catch((err) => toast.err(err.message));
  }, [id]);

  const handleIncrease = () => setProductCount(productCount + 1);
  const handleDecrease = () =>
    productCount > 1 ? setProductCount(productCount - 1) : productCount;

  const placeOrder = () => {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date();
    const order = {};
    const year = date.getFullYear();
    const day = date.getDate();
    const monthName = month[date.getMonth()];
    order.productName = name;
    order.image = image;
    order.productQuantity = productCount;
    order.price = totalPrice;
    order.orderTime = `${day}-${monthName}-${year}`;
    order.userName = loggedInUser.displayName;
    order.email = loggedInUser.email;
    order.address = addressRef.current.value;
    order.status = 'Pending';
    axios.post('http://localhost:5000/order', order).then((res) => {
      if (res.status === 200) {
        swal({
          title: 'Congratulations!',
          text: `You Order ${productCount} pics of ${name}!!`,
          icon: 'success',
          button: 'OK!',
          position: 'center',
        });
        setProductCount(1);
        history.push('/dashboard/my-orders');
      }
    });
  };

  return (
    <>
      <Navigation />
      {!name ? (
        <LoadingSpinner />
      ) : (
        <div className='selected__product container'>
          <img src={image} alt={name} />
          <div className='order__content'>
            <span>
              <h3>{name}</h3>
              <p>{description}.</p>
              <h3>${totalPrice}</h3>
              <div>
                <h5 className='d-inline-block me-3'>Quantity:</h5>
                <span onClick={handleDecrease} className='minus__button'>
                  <FontAwesomeIcon icon={faMinus} />
                </span>
                <span className='total__quantity'>{productCount}</span>
                <span onClick={handleIncrease} className='plus__button'>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='form-control'
                  defaultValue={loggedInUser.displayName}
                  readOnly
                />
                <input
                  type='email'
                  placeholder='Your Email'
                  className='form-control'
                  defaultValue={loggedInUser.email}
                  readOnly
                />
                <input
                  type='text'
                  placeholder='Your Address (Optional)'
                  ref={addressRef}
                  className='form-control'
                />
              </div>
              <button className='brand__button' onClick={placeOrder}>
                Place Order
              </button>
            </span>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default OrderNow;
