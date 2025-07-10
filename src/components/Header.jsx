import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClubDropdownOpen, setIsClubDropdownOpen] = useState(false);
  const [isDiningDropdownOpen, setIsDiningDropdownOpen] = useState(false);

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
              onMouseEnter={() => setIsClubDropdownOpen(true)}
              onMouseLeave={() => setIsClubDropdownOpen(false)}
            >
              <Link to="/clubbing" className="nav-link-with-dropdown">
                Clubbing <ChevronDown size={16} />
              </Link>
              <div className={`dropdown-menu ${isClubDropdownOpen ? 'dropdown-open' : ''}`}>
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
                    Night Club Guide
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
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setIsDiningDropdownOpen(true)}
              onMouseLeave={() => setIsDiningDropdownOpen(false)}
            >
              <Link to="/dining-home" className="nav-link-with-dropdown">
                Dining <ChevronDown size={16} />
              </Link>
              <div className={`dropdown-menu ${isDiningDropdownOpen ? 'dropdown-open' : ''}`}>
                <div className="dropdown-section">
                  <Link to="/dining-home" className="dropdown-item">
                    <span className="dropdown-icon">🏠</span>
                    Dining Home
                  </Link>
                  <Link to="/restaurants-map" className="dropdown-item">
                    <span className="dropdown-icon">🗺️</span>
                    Restaurants on Map
                  </Link>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-section">
                  <Link to="/fine-dining" className="dropdown-item">
                    <span className="dropdown-icon">⭐</span>
                    Fine Dining
                  </Link>
                  <Link to="/rooftop-dining" className="dropdown-item">
                    <span className="dropdown-icon">🌆</span>
                    Rooftop Dining
                  </Link>
                  <Link to="/waterfront-dining" className="dropdown-item">
                    <span className="dropdown-icon">🌊</span>
                    Waterfront Dining
                  </Link>
                  <Link to="/steakhouses" className="dropdown-item">
                    <span className="dropdown-icon">🥩</span>
                    Steakhouses
                  </Link>
                  <Link to="/sushi-seafood" className="dropdown-item">
                    <span className="dropdown-icon">🍣</span>
                    Sushi & Seafood
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/events">Events</Link>
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