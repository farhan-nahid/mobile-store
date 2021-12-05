import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import './AddProduct.css';

const AddProduct = () => {
  const [data, setData] = useState({});
  const [image, setImage] = useState('');

  const handelBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...data };
    newData[field] = value;
    setData(newData);
  };

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set('key', '1c7b42d86523b93639ae849aae708b2e');
    imageData.append('image', e.target.files[0]);
    const loading = toast.loading('Uploading... Please wait!');
    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then((res) => {
        if (res.status === 200) {
          toast.success('Successfully Upload The Image...!!!');
          setImage(res.data.data.display_url);
        }
      })
      .catch((error) => toast.error(error.message))
      .finally(() => toast.dismiss(loading));
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const loading = toast.loading('Inserting a new product... Please wait!!!');
    if (!image) {
      toast.dismiss(loading);
      toast.error('Please Upload a Image');
    } else {
      const product = data;
      product.image = image;
      axios
        .post('https://mobiles--store.herokuapp.com/add-product', product)
        .then((res) => {
          if (res.data.insertedId) {
            swal({
              title: 'Good job!',
              text: `${product.name} is successfully Added!`,
              icon: 'success',
              button: 'OK!',
            });
            e.target.reset();
          }
        })
        .catch((err) => toast.error(err.message))
        .finally(() => toast.dismiss(loading));
    }
  };
  return (
    <section className='add__product'>
      <h3> Add Product</h3>
      <div className='container'>
        <h5 className='warning__text'>
          Please upload a image (PNG, JPG, JPEG)
        </h5>
        <form className='add__product__form' onSubmit={handleProductSubmit}>
          <div className='inputs'>
            <input
              name='name'
              type='text'
              required
              autoComplete='off'
              onBlur={handelBlur}
            />
            <label>Product Name</label>
          </div>
          <div className='inputs'>
            <input
              name='price'
              type='number'
              required
              autoComplete='off'
              onBlur={handelBlur}
            />
            <label>Product Price</label>
          </div>

          <div className='inputs'>
            <textarea
              name='description'
              required
              autoComplete='off'
              onBlur={handelBlur}
            />
            <label>Product Description</label>
          </div>
          <div className='input__sm'>
            <input
              type='file'
              name='image'
              id='file'
              className='inputFile'
              onChange={handleImageUpload}
            />
            <label htmlFor='file'>
              {' '}
              <FontAwesomeIcon icon={faUpload} /> Choose an Image
            </label>
          </div>

          <div className='add__button'>
            <input type='submit' className='brand__button mt-5' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
