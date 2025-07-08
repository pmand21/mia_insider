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
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/clubbing" element={<ClubbingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/club-calendar" element={<ClubCalendarPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;