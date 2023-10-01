import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AccountName,
  HeaderInfo,
  HeaderNav,
  HeaderNavBox,
  HeaderWrapper,
  LogoutButton,
} from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/operations';

export const Header = () => {
  const isLggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <header>
      <HeaderWrapper>
        <HeaderNavBox>
          <HeaderNav>
            <li>
              <NavLink to="/contacts">PhoneBook</NavLink>
            </li>
          </HeaderNav>
          {!isLggedIn && (
            <HeaderNav>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </HeaderNav>
          )}
        </HeaderNavBox>
        {isLggedIn && (
          <HeaderInfo>
            <AccountName>{name}</AccountName>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </HeaderInfo>
        )}
      </HeaderWrapper>
    </header>
  );
};
