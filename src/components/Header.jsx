import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>MIA INSIDER</h1>
            <span>Miami's Premier Nightlife Guide</span>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link to="/clubbing" className="nav-link-with-dropdown">
                Clubbing <ChevronDown size={16} />
              </Link>
              <div className={`dropdown-menu ${isDropdownOpen ? 'dropdown-open' : ''}`}>
                <div className="dropdown-section">
                  <Link to="/clubbing-home" className="dropdown-item">
                    <span className="dropdown-icon">🏠</span>
                    Clubbing Home
                  </Link>
                  <Link to="/clubs-map" className="dropdown-item">
                    <span className="dropdown-icon">🗺️</span>
                    Clubs on Map
                  </Link>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-section">
                  <Link to="/club-guide" className="dropdown-item">
                    <span className="dropdown-icon">🎯</span>
                    Club Guide
                  </Link>
                  <Link to="/club-calendar" className="dropdown-item">
                    <span className="dropdown-icon">📅</span>
                    Club Calendar
                  </Link>
                  <Link to="/lounge-guide" className="dropdown-item">
                    <span className="dropdown-icon">🛋️</span>
                    Lounge Guide
                  </Link>
                  <Link to="/day-beach-club-guide" className="dropdown-item">
                    <span className="dropdown-icon">🏖️</span>
                    Day/Beach Club Guide
                  </Link>
                  <Link to="/cocktail-music-bars" className="dropdown-item">
                    <span className="dropdown-icon">🍸</span>
                    Cocktail & Music Bars
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/events">Events</Link>
            <Link to="/dining">Dining</Link>
            <Link to="/hotels">Hotels</Link>
            <Link to="/experiences">Experiences</Link>
            <Link to="/guides">Guides</Link>
            <Link to="/vip" className="vip-button">VIP</Link>
          </nav>
          
          <div className="header-actions">
            <button className="search-btn">
              <Search size={20} />
            </button>
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;