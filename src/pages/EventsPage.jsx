import React from 'react';
import './EventsPage.css';

const EventsPage = () => {
  return (
    <div className="events-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Events</h1>
          <p className="page-subtitle">
            Exclusive parties, performances, and special occasions in Miami
          </p>
        </div>

        <div className="content-section">
          <div className="coming-soon">
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;