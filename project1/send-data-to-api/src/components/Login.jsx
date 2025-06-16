import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/User';
import { useContext } from 'react';
import {useState} from "react";
import { toast } from 'react-toastify';

const schema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .min(5, 'Too short')
    .max(50, 'Too long')
    .email('Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(2, 'Too short')
    .max(50, 'Too long'),
});

export default function Login(/*{ setIsLogin }*/) {
  const {setIsLogin}=useContext(UserContext)
  const [errorMessage,seterrorMessage]=useState("")

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: LoginUser,
  });

  async function LoginUser() {
    try {
      const { data } = await axios.post(
        'http://localhost:3000/auth/login',
        formik.values
      );
      console.log(data);
      if (data.message === 'success') {
        localStorage.setItem('userToken', data.token);
        setIsLogin(true);
         toast.success("Login successful 🎉");
        navigate('/'); // الانتقال للصفحة الرئيسية بعد تسجيل الدخول
      }
    } catch (error) {
seterrorMessage(error.response?.data?.message || "Login failed");
 toast.error(msg); 
  console.error('Login failed:', error.response?.data || error.message);
    }
  }

  return (
    <>
    {errorMessage?
    <div className="alert alert-danger">
     {errorMessage}
    </div>: null}
    <form onSubmit={formik.handleSubmit}>

      <div className="form-floating mb-3">
        <input
          type="email"
          className={`form-control ${
            formik.errors.email && formik.touched.email ? 'is-invalid' : ''
          }`}
          name="email"
          id="email"
          placeholder="name@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="email">Email address</label>
        {formik.touched.email && formik.errors.email && (
          <div className="text-danger">{formik.errors.email}</div>
        )}
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className={`form-control ${
            formik.errors.password && formik.touched.password
              ? 'is-invalid'
              : ''
          }`}
          name="password"
          id="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="password">Password</label>
        {formik.touched.password && formik.errors.password && (
          <div className="text-danger">{formik.errors.password}</div>
        )}
      </div>

      <button type="submit" className="btn btn-outline-info">
        Login 
      </button>
    </form>
    </>
  );
}

