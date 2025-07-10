import React from 'react';
import './DayBeachClubGuidePage.css';

const DayBeachClubGuidePage = () => {
  return (
    <div className="day-beach-club-guide-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Day/Beach Club Guide</h1>
          <p className="page-subtitle">
            Miami's best pool parties and beachfront club experiences
          </p>
        </div>

        <div className="content-section">
          <div className="coming-soon">
            <p>Coming Soon</p>
            <div className="preview-content">
              <h3>What to Expect</h3>
              <ul>
                <li>Oceanfront pool parties</li>
                <li>Beachside cabanas</li>
                <li>Day club experiences</li>
                <li>Poolside bottle service</li>
                <li>Beach volleyball courts</li>
                <li>Sunset DJ sets</li>
                <li>Water sports activities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayBeachClubGuidePage;