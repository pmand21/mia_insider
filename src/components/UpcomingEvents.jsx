import React, { useState, useEffect } from 'react';
import { eventsAPI } from '../services/api';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await eventsAPI.getUpcoming(4);
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

  if (loading) {
    return (
      <section className="upcoming-events">
        <div className="container">
          <div className="events-header">
            <h2 className="section-title">Upcoming Events</h2>
          </div>
          <div className="loading-message">Loading events...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="upcoming-events">
        <div className="container">
          <div className="events-header">
            <h2 className="section-title">Upcoming Events</h2>
          </div>
          <div className="error-message">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="upcoming-events">
      <div className="container">
        <div className="events-header">
          <h2 className="section-title">Upcoming Events</h2>
          <a href="#all-events" className="view-all">View All</a>
        </div>
        
        <div className="events-grid">
          {events.map((event) => (
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
                    day: 'numeric',
                    year: 'numeric'
                  })} at {event.time}
                </p>
                {event.ticket_price && (
                  <p className="event-price">
                    From ${event.ticket_price.general}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;