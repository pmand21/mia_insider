// server/scrapers/floydScraper.js
import Event from '../models/Event.js';

async function floydScraper() {
  const scrapedEvents = [
    {
      club: "Floyd",
      title: "Deep House Delight",
      date: "2025-04-20",
      startTime: "23:00",
      url: "https://floydmiami.com/events/deep-house-delight",
      ticketOptions: [
        { label: "GA", price: 35 },
        { label: "VIP", price: 80 }
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

export default floydScraper;