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
    { id: 1, category: 'food', title: 'Banku & Smoked Tilapia', description: 'Our signature dish - Fresh banku with perfectly smoked tilapia', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a12ab6?w=500&h=500&fit=crop' },
    { id: 2, category: 'food', title: 'Smoked Tilapia with Banku', description: 'Traditional Ghanaian combination', image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=500&h=500&fit=crop' },
    { id: 3, category: 'food', title: 'Fresh Banku & Grilled Tilapia', description: 'Served hot with pepper sauce', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&h=500&fit=crop' },
    { id: 4, category: 'process', title: 'Smoking Tilapia', description: 'Traditional charcoal smoking process', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&h=500&fit=crop' },
    { id: 5, category: 'food', title: 'Tilapia & Banku Platter', description: 'Complete meal with shito pepper', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop' },
    { id: 6, category: 'process', title: 'Preparing Fresh Tilapia', description: 'Daily fish preparation', image: 'https://images.unsplash.com/photo-1580959375944-357954b52c7e?w=500&h=500&fit=crop' },
    { id: 7, category: 'food', title: 'Banku with Large Tilapia', description: 'Family size portion', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=500&fit=crop' },
    { id: 8, category: 'process', title: 'Charcoal Grilling', description: 'Grilling fresh tilapia on charcoal', image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=500&h=500&fit=crop' },
    { id: 9, category: 'food', title: 'Smoked Fish & Banku', description: 'Authentic Ghanaian flavors', image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=500&h=500&fit=crop' },
    { id: 10, category: 'process', title: 'Making Fresh Banku', description: 'Traditional corn dough preparation', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=500&fit=crop' },
    { id: 11, category: 'customers', title: 'Enjoying Banku & Tilapia', description: 'Happy customers at Akopia', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop' },
    { id: 12, category: 'customers', title: 'Family Meal Time', description: 'Sharing banku and tilapia together', image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=500&h=500&fit=crop' }
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
