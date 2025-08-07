'use client';

import React, { useState } from 'react';

interface ContactFormProps {
  variant?: 'home' | 'locations';
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  variant = 'home', 
  className = '' 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      setErrorMessage('Please agree to receive text messages.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Track form start with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CompleteRegistration', {
        content_name: 'Contact Form Started',
        content_category: 'Form'
      });
    }

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          consent
        }),
      });

      const result = await response.json();

      console.log('Form submission response:', { response: response.status, result });

      if (response.ok) {
        // Track form submission with Meta Pixel
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead', {
            content_name: 'Contact Form Submission',
            content_category: 'Form',
            value: 1,
            currency: 'USD'
          });
        }

        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setConsent(false);
      } else {

        setSubmitStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Home page form (simpler version)
  if (variant === 'home') {
    return (
      <div className={`form-block w-form ${className}`}>
        <form onSubmit={handleSubmit} className="form-minimum-width">
          <div className="w-layout-grid appointment-grid-wrap">
            <div className="input-block">
              <input 
                className="form-input-field border-field w-input" 
                maxLength={256} 
                name="name" 
                placeholder="Name" 
                type="text" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="input-block">
              <input 
                className="form-input-field border-field w-input" 
                maxLength={256} 
                name="email" 
                placeholder="Email" 
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="input-block">
              <input 
                className="form-input-field border-field w-input" 
                maxLength={256} 
                name="phone" 
                placeholder="Phone" 
                type="tel" 
                value={formData.phone}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="input-block">
              <input 
                className="form-input-field border-field w-input" 
                maxLength={256} 
                name="subject" 
                placeholder="Subject" 
                type="text" 
                value={formData.subject}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
          
          <label className="w-checkbox checkbox-field-2" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              style={{ margin: '4px 0 0 0', cursor: 'pointer' }}
            />
            <span className="checkbox-label w-form-label" style={{ fontSize: '14px', lineHeight: '1.4' }}>
              By providing your phone number, you agree to receive text messages from Blanchard Orthodontics. Message and data rates may apply. Message frequency varies. <em>Reply STOP to opt-out.</em>
            </span>
          </label>
          
          <div className="appointment-button-section left-align">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`button hover-white w-button ${isSubmitting ? 'submitting' : ''}`}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? (
                <>
                  <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⏳</span>
                  {' '}Please wait...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
        
        {submitStatus === 'success' && (
          <div className="appointment-success-message w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
        )}
        

        
        {(submitStatus === 'error' || errorMessage) && (
          <div className="appointment-error-message w-form-fail">
            <div className="error-message-title">
              {errorMessage || 'Oops! Something went wrong while submitting the form.'}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Locations page form (detailed version with icons)
  return (
    <div className={`form-block w-form ${className}`}>
      <form onSubmit={handleSubmit} className="form-minimum-width contact-page-form">
        <div className="w-row">
          <div className="name-column w-col w-col-6">
            <label htmlFor="name" className="contact-form-lable">Name</label>
            <div className="input-block">
              <img src="/images/form-user.svg" loading="lazy" alt="Form User Icon" className="form-icon" />
              <input 
                className="form-input-field border-field w-input" 
                maxLength={256} 
                name="name" 
                placeholder="Name" 
                type="text" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
          <div className="email-column w-col w-col-6">
            <label htmlFor="email" className="contact-form-lable">email</label>
            <div className="input-block">
              <img src="/images/form-mail.svg" loading="lazy" alt="Form Email Icon" className="form-icon" />
              <input 
                className="form-input-field border-field w-input" 
                maxLength={256} 
                name="email" 
                placeholder="Email" 
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
        </div>
        
        <div className="w-row">
          <div className="phone-number-column w-col w-col-6">
            <label htmlFor="phone" className="contact-form-lable">Phone</label>
            <div className="input-block">
              <img src="/images/form-phone.svg" loading="lazy" alt="Form Phone Number" className="form-icon" />
              <input 
                className="form-input-field border-field w-input" 
                maxLength={256} 
                name="phone" 
                placeholder="Phone" 
                type="tel" 
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="project-column w-col w-col-6">
            <label htmlFor="subject" className="contact-form-lable">Subject</label>
            <div className="input-block">
              <input 
                className="form-input-field border-field w-input" 
                maxLength={256} 
                name="subject" 
                placeholder="Subject" 
                type="text" 
                value={formData.subject}
                onChange={handleInputChange}
              />
              <img src="/images/form-bookmark.svg" loading="lazy" alt="Form Subject Icon" className="form-icon" />
            </div>
          </div>
        </div>
        
        <div className="contact-form-text-area">
          <label htmlFor="message" className="contact-form-lable">how we can help you?</label>
          <img src="/images/form-edit.svg" loading="lazy" alt="Form Message Icon" className="form-icon textarea" />
          <textarea 
            placeholder="Type Your Message" 
            maxLength={5000} 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-input-field textarea-border w-input"
          />
        </div>
        
        <label className="w-checkbox checkbox-field" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            style={{ margin: '4px 0 0 0', cursor: 'pointer' }}
          />
          <span className="checkbox-label w-form-label" style={{ fontSize: '14px', lineHeight: '1.4' }}>
            By providing your phone number, you agree to receive text messages from Blanchard Orthodontics. Message and data rates may apply. Message frequency varies. <em>Reply STOP to opt-out.</em>
          </span>
        </label>
        
                  <div className="appointment-button-section left-align">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`button-large w-button ${isSubmitting ? 'submitting' : ''}`}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? (
                <>
                  <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⏳</span>
                  {' '}Please wait...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </div>
      </form>
      
              {submitStatus === 'success' && (
          <div className="appointment-success-message w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
        )}
        

        
        {(submitStatus === 'error' || errorMessage) && (
          <div className="appointment-error-message w-form-fail">
            <div className="form-error-text">
              {errorMessage || 'Oops! Something went wrong while submitting the form.'}
            </div>
          </div>
        )}
    </div>
  );
};
