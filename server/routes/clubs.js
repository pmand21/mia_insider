import express from 'express';

const router = express.Router();

// Mock data for Miami's top clubs
const clubs = [
  {
    id: 1,
    name: 'LIV Miami',
    location: 'Fontainebleau Miami Beach',
    description: 'World-renowned nightclub with A-list DJs and celebrities',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    capacity: 2000,
    dress_code: 'Upscale nightlife attire',
    music_genre: ['Electronic', 'Hip-Hop', 'Pop'],
    vip_available: true,
    rating: 4.8
  },
  {
    id: 2,
    name: 'STORY Miami',
    location: 'South Beach',
    description: 'Multi-level nightclub with cutting-edge sound and lighting',
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    capacity: 3000,
    dress_code: 'Fashionable nightlife attire',
    music_genre: ['Electronic', 'House', 'Techno'],
    vip_available: true,
    rating: 4.7
  },
  {
    id: 3,
    name: 'E11EVEN Miami',
    location: 'Downtown Miami',
    description: '24/7 ultraclub with world-class entertainment',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    capacity: 1500,
    dress_code: 'Upscale casual to formal',
    music_genre: ['Electronic', 'Hip-Hop', 'Latin'],
    vip_available: true,
    rating: 4.9
  },
  {
    id: 4,
    name: 'ROCKWELL Miami',
    location: 'South Beach',
    description: 'Intimate venue with top-tier DJs and exclusive atmosphere',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    capacity: 800,
    dress_code: 'Chic nightlife attire',
    music_genre: ['House', 'Techno', 'Electronic'],
    vip_available: true,
    rating: 4.6
  },
  {
    id: 5,
    name: 'SPACE Miami',
    location: 'Downtown Miami',
    description: 'Legendary club known for marathon DJ sets',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    capacity: 2500,
    dress_code: 'Casual to upscale',
    music_genre: ['House', 'Techno', 'Progressive'],
    vip_available: true,
    rating: 4.5
  },
  {
    id: 6,
    name: 'WALL Lounge',
    location: 'South Beach',
    description: 'Sophisticated lounge with rooftop terrace',
    image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    capacity: 600,
    dress_code: 'Upscale lounge attire',
    music_genre: ['Deep House', 'Nu-Disco', 'Lounge'],
    vip_available: true,
    rating: 4.4
  },
  {
    id: 7,
    name: 'HYDE Beach',
    location: 'SLS South Beach',
    description: 'Beachfront club with pool and ocean views',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    capacity: 1200,
    dress_code: 'Beach chic to upscale',
    music_genre: ['House', 'Electronic', 'Pop'],
    vip_available: true,
    rating: 4.3
  }
];

// GET /api/clubs - Get all clubs
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: clubs,
      count: clubs.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch clubs'
    });
  }
});

// GET /api/clubs/:id - Get specific club
router.get('/:id', (req, res) => {
  try {
    const clubId = parseInt(req.params.id);
    const club = clubs.find(c => c.id === clubId);
    
    if (!club) {
      return res.status(404).json({
        success: false,
        error: 'Club not found'
      });
    }
    
    res.json({
      success: true,
      data: club
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch club'
    });
  }
});

export default router;