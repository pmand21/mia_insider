import React from 'react';
import './CategoryGrid.css';

const CategoryGrid = () => {
  const categories = [
    {
      title: 'Club Calendar',
      description: 'Exclusive events at Miami\'s top 7 venues',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: '#clubs'
    },
    {
      title: 'VIP Experiences',
      description: 'Premium bottle service & table bookings',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: '#vip'
    },
    {
      title: 'Event Calendar',
      description: 'Special events, parties & performances',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: '#events'
    },
    {
      title: 'Fine Dining',
      description: 'Miami\'s most exclusive restaurants',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: '#dining'
    },
    {
      title: 'Luxury Hotels',
      description: 'Premium accommodations & suites',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: '#hotels'
    },
    {
      title: 'Experiences',
      description: 'Yacht parties, rooftop lounges & more',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: '#experiences'
    },
    {
      title: 'Miami Guide',
      description: 'Insider tips & exclusive recommendations',
      image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: '#guide'
    },
    {
      title: 'Concierge',
      description: 'Personal assistance & custom bookings',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      link: '#concierge'
    }
  ];

  return (
    <section className="category-grid-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Unmissable</h2>
          <p className="section-subtitle">
            Discover Miami's most exclusive nightlife experiences and luxury offerings
          </p>
        </div>
        
        <div className="category-grid">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href={category.link} 
              className="category-card"
            >
              <div className="category-image">
                <img src={category.image} alt={category.title} />
                <div className="category-overlay"></div>
              </div>
              <div className="category-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;