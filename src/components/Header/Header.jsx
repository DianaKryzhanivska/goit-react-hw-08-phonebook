import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AccountName,
  HeaderInfo,
  HeaderNav,
  HeaderWrapper,
  LogoutButton,
} from './Header.styled';

export const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <nav>
          <HeaderNav>
            <li>
              <NavLink to="/">PhoneBook</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </HeaderNav>
        </nav>
        <HeaderInfo>
          <AccountName>Name:</AccountName>
          <LogoutButton>Logout</LogoutButton>
        </HeaderInfo>
      </HeaderWrapper>
    </header>
  );
};
