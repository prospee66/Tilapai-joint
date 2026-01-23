import { useState } from 'react';
import { FaFish, FaPepperHot, FaPlus, FaWhatsapp } from 'react-icons/fa';
import './Menu.css';

const Menu = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedPepper, setSelectedPepper] = useState(null);

  const fishSizes = [
    {
      id: 'small',
      name: 'Small',
      price: '25',
      description: 'Perfect for one person, includes 1 banku ball'
    },
    {
      id: 'medium',
      name: 'Medium',
      price: '40',
      description: 'Great for a hearty meal, includes 2 banku balls'
    },
    {
      id: 'large',
      name: 'Large',
      price: '60',
      description: 'Ideal for sharing, includes 3 banku balls'
    },
    {
      id: 'extra-large',
      name: 'Extra-Large',
      price: '80',
      description: 'Family size, includes 4 banku balls'
    }
  ];

  const pepperOptions = [
    {
      id: 'shito',
      name: 'Hot Pepper (Shito)',
      level: 3,
      description: 'Traditional black pepper sauce - for those who love spicy'
    },
    {
      id: 'fresh',
      name: 'Fresh Pepper Sauce',
      level: 2,
      description: 'Classic red pepper - traditional accompaniment'
    },
    {
      id: 'mild',
      name: 'Mild Version',
      level: 1,
      description: 'Light spice - for those who prefer less heat'
    },
    {
      id: 'spicy',
      name: 'Extra Spicy',
      level: 4,
      description: 'Maximum heat - extra kick for spice lovers'
    }
  ];

  const addons = [
    { id: 'banku', name: 'Extra Banku Balls', price: '5' },
    { id: 'pepper', name: 'Additional Pepper/Sauce', price: '3' },
    { id: 'yam', name: 'Fried Yam (Side)', price: '10' }
  ];

  const comboPacks = [
    {
      id: 'single',
      name: 'Single Serving',
      items: '1 fish + banku + choice of pepper',
      price: '35',
      popular: false
    },
    {
      id: 'couple',
      name: 'Couple Pack',
      items: '2 fish + banku + choice of pepper',
      price: '65',
      popular: true
    },
    {
      id: 'family',
      name: 'Family Pack',
      items: '3-4 fish + banku + choice of pepper',
      price: '120',
      popular: false
    }
  ];

  const renderSpiceLevel = (level) => {
    return [...Array(4)].map((_, index) => (
      <FaPepperHot
        key={index}
        className={`spice-icon ${index < level ? 'active' : ''}`}
      />
    ));
  };

  const handleWhatsAppOrder = () => {
    const size = selectedSize ? fishSizes.find(f => f.id === selectedSize)?.name : 'Not selected';
    const pepper = selectedPepper ? pepperOptions.find(p => p.id === selectedPepper)?.name : 'Not selected';
    const message = `Hello! I'd like to order:\nFish Size: ${size}\nPepper: ${pepper}`;
    window.open(`https://wa.me/233123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="menu-page">
      {/* Page Header */}
      <section className="menu-header">
        <div className="container">
          <h1 className="page-title">Our Menu</h1>
          <p className="page-subtitle">
            Fresh smoked tilapia with traditional banku - Choose your perfect meal
          </p>
        </div>
      </section>

      {/* Fish Size Selector */}
      <section className="menu-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Step 1</p>
            <h2 className="section-title">Choose Your Fish Size</h2>
          </div>
          <div className="fish-grid">
            {fishSizes.map((fish) => (
              <div
                key={fish.id}
                className={`fish-card ${selectedSize === fish.id ? 'selected' : ''}`}
                onClick={() => setSelectedSize(fish.id)}
              >
                <div className="fish-icon">
                  <FaFish />
                </div>
                <h3 className="fish-name">{fish.name}</h3>
                <p className="fish-price">GH₵ {fish.price}</p>
                <p className="fish-description">{fish.description}</p>
                {selectedSize === fish.id && (
                  <div className="selected-badge">Selected</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pepper Options */}
      <section className="menu-section bg-cream">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Step 2</p>
            <h2 className="section-title">Select Your Pepper</h2>
          </div>
          <div className="pepper-grid">
            {pepperOptions.map((pepper) => (
              <div
                key={pepper.id}
                className={`pepper-card ${selectedPepper === pepper.id ? 'selected' : ''}`}
                onClick={() => setSelectedPepper(pepper.id)}
              >
                <h3 className="pepper-name">{pepper.name}</h3>
                <div className="spice-level">
                  {renderSpiceLevel(pepper.level)}
                </div>
                <p className="pepper-description">{pepper.description}</p>
                {selectedPepper === pepper.id && (
                  <div className="selected-badge">Selected</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="menu-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Extras</p>
            <h2 className="section-title">Add-Ons</h2>
          </div>
          <div className="addons-grid">
            {addons.map((addon) => (
              <div key={addon.id} className="addon-card">
                <div className="addon-icon">
                  <FaPlus />
                </div>
                <div className="addon-info">
                  <h4 className="addon-name">{addon.name}</h4>
                  <p className="addon-price">GH₵ {addon.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Packs */}
      <section className="menu-section bg-cream">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Special Offers</p>
            <h2 className="section-title">Combo Packs</h2>
            <p className="section-description">
              Save more with our value combo packs - perfect for any occasion
            </p>
          </div>
          <div className="combo-grid">
            {comboPacks.map((combo) => (
              <div key={combo.id} className={`combo-card ${combo.popular ? 'popular' : ''}`}>
                {combo.popular && <div className="popular-badge">Most Popular</div>}
                <h3 className="combo-name">{combo.name}</h3>
                <p className="combo-items">{combo.items}</p>
                <p className="combo-price">GH₵ {combo.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="order-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Order?</h2>
            <p>
              {selectedSize && selectedPepper
                ? 'Great choices! Click below to place your order via WhatsApp'
                : 'Select your fish size and pepper preference above, then order via WhatsApp'}
            </p>
            <button
              className="btn btn-primary whatsapp-btn"
              onClick={handleWhatsAppOrder}
              disabled={!selectedSize || !selectedPepper}
            >
              <FaWhatsapp className="whatsapp-icon" />
              Order via WhatsApp
            </button>
            {(!selectedSize || !selectedPepper) && (
              <p className="order-note">Please select both size and pepper to proceed</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
