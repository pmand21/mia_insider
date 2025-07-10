import React from 'react';
import './ClubGuidePage.css';

const ClubGuidePage = () => {
  // Club data for the 10 clubs you specified
  const clubs = [
    {
      id: 1,
      name: 'E11EVEN Miami',
      location: 'Downtown Miami',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.9',
      genres: ['Electronic', 'Hip-Hop', 'Latin']
    },
    {
      id: 2,
      name: 'SPACE Miami',
      location: 'Downtown Miami',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.5',
      genres: ['House', 'Techno', 'Progressive']
    },
    {
      id: 3,
      name: 'LIV Miami',
      location: 'Fontainebleau Miami Beach',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.8',
      genres: ['Electronic', 'Hip-Hop', 'Pop']
    },
    {
      id: 4,
      name: 'M2 Miami',
      location: 'South Beach',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.6',
      genres: ['House', 'Electronic', 'Dance']
    },
    {
      id: 5,
      name: 'Mr. Jones',
      location: 'Miami Beach',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.4',
      genres: ['Deep House', 'Techno', 'Underground']
    },
    {
      id: 6,
      name: 'Factory Town',
      location: 'Wynwood',
      image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.3',
      genres: ['Industrial', 'Techno', 'Alternative']
    },
    {
      id: 7,
      name: 'Floyd Miami',
      location: 'South Beach',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.5',
      genres: ['House', 'Electronic', 'Progressive']
    },
    {
      id: 8,
      name: 'Nikki Beach',
      location: 'South Beach',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.7',
      genres: ['Beach House', 'Lounge', 'Chill']
    },
    {
      id: 9,
      name: 'Do Not Sit On The Furniture',
      location: 'South Beach',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.2',
      genres: ['Hip-Hop', 'R&B', 'Pop']
    },
    {
      id: 10,
      name: 'MYNT Lounge',
      location: 'South Beach',
      image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      rating: '4.4',
      genres: ['Lounge', 'Deep House', 'Sophisticated']
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
          <h2 className="section-title">Miami's Premier Nightclubs</h2>
          <div className="clubs-grid">
            {clubs.map((club) => (
              <div key={club.id} className="club-card">
                <div className="club-image">
                  <img src={club.image} alt={club.name} />
                  <div className="club-rating">★ {club.rating}</div>
                </div>
                <div className="club-content">
                  <h3>{club.name}</h3>
                  <p className="club-location">{club.location}</p>
                  <div className="club-genres">
                    {club.genres.slice(0, 2).map((genre, index) => (
                      <span key={index} className="genre-tag">{genre}</span>
                    ))}
                  </div>
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