// Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login';

  return (
    <div>
      {!hideNavAndFooter && <Navbar />}
      <main>{children}</main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
};

export default Layout;