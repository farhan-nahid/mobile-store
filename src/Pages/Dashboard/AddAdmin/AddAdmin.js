import axios from 'axios';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import './AddAdmin.css';

const AddAdmin = () => {
  const adminRef = useRef();

  const handelAdmin = (e) => {
    e.preventDefault();
    const loading = toast.loading('Adding as Admin... Please wait!!!');
    const email = adminRef.current.value;
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please Enter a valid Email Address..');
    } else {
      const user = { email: email };
      axios
        .put('https://mobiles--store.herokuapp.com/users/admin', user)
        .then((res) => {
          if (res.data.matchedCount) {
            swal({
              title: 'Good job!',
              text: `You Added ${user.email} as an Admin!!!`,
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
    <section className='add__admin'>
      <h3>Add New Admin</h3>
      <form onSubmit={handelAdmin} className='admin__add__form'>
        <div className='inputs'>
          <input
            name='name'
            type='text'
            required
            autoComplete='off'
            ref={adminRef}
          />
          <label>Admin Email</label>
        </div>
        <input type='submit' value='Submit' className='brand__button' />
      </form>
    </section>
  );
};

export default AddAdmin;
