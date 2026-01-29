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
    { id: 1, category: 'process', title: 'Fresh Daily Catch', description: 'Premium quality tilapia on ice - Always fresh, never frozen', image: '/images/gallery/fresh-tilapia-ice.jpg' },
    { id: 2, category: 'process', title: 'Quality Selection', description: 'Hand-picked tilapia for perfect texture and taste', image: '/images/gallery/single-tilapia.jpg' },
    { id: 3, category: 'food', title: 'Perfectly Grilled Tilapia', description: 'Charcoal-grilled to perfection with authentic Ghanaian spices', image: '/images/gallery/grilled-tilapia-plate.jpg' },
    { id: 4, category: 'process', title: 'Charcoal Grilling Process', description: 'Traditional grilling technique for that smoky flavor', image: '/images/gallery/tilapia-on-grill.jpg' },
    { id: 5, category: 'food', title: 'Crispy Fried Tilapia', description: 'Golden-brown perfection served with fresh vegetables', image: '/images/gallery/fried-tilapia.jpg' },
    { id: 6, category: 'food', title: 'Banku & Smoked Tilapia', description: 'Our signature dish - Traditional banku with perfectly smoked tilapia', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a12ab6?w=500&h=500&fit=crop' },
    { id: 7, category: 'food', title: 'Family Size Platter', description: 'Large tilapia perfect for sharing with loved ones', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=500&fit=crop' },
    { id: 8, category: 'process', title: 'Fresh Fish Preparation', description: 'Expertly cleaned and prepared daily', image: 'https://images.unsplash.com/photo-1580959375944-357954b52c7e?w=500&h=500&fit=crop' },
    { id: 9, category: 'food', title: 'Tilapia with Pepper Sauce', description: 'Served with our homemade shito pepper', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop' },
    { id: 10, category: 'process', title: 'Making Fresh Banku', description: 'Traditional corn dough prepared the authentic way', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=500&fit=crop' },
    { id: 11, category: 'customers', title: 'Enjoying Fresh Tilapia', description: 'Happy customers savoring our signature dishes', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop' },
    { id: 12, category: 'customers', title: 'Family Dining Experience', description: 'Creating memories over delicious tilapia meals', image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=500&h=500&fit=crop' }
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
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />
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
              @akopiaghana
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
