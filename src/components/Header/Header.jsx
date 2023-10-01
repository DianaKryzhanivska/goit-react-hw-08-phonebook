import React from 'react';
import {
  AccountName,
  HeaderInfo,
  HeaderNav,
  HeaderNavBox,
  HeaderWrapper,
  LogoutButton,
  StyledNavLink,
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
              <StyledNavLink to="/contacts">PhoneBook</StyledNavLink>
            </li>
          </HeaderNav>
          {!isLggedIn && (
            <HeaderNav>
              <li>
                <StyledNavLink to="/login">Login</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/register">Register</StyledNavLink>
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
