import React, { useState } from 'react';
import './ClubsMapPage.css';

const ClubsMapPage = () => {
  const [selectedTypes, setSelectedTypes] = useState({
    clubs: true,
    lounges: false
  });
  
  const [clubTypes, setClubTypes] = useState({
    dayClub: false,
    nightClub: true,
    beachClub: false
  });
  
  const [showBars, setShowBars] = useState(false);

  const handleTypeChange = (type) => {
    setSelectedTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleClubTypeChange = (type) => {
    setClubTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="clubs-map-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Clubs on Map</h1>
          <p className="page-subtitle">
            Discover Miami's nightlife venues with our interactive map
          </p>
        </div>

        <div className="map-container">
          <div className="map-sidebar">
            <div className="filter-section">
              <h3>Venue Types</h3>
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.clubs}
                    onChange={() => handleTypeChange('clubs')}
                  />
                  <span className="checkmark"></span>
                  Clubs
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.lounges}
                    onChange={() => handleTypeChange('lounges')}
                  />
                  <span className="checkmark"></span>
                  Lounges
                </label>
              </div>
            </div>

            {selectedTypes.clubs && (
              <div className="filter-section">
                <h3>Club Types</h3>
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={clubTypes.dayClub}
                      onChange={() => handleClubTypeChange('dayClub')}
                    />
                    <span className="checkmark"></span>
                    Day Club
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={clubTypes.nightClub}
                      onChange={() => handleClubTypeChange('nightClub')}
                    />
                    <span className="checkmark"></span>
                    Night Club
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={clubTypes.beachClub}
                      onChange={() => handleClubTypeChange('beachClub')}
                    />
                    <span className="checkmark"></span>
                    Beach Club
                  </label>
                </div>
              </div>
            )}

            <div className="filter-section">
              <h3>Additional Options</h3>
              <div className="checkbox-group">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={showBars}
                    onChange={() => setShowBars(!showBars)}
                  />
                  <span className="checkmark"></span>
                  Bars
                </label>
              </div>
            </div>

            <div className="map-legend">
              <h3>Legend</h3>
              <div className="legend-items">
                <div className="legend-item">
                  <div className="legend-marker club"></div>
                  <span>Nightclubs</span>
                </div>
                <div className="legend-item">
                  <div className="legend-marker lounge"></div>
                  <span>Lounges</span>
                </div>
                <div className="legend-item">
                  <div className="legend-marker bar"></div>
                  <span>Bars</span>
                </div>
              </div>
            </div>
          </div>

          <div className="map-area">
            <div className="map-placeholder">
              <div className="map-content">
                <h3>Interactive Map Coming Soon</h3>
                <p>We're building an interactive map feature that will show:</p>
                <ul>
                  <li>Real-time venue locations</li>
                  <li>Live event information</li>
                  <li>Venue ratings and reviews</li>
                  <li>Distance and directions</li>
                  <li>Table availability</li>
                </ul>
                <div className="map-preview">
                  <div className="miami-outline">
                    <div className="venue-dot" style={{top: '30%', left: '40%'}}></div>
                    <div className="venue-dot" style={{top: '50%', left: '60%'}}></div>
                    <div className="venue-dot" style={{top: '70%', left: '45%'}}></div>
                    <div className="venue-dot" style={{top: '40%', left: '70%'}}></div>
                    <div className="venue-dot" style={{top: '60%', left: '30%'}}></div>
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

export default ClubsMapPage;