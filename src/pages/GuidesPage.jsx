import React from 'react';
import './GuidesPage.css';

const GuidesPage = () => {
  return (
    <div className="guides-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Guides</h1>
          <p className="page-subtitle">
            Insider tips, recommendations, and comprehensive Miami guides
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

export default GuidesPage;