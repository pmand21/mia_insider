// server/scrapers/m2Scraper.js
import Event from '../models/Event.js';

async function m2Scraper() {
  const scrapedEvents = [
    {
      club: "M2",
      title: "Bassline Invasion",
      date: "2025-04-16",
      startTime: "22:30",
      url: "https://m2miami.com/events/bassline-invasion",
      ticketOptions: [
        { label: "GA", price: 45 },
        { label: "VIP", price: 100 }
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

export default m2Scraper;