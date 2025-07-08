import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Miami Nightlife"
          className="hero-image"
        />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in-up">
            Welcome to <span>MIA Insider</span>
          </h1>
          <p className="hero-subtitle fade-in-up">
            Your exclusive guide to Miami's most elite nightlife experiences
          </p>
          
          <div className="hero-buttons fade-in-up">
            <Link to="/calendar" className="btn btn-primary">MIA Calendar</Link>
            <Link to="/club-calendar" className="btn btn-secondary">Club Calendar</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;