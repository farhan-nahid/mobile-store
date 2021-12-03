import React from 'react';
import deleteIcon from '../../../assets/images/delete.png';
import editIcon from '../../../assets/images/edit.png';
import useProducts from '../../../hooks/useProducts';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import './ManageProduct.css';

const ManageProducts = () => {
  const [products] = useProducts();
  const handleUpdateProduct = () => {};
  const handleDeleteProduct = () => {};
  return (
    <section className='product__manage'>
      <h3>Manage product</h3>
      <div className='product__manage__products'>
        <div className='product__manage__content'>
          <div className='product__row'>
            <div className='product__col'>
              <h2>product Name</h2>
            </div>
            <div className='product__col'>
              <h2>Price</h2>
            </div>
            <div className='product__col'>
              <h2>Action</h2>
            </div>
          </div>
          {products.length ? (
            <>
              {products.map((product) => (
                <div className='product__row' key={product._id}>
                  <div className='product__col'>
                    <h4>{product.name}</h4>
                  </div>
                  <div className='product__col'>
                    <h4 className='text__center'>${product.price}</h4>
                  </div>
                  <div className='product__col align__items'>
                    <span
                      className='productAction__btn me-2'
                      onClick={handleUpdateProduct}
                    >
                      <img src={editIcon} alt='editIcon' />
                    </span>
                    <span
                      className='productAction__btn'
                      onClick={handleDeleteProduct}
                    >
                      <img src={deleteIcon} alt='deleteIcon' />
                    </span>
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

export default ManageProducts;
