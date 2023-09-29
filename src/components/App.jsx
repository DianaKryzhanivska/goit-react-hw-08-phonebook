import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, NotFound, Register } from 'pages';
import { Header } from './Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
