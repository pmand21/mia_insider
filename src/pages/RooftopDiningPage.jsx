import React from 'react';
import './FineDiningPage.css';

const RooftopDiningPage = () => {
  return (
    <div className="fine-dining-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Rooftop Dining</h1>
          <p className="page-subtitle">
            Sky-high restaurants with breathtaking views of Miami's skyline
          </p>
        </div>

        <div className="content-section">
          <div className="coming-soon">
            <p>Coming Soon</p>
            <div className="preview-content">
              <h3>What to Expect</h3>
              <ul>
                <li>Panoramic city views</li>
                <li>Sunset dining experiences</li>
                <li>Craft cocktail bars</li>
                <li>Open-air terraces</li>
                <li>Skyline photography spots</li>
                <li>Private event spaces</li>
                <li>Weather-protected seating</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RooftopDiningPage;