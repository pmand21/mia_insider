import React from 'react';
import './HotelsPage.css';

const HotelsPage = () => {
  return (
    <div className="hotels-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Hotels</h1>
          <p className="page-subtitle">
            Luxury accommodations and premium suites in Miami's best locations
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

export default HotelsPage;