import express from 'express';

const router = express.Router();

// Mock content data
const articles = [
  {
    id: 1,
    title: 'Exclusive yacht parties with Miami\'s elite',
    slug: 'exclusive-yacht-parties-miami-elite',
    category: 'VIP EXPERIENCES',
    excerpt: 'Discover the most luxurious floating venues where Miami\'s high society gathers for unforgettable nights on Biscayne Bay.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    author: 'MIA Insider Team',
    published_at: '2024-12-15T10:00:00Z',
    tags: ['NIGHTLIFE', 'RESTAURANTS', 'EXPERIENCES'],
    featured: true,
    views: 1250
  },
  {
    id: 2,
    title: 'Miami\'s hottest new rooftop opens',
    slug: 'miami-hottest-new-rooftop-opens',
    category: 'VENUES',
    excerpt: 'The city\'s latest sky-high venue promises panoramic views and world-class cocktails.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    author: 'Sarah Martinez',
    published_at: '2024-12-13T15:30:00Z',
    tags: ['ROOFTOP', 'COCKTAILS', 'VIEWS'],
    featured: false,
    views: 890
  },
  {
    id: 3,
    title: 'Art Basel after-parties guide',
    slug: 'art-basel-after-parties-guide',
    category: 'EVENTS',
    excerpt: 'Your insider access to the most exclusive celebrations during Miami\'s premier art week.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    author: 'Alex Rodriguez',
    published_at: '2024-12-08T12:00:00Z',
    tags: ['ART', 'CULTURE', 'PARTIES'],
    featured: false,
    views: 2100
  },
  {
    id: 4,
    title: 'Celebrity chef opens Miami Beach location',
    slug: 'celebrity-chef-miami-beach-location',
    category: 'DINING',
    excerpt: 'Michelin-starred dining comes to South Beach with this highly anticipated opening.',
    content: 'Full article content would go here...',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    author: 'Maria Gonzalez',
    published_at: '2024-12-01T09:15:00Z',
    tags: ['DINING', 'CHEF', 'SOUTH BEACH'],
    featured: false,
    views: 1680
  }
];

// GET /api/content/articles - Get all articles
router.get('/articles', (req, res) => {
  try {
    const { featured, category, limit } = req.query;
    let filteredArticles = [...articles];

    // Filter by featured
    if (featured === 'true') {
      filteredArticles = filteredArticles.filter(article => article.featured);
    }

    // Filter by category
    if (category) {
      filteredArticles = filteredArticles.filter(article => 
        article.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    // Limit results
    if (limit) {
      filteredArticles = filteredArticles.slice(0, parseInt(limit));
    }

    // Sort by published date (newest first)
    filteredArticles.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

    res.json({
      success: true,
      data: filteredArticles,
      count: filteredArticles.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch articles'
    });
  }
});

// GET /api/content/articles/:slug - Get specific article
router.get('/articles/:slug', (req, res) => {
  try {
    const article = articles.find(a => a.slug === req.params.slug);
    
    if (!article) {
      return res.status(404).json({
        success: false,
        error: 'Article not found'
      });
    }
    
    // Increment view count (in production, you'd update the database)
    article.views += 1;
    
    res.json({
      success: true,
      data: article
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch article'
    });
  }
});

export default router;