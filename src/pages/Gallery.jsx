import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFish, FaFire, FaShoppingCart, FaCheckCircle } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);

  // Smoked Tilapia Gallery - Only smoked fish
  const smokedFishGallery = [
    {
      id: 1,
      title: 'Charcoal Smoked Tilapia',
      description: 'Perfectly smoked with traditional charcoal',
      image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'Golden Smoked Tilapia',
      description: 'Crispy skin, tender meat',
      image: 'https://images.unsplash.com/photo-1619740455993-9e66be47e163?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Fresh Smoked Tilapia',
      description: 'Daily prepared, always fresh',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'Traditional Smoked Tilapia',
      description: 'Authentic Ghanaian style',
      image: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=800&h=600&fit=crop'
    }
  ];

  // Fish Sizes with Prices
  const fishSizes = [
    { id: 1, name: 'Small', weight: '200-300g', price: 25, description: 'Perfect for 1 person' },
    { id: 2, name: 'Medium', weight: '400-500g', price: 45, description: 'Good for 2 people' },
    { id: 3, name: 'Large', weight: '600-800g', price: 70, description: 'Family size (3-4 people)' },
    { id: 4, name: 'Extra Large', weight: '900g+', price: 100, description: 'Party size (5+ people)' }
  ];

  const handleOrderClick = (size) => {
    setSelectedSize(size);
    // Navigate to contact page with fish size pre-selected
    navigate('/contact', {
      state: {
        fishSize: size.name,
        fishPrice: size.price,
        fishWeight: size.weight
      }
    });
  };

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="gallery-header">
        <div className="container">
          <FaFish className="header-icon" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }} />
          <h1 className="page-title">Smoked Tilapia Gallery</h1>
          <p className="page-subtitle">
            Fresh smoked tilapia - Choose your size and order now
          </p>
        </div>
      </section>

      {/* Smoked Fish Gallery */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <FaFire style={{ fontSize: '2.5rem', color: 'var(--primary-orange)', marginBottom: '1rem' }} />
            <h2 className="section-title">Our Smoked Tilapia</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', maxWidth: '600px', margin: '0 auto' }}>
              Charcoal-smoked to perfection using traditional Ghanaian methods
            </p>
          </div>

          <div className="gallery-grid">
            {smokedFishGallery.map((fish) => (
              <div key={fish.id} className="gallery-item">
                <img
                  src={fish.image}
                  alt={fish.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{fish.title}</h3>
                  <p className="gallery-description">{fish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Fish Size */}
      <section className="fish-sizes-section bg-cream">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <FaShoppingCart style={{ fontSize: '2.5rem', color: 'var(--primary-orange)', marginBottom: '1rem' }} />
            <h2 className="section-title">Choose Your Fish Size</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--charcoal)', maxWidth: '600px', margin: '0 auto' }}>
              Click on any size to proceed to payment
            </p>
          </div>

          <div className="fish-sizes-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {fishSizes.map((size) => (
              <div
                key={size.id}
                className={`fish-size-card ${selectedSize?.id === size.id ? 'selected' : ''}`}
                onClick={() => handleOrderClick(size)}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '2rem',
                  boxShadow: selectedSize?.id === size.id ? '0 8px 30px rgba(210, 105, 30, 0.3)' : '0 4px 15px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: selectedSize?.id === size.id ? '3px solid var(--primary-orange)' : '3px solid transparent',
                  transform: selectedSize?.id === size.id ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(210, 105, 30, 0.2)';
                }}
                onMouseLeave={(e) => {
                  if (selectedSize?.id !== size.id) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  }
                }}
              >
                <div style={{
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {size.name}
                </div>

                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <FaFish style={{ fontSize: '2rem', color: 'var(--primary-orange)', marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--charcoal)' }}>
                    {size.weight}
                  </div>
                </div>

                <p style={{
                  textAlign: 'center',
                  color: 'var(--gray)',
                  marginBottom: '1.5rem',
                  minHeight: '40px'
                }}>
                  {size.description}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: 'var(--primary-orange)',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>GHS</span>
                  <span>{size.price}</span>
                </div>

                <button style={{
                  width: '100%',
                  padding: '0.75rem 1.5rem',
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--gradient-coral)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--gradient-primary)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  <FaCheckCircle /> Order Now
                </button>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--primary-orange)',
            color: 'white',
            padding: '2rem',
            borderRadius: '15px',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              🚚 Free Delivery
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
              For orders above GHS 80 in Pokuase-Odumase area
            </p>
            <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
              Click any size above to proceed to payment
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
