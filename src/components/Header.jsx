import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            <Link to="/clubbing">Clubbing</Link>
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