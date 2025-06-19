import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li><a href="#team">Meet the team</a></li>
              <li><a href="#company">Company info</a></li>
              <li><a href="#advertising">Advertising</a></li>
              <li><a href="#legal">Legal notice</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#privacy">Privacy policy</a></li>
              <li><a href="#cookies">Cookie consent</a></li>
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#workspace">Our workspace</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Your Miami Experience</h3>
            <ul>
              <li><a href="#calendar">Event calendar</a></li>
              <li><a href="#hotels">Luxury hotels</a></li>
              <li><a href="#restaurants">Fine dining</a></li>
              <li><a href="#experiences">VIP experiences</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li><a href="#clubs">Top clubs</a></li>
              <li><a href="#dining">Restaurant guide</a></li>
              <li><a href="#activities">Activities</a></li>
              <li><a href="#magazine">Miami magazine</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div className="footer-legal">
            <p>&copy; 2024 MIA Insider. All rights reserved.</p>
            <p>Miami's premier nightlife and luxury experience guide</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;