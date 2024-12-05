import React from 'react';
import Nav from '../../components/nav/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav/>
      <main>{children}</main>
    </>
  );
};

export default Layout;