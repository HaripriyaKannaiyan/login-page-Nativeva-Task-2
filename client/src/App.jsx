import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup';
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './login';
import Home from './home';
import NavBar from './components/navbar';
import AboutUs from './components/aboutus';
import Menu from './components/menu';
import Footer from './components/footer';

function Layout({ children }) {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/';

  return (
    <div>
      {!hideNavAndFooter && <NavBar />}
      <main>{children}</main>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
