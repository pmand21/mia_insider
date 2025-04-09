// server/scrapers/livScraper.js
import Event from '../models/Event.js';

async function livScraper() {
  const scrapedEvents = [
    {
      club: "LIV",
      title: "DJ Snake Live",
      date: "2025-04-13",
      startTime: "23:00",
      url: "https://livnightclub.com/events/dj-snake-live",
      ticketOptions: [
        { label: "GA", price: 60 },
        { label: "VIP", price: 150 }
      ]
    }
  ];

  for (const event of scrapedEvents) {
    await Event.findOneAndUpdate(
      {
        club: event.club,
        title: event.title,
        date: event.date,
        startTime: event.startTime
      },
      event,
      { upsert: true, new: true }
    );
  }

  return scrapedEvents;
}

export default livScraper;
