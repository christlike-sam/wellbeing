import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo & Brand */}
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Wellbeing Institute Logo" className="logo" />
        </Link>
        <h1 className="brand-name">The WellBeing Institute</h1>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/about" className="nav-item">Who We Are</Link></li>
        <li><Link to="/policy-reports" className="nav-item">What We Do</Link></li>
        <li><Link to="/contact" className="nav-item">Contact</Link></li>
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'change' : ''}`}></span>
        <span className={`bar ${isOpen ? 'change' : ''}`}></span>
        <span className={`bar ${isOpen ? 'change' : ''}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
