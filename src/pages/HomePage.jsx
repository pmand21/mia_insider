import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedContent from '../components/FeaturedContent';
import UpcomingEvents from '../components/UpcomingEvents';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedContent />
      <UpcomingEvents />
      <Newsletter />
    </>
  );
};

export default HomePage;