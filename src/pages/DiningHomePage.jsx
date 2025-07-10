import React from 'react';
import { Link } from 'react-router-dom';
import './DiningHomePage.css';

const DiningHomePage = () => {
  // Mock restaurant data
  const featuredRestaurants = [
    {
      id: 1,
      name: 'Joe\'s Stone Crab',
      cuisine: 'Seafood',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.8',
      features: ['Waterfront', 'Historic']
    },
    {
      id: 2,
      name: 'Zuma Miami',
      cuisine: 'Japanese',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.7',
      features: ['Rooftop', 'Sushi Bar']
    },
    {
      id: 3,
      name: 'Prime 112',
      cuisine: 'Steakhouse',
      image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.6',
      features: ['Prime Cuts', 'Wine Bar']
    },
    {
      id: 4,
      name: 'La Mar by Gastón Acurio',
      cuisine: 'Peruvian',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.5',
      features: ['Ceviche', 'Bay Views']
    },
    {
      id: 5,
      name: 'Komodo Miami',
      cuisine: 'Asian Fusion',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.4',
      features: ['Trendy', 'Cocktails']
    },
    {
      id: 6,
      name: 'Stubborn Seed',
      cuisine: 'Contemporary',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.9',
      features: ['Michelin Star', 'Tasting Menu']
    }
  ];

  return (
    <div className="dining-home-page">
      <div className="container">
        {/* Hero Section */}
        <div className="dining-hero">
          <div className="hero-content">
            <h1 className="hero-title">Miami Dining</h1>
            <p className="hero-subtitle">
              Discover Miami's finest restaurants, from waterfront dining to Michelin-starred experiences
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Premium Restaurants</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Michelin Stars</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Concierge Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="quick-nav">
          <h2 className="section-title">Explore Miami Dining</h2>
          <div className="nav-grid">
            <Link to="/fine-dining" className="nav-card">
              <div className="nav-icon">⭐</div>
              <h3>Fine Dining</h3>
              <p>Michelin-starred restaurants and award-winning chefs</p>
            </Link>
            <Link to="/rooftop-dining" className="nav-card">
              <div className="nav-icon">🌆</div>
              <h3>Rooftop Dining</h3>
              <p>Sky-high restaurants with stunning city views</p>
            </Link>
            <Link to="/waterfront-dining" className="nav-card">
              <div className="nav-icon">🌊</div>
              <h3>Waterfront Dining</h3>
              <p>Oceanfront and bayfront dining experiences</p>
            </Link>
            <Link to="/steakhouses" className="nav-card">
              <div className="nav-icon">🥩</div>
              <h3>Steakhouses</h3>
              <p>Premium cuts and classic American dining</p>
            </Link>
            <Link to="/sushi-seafood" className="nav-card">
              <div className="nav-icon">🍣</div>
              <h3>Sushi & Seafood</h3>
              <p>Fresh catches and authentic Japanese cuisine</p>
            </Link>
            <Link to="/restaurants-map" className="nav-card">
              <div className="nav-icon">🗺️</div>
              <h3>Restaurants on Map</h3>
              <p>Find dining options near you</p>
            </Link>
          </div>
        </div>

        {/* Featured Restaurants */}
        <div className="featured-restaurants">
          <div className="section-header">
            <h2 className="section-title">Featured Restaurants</h2>
            <Link to="/fine-dining" className="view-all">View All Restaurants</Link>
          </div>
          <div className="restaurants-grid">
            {featuredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="restaurant-card">
                <div className="restaurant-image">
                  <img src={restaurant.image} alt={restaurant.name} />
                  <div className="restaurant-rating">★ {restaurant.rating}</div>
                </div>
                <div className="restaurant-content">
                  <h3>{restaurant.name}</h3>
                  <p className="restaurant-cuisine">{restaurant.cuisine}</p>
                  <div className="restaurant-features">
                    {restaurant.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>Need Reservations?</h2>
            <p>Let our concierge team secure your table at Miami's most exclusive restaurants</p>
            <Link to="/vip" className="cta-button">Get VIP Reservations</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningHomePage;