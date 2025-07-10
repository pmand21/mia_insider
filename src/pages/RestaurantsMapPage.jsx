import React, { useState } from 'react';
import './RestaurantsMapPage.css';

const RestaurantsMapPage = () => {
  const [selectedTypes, setSelectedTypes] = useState({
    fineDining: false,
    casual: false,
    seafood: false,
    steakhouse: false,
    sushi: false,
    rooftop: false,
    waterfront: false
  });

  const handleTypeChange = (type) => {
    setSelectedTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="restaurants-map-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Restaurants on Map</h1>
          <p className="page-subtitle">
            Discover Miami's finest dining establishments with our interactive map
          </p>
        </div>

        <div className="map-container">
          <div className="map-sidebar">
            <div className="filter-section">
              <h3>Cuisine Types</h3>
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.fineDining}
                    onChange={() => handleTypeChange('fineDining')}
                  />
                  <span className="checkmark"></span>
                  Fine Dining
                </label>
                
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.casual}
                    onChange={() => handleTypeChange('casual')}
                  />
                  <span className="checkmark"></span>
                  Casual Dining
                </label>
                
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.seafood}
                    onChange={() => handleTypeChange('seafood')}
                  />
                  <span className="checkmark"></span>
                  Seafood
                </label>
                
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.steakhouse}
                    onChange={() => handleTypeChange('steakhouse')}
                  />
                  <span className="checkmark"></span>
                  Steakhouses
                </label>
                
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.sushi}
                    onChange={() => handleTypeChange('sushi')}
                  />
                  <span className="checkmark"></span>
                  Sushi & Japanese
                </label>
                
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.rooftop}
                    onChange={() => handleTypeChange('rooftop')}
                  />
                  <span className="checkmark"></span>
                  Rooftop Dining
                </label>
                
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.waterfront}
                    onChange={() => handleTypeChange('waterfront')}
                  />
                  <span className="checkmark"></span>
                  Waterfront
                </label>
              </div>
            </div>

            <div className="map-legend">
              <h3>Legend</h3>
              <div className="legend-items">
                <div className="legend-item">
                  <div className="legend-marker fine-dining"></div>
                  <span>Fine Dining</span>
                </div>
                <div className="legend-item">
                  <div className="legend-marker casual"></div>
                  <span>Casual Dining</span>
                </div>
                <div className="legend-item">
                  <div className="legend-marker seafood"></div>
                  <span>Seafood</span>
                </div>
                <div className="legend-item">
                  <div className="legend-marker steakhouse"></div>
                  <span>Steakhouses</span>
                </div>
              </div>
            </div>
          </div>

          <div className="map-area">
            <div className="map-placeholder">
              <div className="map-content">
                <h3>Interactive Restaurant Map Coming Soon</h3>
                <p>We're building an interactive map feature that will show:</p>
                <ul>
                  <li>Real-time restaurant locations</li>
                  <li>Live availability and reservations</li>
                  <li>Restaurant ratings and reviews</li>
                  <li>Distance and directions</li>
                  <li>Menu previews and pricing</li>
                  <li>Special offers and events</li>
                </ul>
                <div className="map-preview">
                  <div className="miami-outline">
                    <div className="venue-dot" style={{top: '25%', left: '35%'}}></div>
                    <div className="venue-dot" style={{top: '45%', left: '55%'}}></div>
                    <div className="venue-dot" style={{top: '65%', left: '40%'}}></div>
                    <div className="venue-dot" style={{top: '35%', left: '65%'}}></div>
                    <div className="venue-dot" style={{top: '55%', left: '25%'}}></div>
                    <div className="venue-dot" style={{top: '75%', left: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMapPage;