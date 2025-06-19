import React, { useState, useEffect } from 'react';
import { contentAPI } from '../services/api';
import './FeaturedContent.css';

const FeaturedContent = () => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [sidebarArticles, setSidebarArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        
        // Fetch all articles
        const response = await contentAPI.getArticles({ limit: 4 });
        const articles = response.data;
        
        // Separate featured and sidebar articles
        const featured = articles.find(article => article.featured);
        const sidebar = articles.filter(article => !article.featured).slice(0, 3);
        
        setFeaturedArticle(featured);
        setSidebarArticles(sidebar);
      } catch (err) {
        setError('Failed to load content');
        console.error('Error fetching content:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return (
      <section className="featured-content">
        <div className="container">
          <div className="featured-header">
            <h2 className="section-title">Magazine Highlights</h2>
          </div>
          <div className="loading-message">Loading content...</div>
        </div>
      </section>
    );
  }

  if (error || !featuredArticle) {
    return (
      <section className="featured-content">
        <div className="container">
          <div className="featured-header">
            <h2 className="section-title">Magazine Highlights</h2>
          </div>
          <div className="error-message">{error || 'No content available'}</div>
        </div>
      </section>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return '1 week ago';
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  return (
    <section className="featured-content">
      <div className="container">
        <div className="featured-header">
          <h2 className="section-title">Magazine Highlights</h2>
        </div>
        
        <div className="featured-main">
          <div className="featured-article">
            <div className="article-image">
              <img src={featuredArticle.image} alt={featuredArticle.title} />
            </div>
            <div className="article-content">
              <span className="article-category">{featuredArticle.category}</span>
              <h3>{featuredArticle.title}</h3>
              <p>{featuredArticle.excerpt}</p>
              <div className="article-meta">
                {featuredArticle.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <a href={`#article/${featuredArticle.slug}`} className="read-more">
                READ MORE
              </a>
            </div>
          </div>
          
          <div className="sidebar-articles">
            {sidebarArticles.map((article) => (
              <article key={article.id} className="sidebar-article">
                <h4>{article.title}</h4>
                <p>{article.excerpt}</p>
                <span className="article-date">
                  {formatDate(article.published_at)}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;