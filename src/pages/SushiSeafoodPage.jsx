import React from 'react';
import './FineDiningPage.css';

const SushiSeafoodPage = () => {
  return (
    <div className="fine-dining-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Sushi & Seafood</h1>
          <p className="page-subtitle">
            Fresh catches and authentic Japanese cuisine experiences
          </p>
        </div>

        <div className="content-section">
          <div className="coming-soon">
            <p>Coming Soon</p>
            <div className="preview-content">
              <h3>What to Expect</h3>
              <ul>
                <li>Fresh daily catches</li>
                <li>Omakase experiences</li>
                <li>Sushi bar seating</li>
                <li>Raw bar selections</li>
                <li>Japanese sake pairings</li>
                <li>Chef's special rolls</li>
                <li>Sashimi platters</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SushiSeafoodPage;