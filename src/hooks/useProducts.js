import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://mobiles--store.herokuapp.com/all-products')
      .then((res) => setProducts(res.data))
      .catch((err) => toast.error(err.message));
  }, []);
  return [products, setProducts];
};

export default useProducts;
