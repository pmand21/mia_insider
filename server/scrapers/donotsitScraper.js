// server/scrapers/donotsitScraper.js
import Event from '../models/Event.js';

async function donotsitScraper() {
  const scrapedEvents = [
    {
      club: "Do Not Sit on the Furniture",
      title: "Minimal Grooves Night",
      date: "2025-04-10",
      startTime: "22:00",
      url: "https://donotsitonthefurniture.com/events/minimal-grooves",
      ticketOptions: [
        { label: "GA", price: 30 },
        { label: "VIP", price: 70 }
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

export default donotsitScraper;