import { useState } from 'react';
import { FaCamera, FaFish, FaFire, FaUsers, FaUtensils, FaPepperHot } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const getIcon = (category) => {
    switch(category) {
      case 'food':
        return <FaFish />;
      case 'process':
        return <FaFire />;
      case 'customers':
        return <FaUsers />;
      default:
        return <FaCamera />;
    }
  };

  const getGradient = (category) => {
    switch(category) {
      case 'food':
        return 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)';
      case 'process':
        return 'linear-gradient(135deg, #6B4423 0%, #A0826D 100%)';
      case 'customers':
        return 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)';
      default:
        return 'linear-gradient(135deg, #FF6B35 0%, #6B4423 100%)';
    }
  };

  const galleryItems = [
    { id: 1, category: 'food', title: 'Smoked Tilapia with Banku', description: 'Our signature dish' },
    { id: 2, category: 'process', title: 'Traditional Smoking Process', description: 'Charcoal smoking' },
    { id: 3, category: 'food', title: 'Fresh Pepper Sauce', description: 'Homemade shito' },
    { id: 4, category: 'customers', title: 'Happy Customers', description: 'Enjoying their meal' },
    { id: 5, category: 'process', title: 'Preparing Banku', description: 'Traditional method' },
    { id: 6, category: 'food', title: 'Extra-Large Portion', description: 'Family size' },
    { id: 7, category: 'process', title: 'Fish Selection', description: 'Fresh daily' },
    { id: 8, category: 'customers', title: 'Family Dining', description: 'Great atmosphere' },
    { id: 9, category: 'food', title: 'Complete Meal', description: 'Fish, banku & pepper' },
    { id: 10, category: 'process', title: 'Grilling Setup', description: 'Charcoal preparation' },
    { id: 11, category: 'food', title: 'Medium Portion', description: 'Perfect for one' },
    { id: 12, category: 'customers', title: 'Weekend Crowd', description: 'Busy times' }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: <FaCamera /> },
    { id: 'food', name: 'Food', icon: <FaFish /> },
    { id: 'process', name: 'Process', icon: <FaFire /> },
    { id: 'customers', name: 'Customers', icon: <FaUsers /> }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="gallery-header">
        <div className="container">
          <h1 className="page-title">Our Gallery</h1>
          <p className="page-subtitle">
            Take a visual journey through our authentic Ghanaian cuisine
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container-wide">
          <div className="gallery-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-item" data-category={item.category}>
                <div
                  className="gallery-placeholder"
                  style={{ background: getGradient(item.category) }}
                >
                  <div className="placeholder-icon">
                    {getIcon(item.category)}
                  </div>
                  <div className="placeholder-content">
                    <p className="placeholder-title">{item.title}</p>
                    <p className="placeholder-description">{item.description}</p>
                  </div>
                </div>
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-description">{item.description}</p>
                  <span className="gallery-category">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="no-results">
              <FaCamera />
              <p>No photos found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Instagram Feed Promo */}
      <section className="instagram-section bg-cream">
        <div className="container">
          <div className="instagram-content">
            <h2>Follow Us on Instagram</h2>
            <p>Stay updated with our latest dishes, special offers, and behind-the-scenes content</p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              @tilapiajoint
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
