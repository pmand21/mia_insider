import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 8000; // Or anything like 5100, 8080, 9000, etc.

// ✅ Properly configure CORS to allow frontend
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET'],
  credentials: true
}));

const TICKETMASTER_API_KEY = process.env.TICKETMASTER_API_KEY;
const VENUE_ID = 'KovZ917Ac_V';

app.get('/api/liv-events', async (req, res) => {
  try {
    console.log("➡️ Fetching events from Ticketmaster...");
    const { data } = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
      params: {
        apikey: TICKETMASTER_API_KEY,
        venueId: VENUE_ID,
        countryCode: 'US',
        size: 100
      },
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json'
      }
    });

    const events = data._embedded?.events || [];
    console.log(`✅ Got ${events.length} events`);
    
    // ✅ Match frontend expectation
    res.json({ _embedded: { events } });
  } catch (err) {
    console.error('❌ Error fetching events:', err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
