import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Profile from './components/Profile/Profile';

function App() {

  return (
    <>
        <Navbar/> 
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<RegisterPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
          <Route path="/app/profile" element={<Profile/>} />
        </Routes>
        </> 
  );
}

export default App;
