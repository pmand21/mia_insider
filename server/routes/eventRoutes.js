// server/routes/eventRoutes.js
import express from 'express';
import Event from '../models/Event.js';
import livScraper from '../scrapers/livScraper.js';
import spaceScraper from '../scrapers/spaceScraper.js';
import e11evenScraper from '../scrapers/e11evenScraper.js';
import floydScraper from '../scrapers/floydScraper.js';
import m2Scraper from '../scrapers/m2Scraper.js';
import factoryTownScraper from '../scrapers/factoryTownScraper.js';
import donotsitScraper from '../scrapers/donotsitScraper.js';
// You'll continue adding more scrapers here

const router = express.Router();

// ✅ GET events by club (query param)
router.get('/events', async (req, res) => {
  const { club } = req.query;

  if (!club) {
    return res.status(400).json({ error: "Club is required in query string" });
  }

  try {
    const events = await Event.find({ club });
    res.json(events);
  } catch (err) {
    console.error(`Error fetching events for ${club}:`, err);
    res.status(500).json({ error: 'Failed to load events' });
  }
});

// ✅ Scraper endpoints
router.get('/scrape/liv', async (req, res) => {
  try {
    const events = await livScraper();
    res.json({ message: "LIV events scraped and stored", events });
  } catch (err) {
    console.error("LIV scrape error:", err);
    res.status(500).json({ error: "Scraping LIV failed" });
  }
});

router.get('/scrape/club-space', async (req, res) => {
  try {
    const events = await spaceScraper();
    res.json({ message: "Club Space events scraped and stored", events });
  } catch (err) {
    console.error("Club Space scrape error:", err);
    res.status(500).json({ error: "Scraping Club Space failed" });
  }
});

router.get('/scrape/e11even', async (req, res) => {
  try {
    const events = await e11evenScraper();
    res.json({ message: "E11EVEN events scraped and stored", events });
  } catch (err) {
    console.error("E11EVEN scrape error:", err);
    res.status(500).json({ error: "Scraping E11EVEN failed" });
  }
});

router.get('/scrape/floyd', async (req, res) => {
  try {
    const events = await floydScraper();
    res.json({ message: "Floyd events scraped and stored", events });
  } catch (err) {
    console.error("Floyd scrape error:", err);
    res.status(500).json({ error: "Scraping Floyd failed" });
  }
});

router.get('/scrape/m2', async (req, res) => {
  try {
    const events = await m2Scraper();
    res.json({ message: "M2 events scraped and stored", events });
  } catch (err) {
    console.error("M2 scrape error:", err);
    res.status(500).json({ error: "Scraping M2 failed" });
  }
});

router.get('/scrape/factory-town', async (req, res) => {
  try {
    const events = await factoryTownScraper();
    res.json({ message: "Factory Town events scraped and stored", events });
  } catch (err) {
    console.error("Factory Town scrape error:", err);
    res.status(500).json({ error: "Scraping Factory Town failed" });
  }
});

router.get('/scrape/do-not-sit', async (req, res) => {
  try {
    const events = await donotsitScraper();
    res.json({ message: "Do Not Sit events scraped and stored", events });
  } catch (err) {
    console.error("Do Not Sit scrape error:", err);
    res.status(500).json({ error: "Scraping Do Not Sit failed" });
  }
});


export default router;
