'use client';

import React from 'react';
import { InfoBanner } from '../../components/InfoBanner';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ClientWrapper } from '../../components/ClientWrapper';
import { ContactForm } from '../../components/ContactForm';

// Pixel-perfect migration of locations.html to Next.js React page
// All class names, structure, and content are preserved
// All image paths updated to /images/...

function LocationsPageContent() {
  return (
    <>
      <InfoBanner />
      <Header />
      <div className="banner-title-area-section">
        <div className="banner-title-overlay"></div>
        <div className="banner-area-title">
          <div className="container w-container">
            <div className="title-area-content">
              <h1 className="banner-title-text">Locations</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-page-section">
        <div className="contact-form-content-area">
          <div className="container w-container">
            <div className="section-title-area center-align">
              <h2 className="heading-2 blue">Jacksonville Location</h2>
            </div>
            <div className="location-forms">
              <div className="contact-content-area">
                <div className="map w-widget w-widget-map" style={{ width: '100%', height: '400px', border: '1px solid #ccc', borderRadius: '8px' }}>
                  <iframe
                    src="https://maps.google.com/maps?q=1501+East+Rusk+St,+Jacksonville,+TX+75766&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="contact-content-details">
                  <div className="contact-details">
                    <div className="call-section contact-page">
                      <div className="call-icon"><img src="/images/contact-mail-icon.svg" loading="lazy" alt="Contact detail icon" /></div>
                    </div>
                    <a href="mailto:info@blanchardorthodontics.com" className="contact-detail-text">info@blanchardorthodontics.com</a>
                  </div>
                  <div className="contact-details">
                    <div className="call-section contact-page">
                      <div className="call-icon"><img src="/images/contact-home-icon.svg" loading="lazy" alt="Contact detail icon" /></div>
                    </div>
                    <div className="contact-detail-text address-text">1501 East Rusk St<br />Jacksonville, TX 75766</div>
                  </div>
                  <div className="contact-details">
                    <div className="call-section contact-page">
                      <div className="call-icon"><img src="/images/phone-call-black.svg" loading="lazy" alt="" /></div>
                    </div>
                    <div className="contact-detail-text address-text">(903) 707-6275</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container w-container">
            <div className="section-title-area center-align">
              <h2 className="heading-2">Tyler Location</h2>
            </div>
            <div className="contact-form-wrap">
              <div className="contact-content-area">
                <div className="map w-widget w-widget-map" style={{ width: '100%', height: '400px', border: '1px solid #ccc', borderRadius: '8px' }}>
                  <iframe
                    src="https://maps.google.com/maps?q=3824+SouthPark+Dr,+Tyler,+TX+75703&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="contact-content-details">
                  <div className="contact-details">
                    <div className="call-section contact-page">
                      <div className="call-icon"><img src="/images/contact-mail-icon.svg" loading="lazy" alt="Contact detail icon" /></div>
                    </div>
                    <a href="mailto:info@blanchardorthodontics.com" className="contact-detail-text">info@blanchardorthodontics.com</a>
                  </div>
                  <div className="contact-details">
                    <div className="call-section contact-page">
                      <div className="call-icon"><img src="/images/contact-home-icon.svg" loading="lazy" alt="Contact detail icon" /></div>
                    </div>
                    <div className="contact-detail-text address-text">3824 SouthPark Dr<br />Tyler, TX 75703</div>
                  </div>
                  <div className="contact-details">
                    <div className="call-section contact-page">
                      <div className="call-icon"><img src="/images/phone-call-black.svg" loading="lazy" alt="" /></div>
                    </div>
                    <div className="contact-detail-text address-text">(903) 707-6275</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container w-container">
            <div className="section-title-area center-align">
              <h2 className="heading-2">Contact Us</h2>
            </div>
            <div className="contact-form-area">
              <ContactForm variant="locations" />
              <div className="section-title-area center-align"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function LocationsPage() {
  return (
    <ClientWrapper>
      <LocationsPageContent />
    </ClientWrapper>
  );
} 