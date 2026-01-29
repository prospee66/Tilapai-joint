import { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaClock,
  FaEnvelope,
  FaMobileAlt,
  FaShieldAlt,
  FaCheckCircle
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [paymentData, setPaymentData] = useState({
    provider: 'mtn',
    phoneNumber: '',
    amount: '',
    name: ''
  });

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

  const handlePaymentChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value
    });
  };

  const handleProviderSelect = (provider) => {
    setPaymentData({
      ...paymentData,
      provider: provider
    });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', paymentData);
    alert(`Payment request sent!\n\nProvider: ${paymentData.provider.toUpperCase()}\nPhone: ${paymentData.phoneNumber}\nAmount: GHS ${paymentData.amount}\n\nYou will receive a prompt on your phone to complete the payment.`);
    setPaymentData({ provider: 'mtn', phoneNumber: '', amount: '', name: '' });
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
                  <p>Pokuase-Odumase</p>
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
                    <span>Monday:</span>
                    <span>Closed</span>
                  </p>
                  <p className="hours-row">
                    <span>Tuesday - Sunday:</span>
                    <span>4:00 PM - 11:00 PM</span>
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.1234567890!2d-0.3123456789!3d5.7123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDInNDQuNCJOIDDCsDE4JzQ0LjQiVw!5e0!3m2!1sen!2sgh!4v1234567890123!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Akopia Location - Pokuase-Odumase, Accra"
          ></iframe>
        </div>
      </section>

      {/* Payment Section */}
      <section className="payment-section bg-cream">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Secure Payment</p>
            <h2 className="section-title">Mobile Money Payment</h2>
            <p className="payment-note">
              Pay securely with MTN, Vodafone, or AirtelTigo Mobile Money
            </p>
          </div>

          <div className="momo-payment-container">
            <form className="momo-payment-form" onSubmit={handlePaymentSubmit}>
              <h3>
                <FaMobileAlt /> Mobile Money Details
              </h3>

              <div className="form-group">
                <label>Select Provider *</label>
                <div className="provider-selection">
                  <button
                    type="button"
                    className={`provider-btn ${paymentData.provider === 'mtn' ? 'active' : ''}`}
                    onClick={() => handleProviderSelect('mtn')}
                  >
                    MTN
                  </button>
                  <button
                    type="button"
                    className={`provider-btn ${paymentData.provider === 'vodafone' ? 'active' : ''}`}
                    onClick={() => handleProviderSelect('vodafone')}
                  >
                    Vodafone
                  </button>
                  <button
                    type="button"
                    className={`provider-btn ${paymentData.provider === 'airteltigo' ? 'active' : ''}`}
                    onClick={() => handleProviderSelect('airteltigo')}
                  >
                    AirtelTigo
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="momo-name">Full Name *</label>
                <input
                  type="text"
                  id="momo-name"
                  name="name"
                  value={paymentData.name}
                  onChange={handlePaymentChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="momo-number">Mobile Money Number *</label>
                <input
                  type="tel"
                  id="momo-number"
                  name="phoneNumber"
                  value={paymentData.phoneNumber}
                  onChange={handlePaymentChange}
                  placeholder="0XX XXX XXXX"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />
                <small>Enter 10-digit phone number</small>
              </div>

              <div className="form-group">
                <label htmlFor="momo-amount">Amount (GHS) *</label>
                <input
                  type="number"
                  id="momo-amount"
                  name="amount"
                  value={paymentData.amount}
                  onChange={handlePaymentChange}
                  placeholder="50.00"
                  min="1"
                  step="0.01"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-momo-submit">
                <FaMobileAlt /> Send Payment Request
              </button>

              <p className="payment-info">
                <FaShieldAlt /> You will receive a prompt on your phone to authorize the payment
              </p>
            </form>

            <div className="payment-benefits">
              <h3>Why Mobile Money?</h3>
              <ul className="benefits-list">
                <li>
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <strong>Fast & Convenient</strong>
                    <p>Pay directly from your mobile money wallet in seconds</p>
                  </div>
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <strong>Secure Transactions</strong>
                    <p>Bank-level security with PIN protection</p>
                  </div>
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <strong>Instant Confirmation</strong>
                    <p>Get immediate SMS confirmation of your payment</p>
                  </div>
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <strong>All Networks Supported</strong>
                    <p>Works with MTN, Vodafone, and AirtelTigo</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
