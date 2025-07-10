import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import ClubbingPage from './pages/ClubbingPage';
import EventsPage from './pages/EventsPage';
import DiningPage from './pages/DiningPage';
import HotelsPage from './pages/HotelsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import GuidesPage from './pages/GuidesPage';
import ClubCalendarPage from './pages/ClubCalendarPage';
import VipPage from './pages/VipPage';
import ClubbingHomePage from './pages/ClubbingHomePage';
import ClubsMapPage from './pages/ClubsMapPage';
import ClubGuidePage from './pages/ClubGuidePage';
import LoungeGuidePage from './pages/LoungeGuidePage';
import DayBeachClubGuidePage from './pages/DayBeachClubGuidePage';
import CocktailMusicBarsPage from './pages/CocktailMusicBarsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/clubbing" element={<ClubbingHomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/club-calendar" element={<ClubCalendarPage />} />
        <Route path="/vip" element={<VipPage />} />
        <Route path="/clubbing-home" element={<ClubbingHomePage />} />
        <Route path="/clubs-map" element={<ClubsMapPage />} />
        <Route path="/club-guide" element={<ClubGuidePage />} />
        <Route path="/lounge-guide" element={<LoungeGuidePage />} />
        <Route path="/day-beach-club-guide" element={<DayBeachClubGuidePage />} />
        <Route path="/cocktail-music-bars" element={<CocktailMusicBarsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;