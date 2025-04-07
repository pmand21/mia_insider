// fetchLivEvents.js
import axios from 'axios';

export const fetchLivEvents = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/liv-events');
    const events = response.data._embedded?.events || [];

    return events.map(event => ({
      club: 'LIV',
      title: event.name,
      url: event.url,
      date: event.dates.start.localDate,
      startTime: event.dates.start.localTime,
      djs: event._embedded?.attractions?.map(a => a.name) || [],
      priceRanges: event.priceRanges || []
    }));
  } catch (error) {
    console.error('Error fetching LIV events: ', error);
    return [];
  }
};
