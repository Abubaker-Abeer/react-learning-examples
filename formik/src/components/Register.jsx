import { useFormik } from 'formik';
import React from 'react';

export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async() => {
      const response = await fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formik.values)
});

console.log(response);

    },
    

  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          id="floatingName"
          placeholder="User Name"
        />
        <label htmlFor="floatingName">User Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          id="floatingEmail"
          placeholder="User Email"
        />
        <label htmlFor="floatingEmail">User Email</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          id="floatingPassword"
          placeholder="User Password"
        />
        <label htmlFor="floatingPassword">User Password</label>
      </div>

      <button type="submit" className="btn btn-outline-info">
        Register
      </button>
    </form>
  );
}
