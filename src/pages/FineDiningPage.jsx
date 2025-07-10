import React from 'react';
import './FineDiningPage.css';

const FineDiningPage = () => {
  return (
    <div className="fine-dining-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Fine Dining</h1>
          <p className="page-subtitle">
            Miami's most prestigious restaurants and Michelin-starred experiences
          </p>
        </div>

        <div className="content-section">
          <div className="coming-soon">
            <p>Coming Soon</p>
            <div className="preview-content">
              <h3>What to Expect</h3>
              <ul>
                <li>Michelin-starred restaurants</li>
                <li>Award-winning chefs</li>
                <li>Tasting menu experiences</li>
                <li>Wine pairing dinners</li>
                <li>Private dining rooms</li>
                <li>Chef's table experiences</li>
                <li>Exclusive reservations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FineDiningPage;