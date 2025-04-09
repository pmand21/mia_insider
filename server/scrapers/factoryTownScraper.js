// server/scrapers/factoryTownScraper.js
import Event from '../models/Event.js';

async function factoryTownScraper() {
  const scrapedEvents = [
    {
      club: "Factory Town",
      title: "Open Air Warehouse",
      date: "2025-04-16",
      startTime: "21:00",
      url: "https://factorytown.com/events/open-air-warehouse",
      ticketOptions: [
        { label: "GA", price: 50 },
        { label: "VIP", price: 110 }
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

export default factoryTownScraper;