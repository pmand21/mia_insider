// server/scrapers/e11evenScraper.js
import Event from '../models/Event.js';

async function e11evenScraper() {
  const scrapedEvents = [
    {
      club: "E11EVEN",
      title: "Late Night Party",
      date: "2025-04-12",
      startTime: "22:00",
      url: "https://11miami.com/events/late-night-party",
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

export default e11evenScraper;