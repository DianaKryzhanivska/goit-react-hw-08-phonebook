import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contacts, Home, Login, NotFound, Register } from 'pages';
import { Layout } from './Layout';
import { PrivateRoute } from './Routes/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefresh } from 'redux/auth/selectors';
import { refreshThunk } from 'redux/auth/operations';
import { Spinner } from './Spinner/Spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Spinner />
  ) : (
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
