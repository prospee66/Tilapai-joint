import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTiktok />, url: 'https://tiktok.com', label: 'TikTok' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/233123456789', label: 'WhatsApp' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Tilapia Joint</h3>
          <p className="footer-tagline">Fresh tilapia smoked daily</p>
          <p className="footer-description">
            Experience authentic Ghanaian smoked tilapia with traditional banku,
            prepared with love and served fresh every day.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="footer-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Opening Hours</h4>
          <div className="hours-info">
            <div className="hours-item">
              <FaClock className="hours-icon" />
              <div>
                <p className="hours-days">Monday - Friday</p>
                <p className="hours-time">10:00 AM - 9:00 PM</p>
              </div>
            </div>
            <div className="hours-item">
              <FaClock className="hours-icon" />
              <div>
                <p className="hours-days">Saturday - Sunday</p>
                <p className="hours-time">11:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="contact-info">
            <a href="tel:+233123456789" className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+233 123 456 789</span>
            </a>
            <a href="https://wa.me/233123456789" className="contact-item">
              <FaWhatsapp className="contact-icon" />
              <span>WhatsApp Us</span>
            </a>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Accra, Ghana</span>
            </div>
          </div>

          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Tilapia Joint. All rights reserved.</p>
        <p>Made with ❤️ in Ghana</p>
      </div>
    </footer>
  );
};

export default Footer;
