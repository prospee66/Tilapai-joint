import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaTimes as FaClose } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <span className="logo-text">Akopia</span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Floating Contact Button */}
      <button
        className="floating-contact-btn"
        onClick={() => setIsContactOpen(!isContactOpen)}
        aria-label="Contact Us"
      >
        {isContactOpen ? <FaClose /> : <FaPhone />}
      </button>

      {/* Contact Panel */}
      <div className={`contact-panel ${isContactOpen ? 'open' : ''}`}>
        <h3>Contact Us</h3>
        <div className="contact-panel-content">
          <a href="tel:+233123456789" className="contact-panel-link">
            <FaPhone />
            <span>+233 123 456 789</span>
          </a>
          <a href="tel:+233987654321" className="contact-panel-link">
            <FaPhone />
            <span>+233 987 654 321</span>
          </a>
          <a href="https://wa.me/233123456789" className="contact-panel-link whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isContactOpen && (
        <div
          className="contact-panel-overlay"
          onClick={() => setIsContactOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
