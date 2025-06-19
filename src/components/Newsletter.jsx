import React, { useState } from 'react';
import { newsletterAPI } from '../services/api';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await newsletterAPI.subscribe(email);
      setStatus('success');
      setMessage('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error.error || 'Failed to subscribe. Please try again.');
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Subscribe to our newsletter</h2>
            <p>Get exclusive access to Miami's hottest events and insider deals</p>
          </div>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
            />
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
        
        {message && (
          <div className={`newsletter-message ${status}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;