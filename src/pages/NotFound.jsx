import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <div>
        <h1>Oops!!! Page is not found 😉</h1>
        <h2>
          You can go to <Link to="/contacts">PhoneBook</Link> page
        </h2>
      </div>
    </>
  );
};
