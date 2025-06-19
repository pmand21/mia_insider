import express from 'express';

const router = express.Router();

// Mock events data
const events = [
  {
    id: 1,
    title: 'LIV Miami presents David Guetta',
    club_id: 1,
    club_name: 'LIV Miami',
    date: '2024-12-28',
    time: '23:00',
    description: 'World-renowned DJ David Guetta brings his electrifying set to LIV Miami',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Electronic',
    ticket_price: {
      general: 80,
      vip: 200,
      table: 1500
    },
    featured: true
  },
  {
    id: 2,
    title: 'New Year\'s Eve Yacht Party',
    club_id: null,
    club_name: 'Private Yacht',
    date: '2024-12-31',
    time: '21:00',
    description: 'Exclusive NYE celebration aboard a luxury yacht in Biscayne Bay',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'VIP Experience',
    ticket_price: {
      general: 300,
      vip: 500,
      table: 2500
    },
    featured: true
  },
  {
    id: 3,
    title: 'Rooftop Sessions at 1 Hotel',
    club_id: null,
    club_name: '1 Hotel South Beach',
    date: '2025-01-05',
    time: '19:00',
    description: 'Sunset rooftop party with panoramic ocean views',
    image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Rooftop',
    ticket_price: {
      general: 60,
      vip: 150,
      table: 800
    },
    featured: false
  },
  {
    id: 4,
    title: 'Art Basel After Party',
    club_id: 2,
    club_name: 'STORY Miami',
    date: '2025-01-12',
    time: '22:00',
    description: 'Exclusive after-party celebrating Miami\'s premier art week',
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Art & Culture',
    ticket_price: {
      general: 100,
      vip: 250,
      table: 2000
    },
    featured: false
  },
  {
    id: 5,
    title: 'Calvin Harris Live',
    club_id: 3,
    club_name: 'E11EVEN Miami',
    date: '2025-01-15',
    time: '23:30',
    description: 'Scottish DJ Calvin Harris brings his chart-topping hits to Miami',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Electronic',
    ticket_price: {
      general: 90,
      vip: 220,
      table: 1800
    },
    featured: true
  },
  {
    id: 6,
    title: 'Miami Music Week Kickoff',
    club_id: 4,
    club_name: 'ROCKWELL Miami',
    date: '2025-03-20',
    time: '22:00',
    description: 'Official kickoff party for Miami Music Week with surprise guests',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    category: 'Music Festival',
    ticket_price: {
      general: 75,
      vip: 180,
      table: 1200
    },
    featured: false
  }
];

// GET /api/events - Get all events
router.get('/', (req, res) => {
  try {
    const { featured, category, club_id, limit } = req.query;
    let filteredEvents = [...events];

    // Filter by featured
    if (featured === 'true') {
      filteredEvents = filteredEvents.filter(event => event.featured);
    }

    // Filter by category
    if (category) {
      filteredEvents = filteredEvents.filter(event => 
        event.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    // Filter by club
    if (club_id) {
      filteredEvents = filteredEvents.filter(event => 
        event.club_id === parseInt(club_id)
      );
    }

    // Limit results
    if (limit) {
      filteredEvents = filteredEvents.slice(0, parseInt(limit));
    }

    // Sort by date
    filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    res.json({
      success: true,
      data: filteredEvents,
      count: filteredEvents.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch events'
    });
  }
});

// GET /api/events/:id - Get specific event
router.get('/:id', (req, res) => {
  try {
    const eventId = parseInt(req.params.id);
    const event = events.find(e => e.id === eventId);
    
    if (!event) {
      return res.status(404).json({
        success: false,
        error: 'Event not found'
      });
    }
    
    res.json({
      success: true,
      data: event
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch event'
    });
  }
});

// GET /api/events/calendar/:date - Get events for specific date
router.get('/calendar/:date', (req, res) => {
  try {
    const targetDate = req.params.date;
    const dateEvents = events.filter(event => event.date === targetDate);
    
    res.json({
      success: true,
      data: dateEvents,
      count: dateEvents.length,
      date: targetDate
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch events for date'
    });
  }
});

export default router;