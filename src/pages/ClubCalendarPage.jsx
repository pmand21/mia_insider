import React, { useState, useEffect } from 'react';
import { clubsAPI } from '../services/api';
import './ClubCalendarPage.css';

const ClubCalendarPage = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        setLoading(true);
        const response = await clubsAPI.getAll();
        setClubs(response.data);
      } catch (err) {
        setError('Failed to load clubs');
        console.error('Error fetching clubs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  if (loading) {
    return (
      <div className="club-calendar-page">
        <div className="container">
          <div className="loading-message">Loading club calendar...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="club-calendar-page">
        <div className="container">
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="club-calendar-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Club Calendar</h1>
          <p className="page-subtitle">
            Discover Miami's top 7 exclusive nightclub venues
          </p>
        </div>

        <div className="clubs-section">
          <h2 className="section-title">Featured Clubs</h2>

          <div className="clubs-grid">
            {clubs.map((club) => (
              <div key={club.id} className="club-card">
                <div className="club-image">
                  <img src={club.image} alt={club.name} />
                  <div className="club-rating">
                    <span>★ {club.rating}</span>
                  </div>
                </div>
                <div className="club-content">
                  <h3>{club.name}</h3>
                  <p className="club-location">{club.location}</p>
                  <p className="club-description">{club.description}</p>
                  <div className="club-details">
                    <div className="club-capacity">
                      <span className="detail-label">Capacity:</span>
                      <span className="detail-value">{club.capacity.toLocaleString()}</span>
                    </div>
                    <div className="club-dress-code">
                      <span className="detail-label">Dress Code:</span>
                      <span className="detail-value">{club.dress_code}</span>
                    </div>
                  </div>
                  <div className="club-genres">
                    {club.music_genre.map((genre, index) => (
                      <span key={index} className="genre-tag">{genre}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCalendarPage;