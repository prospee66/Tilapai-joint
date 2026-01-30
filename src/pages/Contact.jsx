// PAYSTACK INTEGRATED VERSION
// Replace Contact.jsx with this code when you have your Paystack API key

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import { PaystackButton } from 'react-paystack';
import './Contact.css';

const Contact = () => {
  const location = useLocation();
  const orderData = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [paymentData, setPaymentData] = useState({
    email: '',
    amount: orderData.fishPrice || '',
    name: '',
    phone: ''
  });

  // Pre-fill amount when coming from Gallery
  useEffect(() => {
    if (orderData.fishPrice) {
      setPaymentData(prev => ({
        ...prev,
        amount: orderData.fishPrice
      }));
    }
  }, [orderData.fishPrice]);

  // ⚠️ IMPORTANT: Replace with your actual Paystack public key
  // Get it from: https://dashboard.paystack.com/#/settings/developers
  const publicKey = 'pk_test_21615babab12fd85f67270ec8b1cf724b7f92d78';

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

  // Paystack configuration for Mobile Money
  const paystackConfig = {
    reference: new Date().getTime().toString(),
    email: paymentData.email,
    amount: paymentData.amount * 100, // Convert to pesewas (smallest unit)
    publicKey: publicKey,
    metadata: {
      name: paymentData.name,
      phone: paymentData.phone,
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: paymentData.name
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: paymentData.phone
        }
      ]
    }
    // Temporarily allow all payment methods for testing
    // Once Mobile Money is activated in Paystack dashboard, uncomment line below:
    // channels: ['mobile_money']
  };

  // Payment success handler
  const handlePaystackSuccessAction = (reference) => {
    console.log('Payment successful!', reference);

    let successMessage = `✅ Payment Successful!\n\nReference: ${reference.reference}`;

    if (orderData.fishSize) {
      successMessage += `\n\nOrder Details:\n- ${orderData.fishSize} Smoked Tilapia (${orderData.fishWeight})\n- Amount: GHS ${orderData.fishPrice}`;
    }

    successMessage += `\n\nYou will receive a confirmation SMS shortly.\nThank you for your order!`;

    alert(successMessage);

    // Reset form
    setPaymentData({ email: '', amount: '', name: '', phone: '' });

    // Optional: Send payment confirmation to your backend
    // sendToBackend(reference);
  };

  // Payment close handler (when user closes payment window)
  const handlePaystackCloseAction = () => {
    alert('Payment window closed. Your payment was not completed.');
  };

  const componentProps = {
    ...paystackConfig,
    text: 'Pay Now',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
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

      {/* REAL PAYSTACK PAYMENT SECTION */}
      <section className="payment-section bg-cream">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Secure Payment</p>
            <h2 className="section-title">Make a Payment</h2>
            <p className="payment-note">
              Pay securely with Mobile Money, Card, or Bank Transfer via Paystack
            </p>
          </div>

          <div className="momo-payment-container">
            <form className="momo-payment-form">
              <h3>
                <FaMobileAlt /> Payment Details
              </h3>

              {orderData.fishSize && (
                <div style={{
                  background: 'var(--cream)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.5rem',
                  border: '2px solid var(--primary-orange)'
                }}>
                  <p style={{ fontWeight: 'bold', color: 'var(--primary-orange)', marginBottom: '0.5rem' }}>
                    Selected Order:
                  </p>
                  <p style={{ color: 'var(--charcoal)', marginBottom: '0.25rem' }}>
                    <strong>Size:</strong> {orderData.fishSize} ({orderData.fishWeight})
                  </p>
                  <p style={{ color: 'var(--charcoal)', fontSize: '1.2rem', fontWeight: 'bold' }}>
                    <strong>Amount:</strong> GHS {orderData.fishPrice}
                  </p>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="payment-name">Full Name *</label>
                <input
                  type="text"
                  id="payment-name"
                  name="name"
                  value={paymentData.name}
                  onChange={handlePaymentChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="payment-email">Email Address *</label>
                <input
                  type="email"
                  id="payment-email"
                  name="email"
                  value={paymentData.email}
                  onChange={handlePaymentChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="payment-phone">Phone Number *</label>
                <input
                  type="tel"
                  id="payment-phone"
                  name="phone"
                  value={paymentData.phone}
                  onChange={handlePaymentChange}
                  placeholder="024XXXXXXX"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="payment-amount">
                  Amount (GHS) *
                  {orderData.fishPrice && <span style={{ color: 'var(--green)', marginLeft: '0.5rem', fontSize: '0.9rem' }}>✓ Pre-filled from your selection</span>}
                </label>
                <input
                  type="number"
                  id="payment-amount"
                  name="amount"
                  value={paymentData.amount}
                  onChange={handlePaymentChange}
                  placeholder="50.00"
                  min="1"
                  step="0.01"
                  required
                  style={orderData.fishPrice ? {
                    background: 'var(--cream)',
                    borderColor: 'var(--primary-orange)',
                    fontWeight: 'bold'
                  } : {}}
                />
              </div>

              {paymentData.email && paymentData.amount && paymentData.name && paymentData.phone ? (
                <PaystackButton className="btn btn-primary btn-momo-submit" {...componentProps} />
              ) : (
                <button type="button" className="btn btn-primary btn-momo-submit" disabled>
                  <FaMobileAlt /> Fill all fields to continue
                </button>
              )}

              <p className="payment-info">
                <FaShieldAlt /> Secure payment powered by Paystack. Choose your preferred payment method.
              </p>
            </form>

            <div className="payment-benefits">
              <h3>Why Pay with Paystack?</h3>
              <ul className="benefits-list">
                <li>
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <strong>Multiple Payment Options</strong>
                    <p>Pay with Mobile Money, Debit/Credit Card, or Bank Transfer</p>
                  </div>
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <strong>Instant Payment</strong>
                    <p>Get a prompt on your phone to approve payment instantly</p>
                  </div>
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <strong>100% Secure</strong>
                    <p>Bank-level encryption and PCI-DSS compliance</p>
                  </div>
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  <div>
                    <strong>SMS Confirmation</strong>
                    <p>Receive instant confirmation via SMS and email</p>
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
