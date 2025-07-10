import React from 'react';
import './ClubGuidePage.css';

const ClubGuidePage = () => {
  // Club data for the 9 clubs (removed Nikki Beach)
  const clubs = [
    {
      id: 1,
      name: 'E11EVEN Miami',
      location: 'Downtown Miami',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.9',
      genres: ['Electronic', 'Hip-Hop'],
      description: '24/7 ultraclub with world-class entertainment and celebrity performances.'
    },
    {
      id: 2,
      name: 'SPACE Miami',
      location: 'Downtown Miami',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.5',
      genres: ['House', 'Techno'],
      description: 'Legendary club known for marathon DJ sets and underground vibes.'
    },
    {
      id: 3,
      name: 'LIV Miami',
      location: 'Fontainebleau Miami Beach',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.8',
      genres: ['Electronic', 'Pop'],
      description: 'World-renowned nightclub with A-list DJs and celebrity sightings.'
    },
    {
      id: 4,
      name: 'M2 Miami',
      location: 'South Beach',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.6',
      genres: ['House', 'Electronic'],
      description: 'Upscale venue featuring top international DJs and sophisticated crowd.'
    },
    {
      id: 5,
      name: 'Mr. Jones',
      location: 'Miami Beach',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.4',
      genres: ['Deep House', 'Techno'],
      description: 'Intimate underground venue with cutting-edge sound system.'
    },
    {
      id: 6,
      name: 'Factory Town',
      location: 'Wynwood',
      image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.3',
      genres: ['Industrial', 'Techno'],
      description: 'Raw warehouse space hosting underground electronic music events.'
    },
    {
      id: 7,
      name: 'Floyd Miami',
      location: 'South Beach',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.5',
      genres: ['House', 'Progressive'],
      description: 'Trendy spot known for progressive house and stylish atmosphere.'
    },
    {
      id: 8,
      name: 'Do Not Sit On The Furniture',
      location: 'South Beach',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.2',
      genres: ['Hip-Hop', 'R&B'],
      description: 'Hip-hop focused venue with unique decor and urban atmosphere.'
    },
    {
      id: 9,
      name: 'MYNT Lounge',
      location: 'South Beach',
      image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.4',
      genres: ['Lounge', 'Deep House'],
      description: 'Sophisticated lounge with upscale crowd and premium bottle service.'
    }
  ];

  return (
    <div className="club-guide-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Night Club Guide</h1>
          <p className="page-subtitle">
            Discover Miami's most exclusive nightclubs and premium venues
          </p>
        </div>

        <div className="clubs-section">
          <div className="clubs-grid">
            {clubs.map((club) => (
              <div key={club.id} className="club-card">
                <div className="club-image">
                  <img src={club.image} alt={club.name} />
                  <div className="club-rating">★ {club.rating}</div>
                </div>
                <div className="club-content">
                  <div className="club-header">
                    <div className="club-info">
                      <h3>{club.name}</h3>
                      <p className="club-location">{club.location}</p>
                    </div>
                    <div className="club-genres">
                      {club.genres.map((genre, index) => (
                        <span key={index} className="genre-tag">{genre}</span>
                      ))}
                    </div>
                  </div>
                  <p className="club-description">{club.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubGuidePage;