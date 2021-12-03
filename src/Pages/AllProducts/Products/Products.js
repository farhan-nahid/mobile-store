import React, { useEffect } from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../../Home/Product/Product';
import Footer from '../../SharedComponents/Footer/Footer';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import Navigation from '../../SharedComponents/Navigation/Navigation';
import './Products.css';

const Products = () => {
  const [products] = useProducts();

  useEffect(() => {
    document.title = 'All Products | Mobile Store';
  }, []);

  return (
    <>
      <Navigation />
      <div className='all__products container'>
        <h3>Our Best Products</h3>
        {products.length ? (
          <div className='all__product__container'>
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Products;
