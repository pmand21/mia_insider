import React from 'react';
import './LoungeGuidePage.css';

const LoungeGuidePage = () => {
  return (
    <div className="lounge-guide-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Lounge Guide</h1>
          <p className="page-subtitle">
            Discover Miami's most sophisticated lounges and intimate venues
          </p>
        </div>

        <div className="content-section">
          <div className="coming-soon">
            <p>Coming Soon</p>
            <div className="preview-content">
              <h3>What to Expect</h3>
              <ul>
                <li>Upscale lounge experiences</li>
                <li>Craft cocktail menus</li>
                <li>Intimate atmosphere</li>
                <li>VIP bottle service</li>
                <li>Live music performances</li>
                <li>Rooftop terraces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoungeGuidePage;