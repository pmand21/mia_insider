import React from 'react';
import './FineDiningPage.css';

const SteakhousesPage = () => {
  return (
    <div className="fine-dining-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Steakhouses</h1>
          <p className="page-subtitle">
            Premium cuts and classic American steakhouse experiences
          </p>
        </div>

        <div className="content-section">
          <div className="coming-soon">
            <p>Coming Soon</p>
            <div className="preview-content">
              <h3>What to Expect</h3>
              <ul>
                <li>Prime aged steaks</li>
                <li>Wagyu and dry-aged cuts</li>
                <li>Classic steakhouse sides</li>
                <li>Extensive wine cellars</li>
                <li>Private dining rooms</li>
                <li>Tableside service</li>
                <li>Cigar lounges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteakhousesPage;