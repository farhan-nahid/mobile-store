import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import deleteIcon from '../../../assets/images/delete.png';
import editIcon from '../../../assets/images/edit.png';
import useProducts from '../../../hooks/useProducts';
import LoadingSpinner from '../../SharedComponents/LoadingSpinner/LoadingSpinner';
import './ManageProduct.css';

const ManageProducts = () => {
  const [products, setProducts] = useProducts();
  const handleUpdateProduct = () => {};
  const handleDeleteProduct = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'After deleted you will not be able to recover this!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const loading = toast.loading('Deleting...Please Wait!!');
        axios
          .delete(`http://localhost:5000/product/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              swal('Your Selected Product has been deleted!!', {
                icon: 'success',
              });
              const restOrders = products.filter((order) => order._id !== id);
              setProducts(restOrders);
            }
          })
          .catch((err) => toast.error(err.message))
          .finally(() => toast.dismiss(loading));
      } else {
        swal('Your Selected Product is safe!!');
      }
    });
  };
  return (
    <section className='product__manage'>
      <h3>Manage product</h3>
      <div className='product__manage__products'>
        <div className='product__manage__content'>
          <div className='product__row'>
            <div className='product__col'>
              <h2>Sl No</h2>
            </div>
            <div className='product__col'>
              <h2>Product Name</h2>
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
              {products.map((product, idx) => (
                <div className='product__row' key={product._id}>
                  <div className='product__col'>
                    <h4>{idx + 1}</h4>
                  </div>
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
                      onClick={() => handleDeleteProduct(product._id)}
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
