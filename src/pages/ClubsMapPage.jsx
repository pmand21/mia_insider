import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import './ClubsMapPage.css';

const ClubsMapPage = () => {
  const [selectedTypes, setSelectedTypes] = useState({
    clubs: false,
    lounges: false,
    bars: false
  });
  
  const [clubTypes, setClubTypes] = useState({
    nightClub: false,
    dayBeachClub: false
  });

  const [isClubsExpanded, setIsClubsExpanded] = useState(false);

  const handleTypeChange = (type) => {
    if (type === 'clubs') {
      const newClubsState = !selectedTypes.clubs;
      setSelectedTypes(prev => ({
        ...prev,
        clubs: newClubsState
      }));
      
      // If checking clubs, check all sub-options
      if (newClubsState) {
        setClubTypes({
          nightClub: true,
          dayBeachClub: true
        });
        setIsClubsExpanded(true);
      } else {
        // If unchecking clubs, uncheck all sub-options
        setClubTypes({
          nightClub: false,
          dayBeachClub: false
        });
      }
    } else {
      setSelectedTypes(prev => ({
        ...prev,
        [type]: !prev[type]
      }));
    }
  };

  const handleClubTypeChange = (type) => {
    const newClubTypes = {
      ...clubTypes,
      [type]: !clubTypes[type]
    };
    setClubTypes(newClubTypes);
    
    // If any sub-option is checked, check the main clubs option
    const anyClubTypeChecked = Object.values(newClubTypes).some(value => value);
    setSelectedTypes(prev => ({
      ...prev,
      clubs: anyClubTypeChecked
    }));
  };

  const toggleClubsExpansion = () => {
    setIsClubsExpanded(!isClubsExpanded);
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
                <div className="checkbox-item-container">
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={selectedTypes.clubs}
                      onChange={() => handleTypeChange('clubs')}
                    />
                    <span className="checkmark"></span>
                    Clubs
                  </label>
                  <button 
                    className="expand-arrow"
                    onClick={toggleClubsExpansion}
                    type="button"
                  >
                    {isClubsExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                </div>
                
                {isClubsExpanded && (
                  <div className="sub-options">
                    <label className="checkbox-item sub-item">
                      <input
                        type="checkbox"
                        checked={clubTypes.nightClub}
                        onChange={() => handleClubTypeChange('nightClub')}
                      />
                      <span className="checkmark"></span>
                      Night Club
                    </label>
                    <label className="checkbox-item sub-item">
                      <input
                        type="checkbox"
                        checked={clubTypes.dayBeachClub}
                        onChange={() => handleClubTypeChange('dayBeachClub')}
                      />
                      <span className="checkmark"></span>
                      Day/Beach Club
                    </label>
                  </div>
                )}

                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.lounges}
                    onChange={() => handleTypeChange('lounges')}
                  />
                  <span className="checkmark"></span>
                  Lounges
                </label>
                
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.bars}
                    onChange={() => handleTypeChange('bars')}
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