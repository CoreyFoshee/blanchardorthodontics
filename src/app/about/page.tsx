'use client';

import React from 'react';
import { useCMS } from '../../components/CMSProvider';
import { InfoBanner } from '../../components/InfoBanner';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ClientWrapper } from '../../components/ClientWrapper';

// Pixel-perfect migration of about.html to Next.js React page
// All class names, structure, and content are preserved
// All image paths updated to /images/...

function AboutPageContent() {
  const { teamMembers } = useCMS();

  return (
    <>
      <InfoBanner />
      <Header />
              <div className="about-intro-section">
          <div className="about-overlay"></div>
          <div className="container top-space w-container">
            <div className="w-layout-grid about-intro-wrap">
              <div id="w-node-cf3203bb-5add-b41d-ee28-b223c380f766-5d6608d0" className="section-title-area about-page">
                <h2 className="section-title-about-page white">Helping You Smile Has Always Been Our Dream.</h2>
              </div>
            </div>
          </div>
        </div>
      <div className="about-doctor">
        <div className="container w-container">
          <div className="doctor-crew-detail">
            <div className="w-layout-grid doctor-crew-wrap">
              <div className="doctor-intro-details">
                <h3 className="doctor-crew-title"><strong className="bold-text-5">It&apos;s more than just straight teeth.</strong></h3>
                <div className="doctor-quote">We believe that real confidence is when you put your faith in what God says about you; we want to give you a smile that lets that true confidence show through.</div>
              </div>
              <div className="excellency-wrap">
                <ul role="list" className="excellency-list hospital-speciality w-list-unstyled">
                  <li className="unordered-list-item bold">Small, Personable Environment</li>
                  <li className="unordered-list-item bold">Top technology and newest techniques</li>
                  <li className="unordered-list-item bold">Efficient and effective treatment</li>
                  <li className="unordered-list-item bold">Proven results</li>
                </ul>
                <a href="/appointments" className="button w-button">Reserve Free Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="doctors-listing-wrap about-page">
        <div className="container w-container">
          <div className="section-title-area center-align">
            <div className="sub-title-wrap center-align"><img src="/images/6512cf86865dd3d45d660939_subtitle-separator.svg" loading="lazy" width="32" alt="Sub Title Icon " />
              <h1 className="sub-title-text center-subtitle">Meet your orthodontist</h1><img src="/images/6512cf86865dd3d45d660939_subtitle-separator.svg" loading="lazy" width="32" alt="Sub Title Icon " />
            </div>
            <h2 className="section-title center">{teamMembers.length > 0 ? teamMembers[0].name : 'Dr. Katelyn Blanchard'}</h2>
          </div>
          <div className="doctor-collection-wrapper w-dyn-list">
            <div role="list" className="doctors-collection-list w-dyn-items w-row">
              {teamMembers.map((member) => (
                <div key={member._id} role="listitem" className="doctor-item-section w-dyn-item w-col w-col-4 tablet-center">
                  <div className="doctor-item">
                    <div className="doctor-image-wrap">
                      <a href={`/detail-team/${member.slug.current}`} className="doctor-image-link w-inline-block">
                        <img src={member.image?.asset?.url || '/images/webclip.jpg'} loading="lazy" alt={`${member.name} - ${member.title}`} className="doctor-listing-image" />
                      </a>
                      <div className="doctor-quicklinks doctor-listing">
                        <a href="tel:(903)707-6275" className="contact-link-wrap w-inline-block">
                          <img src="/images/doctor-call.svg" loading="lazy" alt="Phone Call" className="doctor-link-image" />
                        </a>
                        <a href="mailto:info@blanchardorthodontics.com" className="contact-link-wrap w-inline-block">
                          <img src="/images/doctor-mail.svg" loading="lazy" alt="Mail Icon" className="doctor-link-image-mail" />
                        </a>
                      </div>
                    </div>
                    <div className="doctor-contents">
                      <a href={`/detail-team/${member.slug.current}`} className="single-link-block w-inline-block">
                        <h2 className="doctor-title">{member.name}</h2>
                      </a>
                      <div className="doctor-position">{member.title}</div>
                      <div className="doctor-listing-bio">{member.bio}</div>
                      <div className="simple-link">
                        <a href={`/detail-team/${member.slug.current}`} className="simple-readmore-link">+  Read More</a>
                        <div className="simple-link-underline"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {teamMembers.length === 0 && (
              <div className="w-dyn-empty">
                <div>No team members found.</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="make-appointment-section">
        <div className="container w-container">
          <div className="section-title-area center-align">
            <div className="sub-title-wrap center-align"><img src="/images/6512cf86865dd3d45d660939_subtitle-separator.svg" loading="lazy" alt="Sub Title Icon " height="17" />
              <h1 className="sub-title-text blue-center-text">MAKE AN APPOINTMENT</h1><img src="/images/6512cf86865dd3d45d660939_subtitle-separator.svg" loading="lazy" width="32" alt="Sub Title Icon " />
            </div>
            <h2 className="section-title center"><strong>Ready for your smile transformation?</strong></h2>
          </div>
          <div className="appointment-button-section">
            <a href="/appointments" className="button w-button">Reserve Free Consultation</a>
            <div className="or-text black">(or)</div>
            <a href="tel:9037076275" className="simple-call-link black">Call: (903) 707-6275</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function AboutPage() {
  return (
    <ClientWrapper>
      <AboutPageContent />
    </ClientWrapper>
  );
} 