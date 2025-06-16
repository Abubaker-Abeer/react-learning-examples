import React from 'react';
import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Root from './assets/Root';
import UserContextProvider from './components/context/User';
import { ToastContainer } from 'react-toastify';
export default function App() {
//const [isLogin, setIsLogin] = useState(localStorage.getItem("userToken") ? true : false);

/*function handleLogout() {
  localStorage.removeItem("userToken");
  setIsLogin(false);
  navigate('/login')
}*/
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Root /*isLogin={isLogin} setIsLogin={setIsLogin}*//>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login /*setIsLogin={setIsLogin}*/ />
      },
      {
        path: 'register',
        element:
         <Register />

      },
    ],
  },
]);

  return (
    <UserContextProvider>
           <RouterProvider router={router}/> 
           <ToastContainer position="top-right" autoClose={3000} />

    </UserContextProvider>

  );
}
