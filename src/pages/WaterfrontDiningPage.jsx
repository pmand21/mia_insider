import React from 'react';
import './FineDiningPage.css';

const WaterfrontDiningPage = () => {
  return (
    <div className="fine-dining-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Waterfront Dining</h1>
          <p className="page-subtitle">
            Oceanfront and bayfront restaurants with stunning water views
          </p>
        </div>

        <div className="content-section">
          <div className="coming-soon">
            <p>Coming Soon</p>
            <div className="preview-content">
              <h3>What to Expect</h3>
              <ul>
                <li>Ocean and bay views</li>
                <li>Fresh seafood specialties</li>
                <li>Waterside terraces</li>
                <li>Sunset dining</li>
                <li>Marina locations</li>
                <li>Yacht-accessible venues</li>
                <li>Beach club dining</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterfrontDiningPage;