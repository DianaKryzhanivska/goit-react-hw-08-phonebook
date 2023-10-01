import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contacts, Home, Login, NotFound, Register } from 'pages';
import { Layout } from './Layout';
import { PrivateRoute } from './Routes/PrivateRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
