import React, { useState } from 'react';
import './Contact.css';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thanks for your message! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <ScrollAnimation animation="fade-up">
        <h2>Get in Touch</h2>
      </ScrollAnimation>

      <div className="contact-container">
        <ScrollAnimation animation="fade-right" delay={200} className="contact-info">
          <p>Ready to discuss your project? Send me a message or email me directly at:</p>
          <a href="mailto:willfwalker@gmail.com" className="email-link">willfwalker@gmail.com</a>
          <p>I'm also available for quick calls to discuss your needs:</p>
          <a href="https://calendly.com" className="calendly-link" target="_blank" rel="noopener noreferrer">Schedule a call</a>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-left" delay={400} tagName="form" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>

          {submitStatus && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
