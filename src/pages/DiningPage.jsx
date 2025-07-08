import React from 'react';
import './DiningPage.css';

const DiningPage = () => {
  return (
    <div className="dining-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Dining</h1>
          <p className="page-subtitle">
            Miami's finest restaurants and exclusive culinary experiences
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

export default DiningPage;