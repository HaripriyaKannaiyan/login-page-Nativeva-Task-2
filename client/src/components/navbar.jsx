import React from 'react';
import { Link } from 'react-router-dom';
import logoimg from './cropped_image.png'; // Adjust this path to your actual logo image path

const NavBar = () => {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#351d3b',
    color: 'white',
    height:'90px'
  };

  const logoStyle = {
    height: '80px',
    width:'80px',
    marginLeft:'30px',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '50px',
    marginRight:'50px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontFamily:'Broadway'
  };

  return (
    <nav style={navStyle}>
      <div>
        <img src={logoimg} alt="Logo" style={logoStyle} />
      </div>
      <div style={navLinksStyle}>
        <Link to="/home" style={linkStyle}>Home</Link>
        <Link to="/aboutus" style={linkStyle}>About Us</Link>
        <Link to="/menu" style={linkStyle}>Menu</Link>
        <Link to="/home" style={linkStyle}>ContactUs</Link>
      </div>
    </nav>
  );
};

export default NavBar;
