'use client';

import React from 'react';
import { InfoBanner } from '../../components/InfoBanner';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ClientWrapper } from '../../components/ClientWrapper';

// Pixel-perfect migration of service.html to Next.js React page
// All class names, structure, and content are preserved
// All image paths updated to /images/...

function ServicePageContent() {
  return (
    <>
      <InfoBanner />
      <Header />
      <div className="banner-title-area-section">
        <div className="banner-title-overlay"></div>
        <div className="banner-area-title">
          <div className="container w-container">
            <div className="title-area-content">
              <h1 className="banner-title-text">Our Services</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="services-section">
        <div className="container w-container">
          <div className="service-section-area">
            <div className="w-layout-grid service-item-wrap">
              <div className="service-item">
                <div className="service-icon"><img src="/images/braces-tooth-white.svg" loading="lazy" width="64" alt="Service Icon" className="service-icon-image" /></div>
                <h3 className="service-title">BRACES</h3>
                <div className="service-content">We offer low profile metal braces that are more comfortable, hard to break, and treat almost any orthodontic issue effectively. Pair with any of the 25 colored rubber bands we offer to personalize them each time you come in!</div>
              </div>
              <div className="service-item">
                <div className="service-icon"><img src="/images/clear-braces-tooth-white.svg" loading="lazy" width="64" alt="Service Icon" className="service-icon-image" /></div>
                <h3 className="service-title">CLEAR BRACES</h3>
                <div className="service-content">Made of a clear material that doesn&apos;t stain, clear braces are a great option for both kids and adults.  With the same effectiveness as metal braces, clear braces are a no-brainer if colors just aren&apos;t for you.</div>
              </div>
              <div className="service-item">
                <div className="service-icon"><img src="/images/tooth-white.svg" loading="lazy" width="64" alt="Service Icon" className="service-icon-image" /></div>
                <h3 className="service-title">CLEAR ALIGNERS</h3>
                <div className="service-content">For an even more invisible option, we offer clear aligner treatment.  Aligners are removable, comfortable, and make orthodontic treatment a breeze. Your friends may not even notice you are in treatment until they see that your teeth have moved!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-single-intro-section">
        <div className="container w-container">
          <div className="w-layout-grid promise-grid">
            <div id="w-node-e17316ab-80ea-2b7e-eeba-ba88bd5f5fab-5d6608db" className="div-block-3"></div>
            <div className="promise-wrap">
              <div className="our-promise-item">
                <div className="promise-left-icon">
                  <div className="promise-icon-section"><img src="/images/Blanchard-B.png" loading="lazy" width="Auto" height="50" alt="Service Icon" className="promise-icon" /></div>
                </div>
                <div className="promise-content-area">
                  <h2 className="promise-content-title-copy service-single-intro"><strong>So Simple You Won&apos;t Even Think About It</strong></h2>
                </div>
              </div>
              <div className="intro-textblock">We know that orthodontic treatment can seem unattainable - because it is inconvenient or expensive. We want to break down any barrier between you and the smile you want. As the <strong>only orthodontist in Cherokee County</strong>, we want you to spend less time out of school or your place of work coming to appointments. We accept all insurance plans and work with you to make orthodontic treatment affordable, with <strong>extended interest-free financing</strong> and <strong>low down payments</strong>.<br /><br />We want to keep the small town feel alive in our office. When you join our patient family, you are more than just a number or a mouth.  We want to know you and care for you in a personal way. </div>
              <a href="/appointments" className="button-large w-button">Reserve Free Consultation</a>
            </div>
          </div>
        </div>
      </div>
      <div className="features-section">
        <div className="container w-container">
          <div className="feature-images">
            <div className="w-layout-grid featured-grid"><img src="/images/About-1.webp" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" srcSet="/images/About-1-p-500.webp 500w, /images/About-1-p-800.webp 800w, /images/About-1-p-1080.webp 1080w, /images/About-1-p-1600.webp 1600w, /images/About-1-p-2000.webp 2000w, /images/About-1-p-2600.webp 2600w, /images/About-1-p-3200.webp 3200w, /images/About-1.webp 4740w" alt="Feature Image" className="featured-image" /><img src="/images/About-2.webp" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" srcSet="/images/About-2-p-500.webp 500w, /images/About-2-p-800.webp 800w, /images/About-2-p-1080.webp 1080w, /images/About-2-p-1600.webp 1600w, /images/About-2-p-2000.webp 2000w, /images/About-2-p-2600.webp 2600w, /images/About-2-p-3200.webp 3200w, /images/About-2.webp 4899w" alt="Feature image" className="featured-image column-right-space" /></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function ServicePage() {
  return (
    <ClientWrapper>
      <ServicePageContent />
    </ClientWrapper>
  );
} 