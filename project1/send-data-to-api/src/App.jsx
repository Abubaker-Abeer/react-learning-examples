import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
const [isLogin, setIsLogin] = useState(localStorage.getItem("userToken") ? true : false);
  const navigate = useNavigate();

function handleLogout() {
  localStorage.removeItem("userToken");
  setIsLogin(false);
  navigate('/login')
}
  return (
    <>
     <Navbar isLogin={isLogin}handleLogout={handleLogout} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />


        <Route path='/register' element={<Register />} />

        <Route path='*' element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}
