import React, { useState, useEffect } from 'react';
import { eventsAPI } from '../services/api';
import './CalendarPage.css';

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await eventsAPI.getAll();
        setEvents(response.data);
      } catch (err) {
        setError('Failed to load events');
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => 
    event.date === selectedDate
  );

  if (loading) {
    return (
      <div className="calendar-page">
        <div className="container">
          <div className="loading-message">Loading calendar...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="calendar-page">
        <div className="container">
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="calendar-page">
      <div className="container">
        <div className="calendar-header">
          <h1 className="page-title">MIA Calendar</h1>
          <p className="page-subtitle">
            Discover Miami's hottest events and exclusive parties
          </p>
        </div>

        <div className="calendar-controls">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="date-picker"
          />
        </div>

        <div className="events-section">
          <h2 className="section-title">
            Events for {new Date(selectedDate).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </h2>

          {filteredEvents.length === 0 ? (
            <div className="no-events">
              <p>No events scheduled for this date.</p>
            </div>
          ) : (
            <div className="events-grid">
              {filteredEvents.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <div className="event-category">{event.category}</div>
                  </div>
                  <div className="event-content">
                    <h3>{event.title}</h3>
                    <p className="event-venue">{event.club_name}</p>
                    <p className="event-time">
                      {event.time}
                    </p>
                    <p className="event-description">
                      {event.description}
                    </p>
                    {event.ticket_price && (
                      <div className="event-pricing">
                        <span className="price-label">From:</span>
                        <span className="price">${event.ticket_price.general}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;