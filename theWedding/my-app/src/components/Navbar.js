import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">💍 theWedding</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/service" onClick={toggleMenu}>Service</Link></li>
        <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
        <li><Link to="/guestlist" onClick={toggleMenu}>Guest List</Link></li>
        <li><Link to="/budget" onClick={toggleMenu}>Budget</Link></li>
        <li><Link to="/reminders" onClick={toggleMenu}>Reminders</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li><Link to="/Pricing" onClick={toggleMenu}>Pricing</Link></li>
        {/* <li><Link to="/SignIn" onClick={toggleMenu}>SignIn</Link></li> */}
        <li><Link to="/Login" onClick={toggleMenu}>Login</Link></li>
        {/* <li><Link to="/ForgotPassword" onClick={toggleMenu}>ForgotPassword</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
