import { styled } from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 2px 10px;
  background-color: #7c8363;
  /* background-color: #edf4f2; */
  display: flex;
  justify-content: space-between;
`;

export const HeaderNavBox = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const HeaderNav = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  list-style: none;
  font-weight: bold;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 20px;
`;

export const AccountName = styled.h3`
  color: #edf4f2;
  font-size: 16px;
`;

export const LogoutButton = styled.button`
  padding: 3px 6px;
  font-size: 16px;
  cursor: pointer;
`;
