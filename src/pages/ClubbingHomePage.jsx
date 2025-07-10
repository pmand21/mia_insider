import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clubsAPI, eventsAPI } from '../services/api';
import './ClubbingHomePage.css';

const ClubbingHomePage = () => {
  const [featuredClubs, setFeaturedClubs] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [clubsResponse, eventsResponse] = await Promise.all([
          clubsAPI.getAll(),
          eventsAPI.getUpcoming(3)
        ]);
        
        setFeaturedClubs(clubsResponse.data.slice(0, 6));
        setUpcomingEvents(eventsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="clubbing-home-page">
        <div className="container">
          <div className="loading-message">Loading clubbing content...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="clubbing-home-page">
      <div className="container">
        {/* Hero Section */}
        <div className="clubbing-hero">
          <div className="hero-content">
            <h1 className="hero-title">Miami Clubbing</h1>
            <p className="hero-subtitle">
              Discover Miami's most exclusive nightclubs, lounges, and party destinations
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10</span>
                <span className="stat-label">Premium Venues</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Weekly Events</span>
              </div>
              <div className="stat">
                <Link to="/vip" className="stat-number vip-stat-link">VIP</Link>
                <span className="stat-label">Access Available⚜️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="quick-nav">
          <h2 className="section-title">Explore Miami Nightlife</h2>
          <div className="nav-grid">
            <Link to="/club-guide" className="nav-card">
              <div className="nav-icon">🎯</div>
              <h3>Club Guide</h3>
              <p>Premium nightclubs with world-class DJs</p>
            </Link>
            <Link to="/lounge-guide" className="nav-card">
              <div className="nav-icon">🛋️</div>
              <h3>Lounge Guide</h3>
              <p>Sophisticated lounges for intimate experiences</p>
            </Link>
            <Link to="/day-beach-club-guide" className="nav-card">
              <div className="nav-icon">🏖️</div>
              <h3>Day/Beach Clubs</h3>
              <p>Pool parties and beachfront venues</p>
            </Link>
            <Link to="/cocktail-music-bars" className="nav-card">
              <div className="nav-icon">🍸</div>
              <h3>Cocktail & Music Bars</h3>
              <p>Craft cocktails with live music</p>
            </Link>
            <Link to="/clubs-map" className="nav-card">
              <div className="nav-icon">🗺️</div>
              <h3>Clubs on Map</h3>
              <p>Find venues near you</p>
            </Link>
            <Link to="/club-calendar" className="nav-card">
              <div className="nav-icon">📅</div>
              <h3>Club Calendar</h3>
              <p>Upcoming events and parties</p>
            </Link>
          </div>
        </div>

        {/* Featured Clubs */}
        <div className="featured-clubs">
          <div className="section-header">
            <h2 className="section-title">Featured Venues</h2>
            <Link to="/club-guide" className="view-all">View All Clubs</Link>
          </div>
          <div className="clubs-grid">
            {featuredClubs.map((club) => (
              <div key={club.id} className="club-card">
                <div className="club-image">
                  <img src={club.image} alt={club.name} />
                  <div className="club-rating">★ {club.rating}</div>
                </div>
                <div className="club-content">
                  <h3>{club.name}</h3>
                  <p className="club-location">{club.location}</p>
                  <div className="club-genres">
                    {club.music_genre.slice(0, 2).map((genre, index) => (
                      <span key={index} className="genre-tag">{genre}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="upcoming-events">
          <div className="section-header">
            <h2 className="section-title">This Week's Hottest Events</h2>
            <Link to="/club-calendar" className="view-all">View Calendar</Link>
          </div>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-category">{event.category}</div>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="event-venue">{event.club_name}</p>
                  <p className="event-date">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })} • {event.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready for VIP Treatment?</h2>
            <p>Skip the lines, get the best tables, and experience Miami nightlife like never before</p>
            <Link to="/vip" className="cta-button">Get VIP Access</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubbingHomePage;