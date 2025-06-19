import express from 'express';

const router = express.Router();

// Mock newsletter subscribers storage (in production, use a database)
const subscribers = [];

// POST /api/newsletter/subscribe - Subscribe to newsletter
router.post('/subscribe', (req, res) => {
  try {
    const { email, name } = req.body;

    // Basic validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        error: 'Valid email address is required'
      });
    }

    // Check if already subscribed
    const existingSubscriber = subscribers.find(sub => sub.email === email);
    if (existingSubscriber) {
      return res.status(409).json({
        success: false,
        error: 'Email already subscribed'
      });
    }

    // Add subscriber
    const subscriber = {
      id: subscribers.length + 1,
      email,
      name: name || null,
      subscribed_at: new Date().toISOString(),
      active: true
    };

    subscribers.push(subscriber);

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: {
        email: subscriber.email,
        subscribed_at: subscriber.subscribed_at
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to subscribe to newsletter'
    });
  }
});

// GET /api/newsletter/subscribers - Get subscriber count (admin only)
router.get('/subscribers', (req, res) => {
  try {
    const activeSubscribers = subscribers.filter(sub => sub.active);
    
    res.json({
      success: true,
      data: {
        total_subscribers: activeSubscribers.length,
        recent_subscribers: activeSubscribers.slice(-5).map(sub => ({
          email: sub.email,
          subscribed_at: sub.subscribed_at
        }))
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch subscriber data'
    });
  }
});

export default router;