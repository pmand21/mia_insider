import React, { useState } from 'react';
import './VipPage.css';

const VipPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    eventDate: '',
    groupSize: '',
    budget: '',
    preferences: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Thank you! Your VIP request has been submitted. Our concierge team will contact you within 24 hours.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        eventType: '',
        eventDate: '',
        groupSize: '',
        budget: '',
        preferences: '',
        specialRequests: ''
      });
    } catch (error) {
      setSubmitMessage('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="vip-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">VIP Services</h1>
          <p className="page-subtitle">
            Experience Miami's nightlife like never before with our exclusive VIP concierge services
          </p>
        </div>

        <div className="vip-content">
          <div className="vip-info">
            <div className="info-card">
              <h3>What We Offer</h3>
              <ul>
                <li>Premium table reservations at top venues</li>
                <li>Skip-the-line access to exclusive clubs</li>
                <li>Private yacht charters and parties</li>
                <li>Celebrity meet & greets</li>
                <li>Luxury transportation services</li>
                <li>Personal concierge assistance</li>
                <li>Custom event planning</li>
                <li>Access to private events</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>VIP Packages</h3>
              <div className="package">
                <h4>Essential VIP</h4>
                <p>Table service, priority entry, dedicated host</p>
                <span className="price">Starting at $500</span>
              </div>
              <div className="package">
                <h4>Premium VIP</h4>
                <p>Everything in Essential + transportation, premium bottles</p>
                <span className="price">Starting at $1,500</span>
              </div>
              <div className="package">
                <h4>Ultimate VIP</h4>
                <p>Full concierge service, private events, yacht access</p>
                <span className="price">Starting at $5,000</span>
              </div>
            </div>
          </div>

          <div className="vip-form-container">
            <form className="vip-form" onSubmit={handleSubmit}>
              <h3>Request VIP Services</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventType">Event Type *</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select event type</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="bachelor">Bachelor/Bachelorette Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="yacht">Yacht Party</option>
                    <option value="club">Club Night</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="eventDate">Preferred Date *</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="groupSize">Group Size *</label>
                  <select
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select group size</option>
                    <option value="2-5">2-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="11-20">11-20 people</option>
                    <option value="21-50">21-50 people</option>
                    <option value="50+">50+ people</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget Range *</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select budget range</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="preferences">Venue Preferences</label>
                <textarea
                  id="preferences"
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleChange}
                  placeholder="Tell us about your preferred venues, music style, atmosphere, etc."
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any special accommodations, dietary restrictions, or specific requests?"
                  rows="3"
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit VIP Request'}
              </button>

              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipPage;