import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { Outlet } from 'react-router-dom';

export default function Root(/*{isLogin,setIsLogin}*/) {
  return (
    <>
      <Navbar /*isLogin={isLogin }setIsLogin={setIsLogin} *//>
      <Outlet />
    </>
  );
}

