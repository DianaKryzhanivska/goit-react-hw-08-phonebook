import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, NotFound, Register } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
