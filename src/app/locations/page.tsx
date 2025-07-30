'use client';

import React from 'react';
import { InfoBanner } from '../../components/InfoBanner';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ClientWrapper } from '../../components/ClientWrapper';

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
              <div className="form-block w-form">
                <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="get" className="form-minimum-width contact-page-form" data-wf-page-id="6512cf86865dd3d45d6608d3" data-wf-element-id="3f816721-25d9-06ee-5b30-655e553d742e">
                  <div className="w-row">
                    <div className="name-column w-col w-col-6"><label htmlFor="name" className="contact-form-lable">Name</label>
                      <div className="input-block"><img src="/images/form-user.svg" loading="lazy" alt="Form User Icon" className="form-icon" /><input className="form-input-field border-field w-input" maxLength={256} name="Name" data-name="Name" placeholder="Name" type="text" id="Name" required={true} /></div>
                    </div>
                    <div className="email-column w-col w-col-6"><label htmlFor="name-3" className="contact-form-lable">email</label>
                      <div className="input-block"><img src="/images/form-mail.svg" loading="lazy" alt="Form Email Icon" className="form-icon" /><input className="form-input-field border-field w-input" maxLength={256} name="Email" data-name="Email" placeholder="Email" type="email" id="Email" required={true} /></div>
                    </div>
                  </div>
                  <div className="w-row">
                    <div className="phone-number-column w-col w-col-6"><label htmlFor="name-3" className="contact-form-lable">Phone</label>
                      <div className="input-block"><img src="/images/form-phone.svg" loading="lazy" alt="Form Phone Number" className="form-icon" /><input className="form-input-field border-field w-input" maxLength={256} name="Phone-Number" data-name="Phone Number" placeholder="Phone" type="tel" id="Phone-Number" /></div>
                    </div>
                    <div className="project-column w-col w-col-6"><label htmlFor="name-3" className="contact-form-lable">Subject</label>
                      <div className="input-block"><input className="form-input-field border-field w-input" maxLength={256} name="Subject-Field" data-name="Subject Field" placeholder="Subject" type="text" id="Subject-Field" /><img src="/images/form-bookmark.svg" loading="lazy" alt="Form Phone Number" className="form-icon" /></div>
                    </div>
                  </div>
                  <div className="contact-form-text-area"><label htmlFor="name-3" className="contact-form-lable">how we can help you?</label><img src="/images/form-edit.svg" loading="lazy" alt="Form Phone Number" className="form-icon textarea" /><textarea placeholder="Type Your Message" maxLength={5000} id="Message" name="Message" data-name="Message" className="form-input-field textarea-border w-input"></textarea></div>
                  <div data-sitekey="6LeST68oAAAAAAM97OniU3BpJ-uyDRDYCl9MwQ4e" className="w-form-formrecaptcha recaptcha g-recaptcha g-recaptcha-error g-recaptcha-disabled"></div><label className="w-checkbox checkbox-field">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div><input type="checkbox" name="checkbox" id="checkbox" data-name="Checkbox" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span className="checkbox-label w-form-label">By providing your phone number, you agree to receive text messages from Blanchard Orthodontics. Message and data rates may apply. Message frequency varies. <em>Reply STOP to opt-out.</em></span>
                  </label>
                  <div className="appointment-button-section left-align"><input type="submit" data-wait="Please wait..." className="button-large w-button" value="Submit" /></div>
                </form>
                <div className="appointment-success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="appointment-error-message w-form-fail">
                  <div className="form-error-text">Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
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