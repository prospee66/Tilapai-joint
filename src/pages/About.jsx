import { FaHeart, FaLeaf, FaStar, FaFire, FaUsers, FaTrophy } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaLeaf />,
      title: 'Freshness',
      description: 'We source the freshest tilapia daily from trusted local suppliers'
    },
    {
      icon: <FaStar />,
      title: 'Quality',
      description: 'Only the finest ingredients and traditional preparation methods'
    },
    {
      icon: <FaHeart />,
      title: 'Authenticity',
      description: 'True Ghanaian flavors preserved through generations'
    },
    {
      icon: <FaFire />,
      title: 'Tradition',
      description: 'Time-honored smoking techniques for perfect taste'
    }
  ];


  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="about-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Preserving tradition, serving excellence
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <p className="section-subtitle">Our Story</p>
              <h2 className="section-title">A Legacy of Flavor</h2>
              <p className="story-paragraph">
                For over a decade, Akopia has been serving authentic Ghanaian smoked tilapia
                to our community. What started as a small family venture has grown into a beloved
                local institution, known for maintaining the traditional methods that make our
                tilapia truly special.
              </p>
              <p className="story-paragraph">
                Our founder learned the art of smoking tilapia from their grandmother, who learned
                it from generations before. We've preserved these time-tested techniques while
                ensuring the highest standards of quality and hygiene.
              </p>
              <p className="story-paragraph">
                Every fish is hand-selected, expertly prepared, and smoked using traditional
                charcoal methods. Our banku is made fresh daily using the authentic recipe,
                perfectly complementing the rich, smoky flavors of our tilapia.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <FaUsers className="placeholder-icon" />
                <p>Our Team at Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smoking Process */}
      <section className="smoking-process">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our Method</p>
            <h2 className="section-title">The Smoking Process</h2>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Selection</h3>
              <p>We carefully select fresh, premium tilapia from trusted local sources every morning</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Preparation</h3>
              <p>Fish are cleaned, seasoned with our special spice blend, and prepared for smoking</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Smoking</h3>
              <p>Slow-smoked over traditional charcoal fire for 2-3 hours at the perfect temperature</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Serving</h3>
              <p>Served hot with freshly made banku and your choice of authentic Ghanaian pepper</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values bg-cream">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">What Drives Us</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
