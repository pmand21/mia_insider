// server/scrapers/spaceScraper.js
import Event from '../models/Event.js';

async function spaceScraper() {
  const scrapedEvents = [
    {
      club: "Club Space",
      title: "Sunrise Sessions",
      date: "2025-04-13",
      startTime: "06:00",
      url: "https://clubspace.com/events/sunrise-sessions",
      ticketOptions: [
        { label: "GA", price: 40 },
        { label: "VIP", price: 90 }
      ]
    },
    {
      club: "Club Space",
      title: "Midnight Techno",
      date: "2025-04-14",
      startTime: "23:30",
      url: "https://clubspace.com/events/midnight-techno",
      ticketOptions: [
        { label: "GA", price: 55 },
        { label: "VIP Lounge", price: 120 }
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

export default spaceScraper;