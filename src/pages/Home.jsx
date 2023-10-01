import React from 'react';
import { styled } from 'styled-components';

export const Home = () => {
  return (
    <>
      <HomeTitle>This is HomePage 🏡</HomeTitle>
    </>
  );
};

export const HomeTitle = styled.h1`
  text-align: center;
  color: #edf4f2;
  margin-top: 100px;
`;
