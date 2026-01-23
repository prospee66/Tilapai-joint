import { Link } from 'react-router-dom';
import {
  FaFire,
  FaLeaf,
  FaStar,
  FaHeart,
  FaFish,
  FaPepperHot,
  FaSmile
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: 'Fresh Daily',
      description: 'Our tilapia is sourced fresh every morning and smoked to perfection throughout the day.'
    },
    {
      icon: <FaFire />,
      title: 'Traditional Recipe',
      description: 'Time-honored smoking techniques passed down through generations for authentic flavor.'
    },
    {
      icon: <FaStar />,
      title: 'Premium Quality',
      description: 'We select only the finest fish and use traditional charcoal smoking methods.'
    },
    {
      icon: <FaHeart />,
      title: 'Authentic Taste',
      description: 'Experience the true taste of Ghana with every bite of our perfectly smoked tilapia.'
    }
  ];

  const steps = [
    {
      icon: <FaFish />,
      number: '01',
      title: 'Choose Your Size',
      description: 'Select from Small, Medium, Large, or Extra-Large portions'
    },
    {
      icon: <FaPepperHot />,
      number: '02',
      title: 'Select Your Pepper',
      description: 'Pick your preferred spice level and sauce type'
    },
    {
      icon: <FaSmile />,
      number: '03',
      title: 'Enjoy!',
      description: 'Savor the authentic taste of smoked tilapia with banku'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Ghana's Finest<br />
            <span className="highlight">Smoked Tilapia & Banku</span>
          </h1>
          <p className="hero-subtitle">
            Authentic smoked tilapia prepared fresh daily with traditional banku
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">
              View Menu
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Find Us
            </Link>
          </div>
        </div>
        <div className="smoke-effect"></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">What Makes Us Special</p>
            <h2 className="section-title">Why Choose Us</h2>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dish Showcase */}
      <section className="signature-dish bg-cream">
        <div className="container">
          <div className="signature-content">
            <div className="signature-image">
              <div className="image-placeholder">
                <FaFish className="placeholder-icon" />
                <p>Delicious Smoked Tilapia with Banku</p>
              </div>
            </div>
            <div className="signature-info">
              <p className="section-subtitle">Our Specialty</p>
              <h2 className="section-title">The Perfect Smoked Tilapia</h2>
              <p className="signature-description">
                Our signature dish features premium tilapia, carefully selected and smoked over
                traditional charcoal fire. Each fish is seasoned with our special blend of spices
                and smoked slowly to achieve the perfect balance of smoky flavor and tender texture.
              </p>
              <div className="signature-details">
                <div className="detail-item">
                  <FaFire className="detail-icon" />
                  <div>
                    <h4>Traditional Smoking</h4>
                    <p>Charcoal-smoked for 2-3 hours at the perfect temperature</p>
                  </div>
                </div>
                <div className="detail-item">
                  <FaLeaf className="detail-icon" />
                  <div>
                    <h4>Fresh Ingredients</h4>
                    <p>Sourced daily from local markets for optimal freshness</p>
                  </div>
                </div>
                <div className="detail-item">
                  <FaStar className="detail-icon" />
                  <div>
                    <h4>Expert Preparation</h4>
                    <p>Prepared by experienced chefs using time-tested methods</p>
                  </div>
                </div>
              </div>
              <Link to="/menu" className="btn btn-primary">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Simple Process</p>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta bg-cream">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Authentic Ghanaian Flavor?</h2>
            <p>Visit us today or check out our menu to see all available options</p>
            <div className="cta-buttons">
              <Link to="/menu" className="btn btn-primary">
                View Full Menu
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
