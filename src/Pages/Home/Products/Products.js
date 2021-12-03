import React from 'react';
import useProducts from '../../../hooks/useProducts';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
  const [products] = useProducts();
  const sixProduct = products.slice(0, 6);
  return (
    <section className='products'>
      <div className='container'>
        <h3>Our Best Products</h3>
        {sixProduct.length ? (
          <div className='product__container'>
            {sixProduct.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </section>
  );
};

export default Products;
