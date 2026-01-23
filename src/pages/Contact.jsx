import { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaClock,
  FaEnvelope,
  FaMobileAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaUniversity,
  FaQrcode,
  FaCopy,
  FaCheckCircle
} from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [copiedNumber, setCopiedNumber] = useState('');
  const [showQR, setShowQR] = useState(null);

  const paymentMethods = {
    mtn: { name: 'MTN Mobile Money', number: '0123456789', color: '#FFCC00' },
    vodafone: { name: 'Vodafone Cash', number: '0123456789', color: '#E60000' },
    airteltigo: { name: 'AirtelTigo Money', number: '0123456789', color: '#ED1C24' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const copyToClipboard = (number, provider) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(provider);
    setTimeout(() => setCopiedNumber(''), 2000);
  };

  const toggleQR = (provider) => {
    setShowQR(showQR === provider ? null : provider);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We'd love to hear from you - visit us or get in touch
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get in Touch</h2>

              <div className="info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h3>Location</h3>
                  <p>123 Independence Avenue</p>
                  <p>Near Kwame Nkrumah Circle</p>
                  <p>Accra, Ghana</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div className="info-content">
                  <h3>Opening Hours</h3>
                  <p className="hours-row">
                    <span>Monday - Friday:</span>
                    <span>10:00 AM - 9:00 PM</span>
                  </p>
                  <p className="hours-row">
                    <span>Saturday - Sunday:</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <a href="tel:+233123456789" className="contact-link">
                    +233 123 456 789
                  </a>
                  <a href="tel:+233987654321" className="contact-link">
                    +233 987 654 321
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon whatsapp">
                  <FaWhatsapp />
                </div>
                <div className="info-content">
                  <h3>WhatsApp</h3>
                  <a
                    href="https://wa.me/233123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  <FaEnvelope /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            <FaMapMarkerAlt className="map-icon" />
            <p>123 Independence Avenue, Accra</p>
            <p className="map-note">Google Maps integration</p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="payment-section bg-cream">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Convenient Payment</p>
            <h2 className="section-title">Payment Methods</h2>
            <p className="payment-note">
              We accept multiple payment options for your convenience
            </p>
          </div>

          <div className="payment-methods">
            {/* Mobile Money Section */}
            <div className="payment-category">
              <h3>Mobile Money (Primary Payment Method)</h3>
              <p className="category-description">
                Scan QR code or copy number for instant payment
              </p>
              <div className="payment-options">
                {Object.entries(paymentMethods).map(([key, method]) => (
                  <div key={key} className="payment-card enhanced">
                    <div className="payment-header">
                      <FaMobileAlt className={`payment-icon ${key}`} />
                      <h4>{method.name}</h4>
                    </div>
                    <p className="payment-number">{method.number}</p>

                    <div className="payment-actions">
                      <button
                        className="action-btn copy"
                        onClick={() => copyToClipboard(method.number, key)}
                      >
                        {copiedNumber === key ? (
                          <>
                            <FaCheckCircle /> Copied!
                          </>
                        ) : (
                          <>
                            <FaCopy /> Copy Number
                          </>
                        )}
                      </button>
                      <button
                        className="action-btn qr"
                        onClick={() => toggleQR(key)}
                      >
                        <FaQrcode /> {showQR === key ? 'Hide' : 'Show'} QR
                      </button>
                    </div>

                    {showQR === key && (
                      <div className="qr-container">
                        <QRCodeSVG
                          value={method.number}
                          size={150}
                          level="H"
                          includeMargin={true}
                        />
                        <p className="qr-instruction">Scan to pay</p>
                      </div>
                    )}

                    <a
                      href={`tel:*170*${method.number}#`}
                      className="quick-pay-link"
                    >
                      Quick Pay Link
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Payment Methods */}
            <div className="payment-category">
              <h3>Alternative Payment Methods</h3>
              <div className="payment-options alternative">
                <div className="payment-card simple">
                  <FaMoneyBillWave className="payment-icon cash" />
                  <h4>Cash Payment</h4>
                  <ul className="payment-details">
                    <li>Pay at counter (walk-in)</li>
                    <li>Cash on delivery</li>
                    <li>Exact change appreciated</li>
                  </ul>
                </div>
                <div className="payment-card simple">
                  <FaUniversity className="payment-icon bank" />
                  <h4>Bank Transfer</h4>
                  <ul className="payment-details">
                    <li>For large/corporate orders</li>
                    <li>Account: 1234567890</li>
                    <li>Bank: GCB Bank</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="payment-security">
            <p>
              🔒 <strong>Security Note:</strong> Only make payments to the official numbers
              displayed on this website. We will never ask for payment through unofficial channels.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
