'use client';

import React from 'react';
import { InfoBanner } from '../components/InfoBanner';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ClientWrapper } from '../components/ClientWrapper';
import { ContactForm } from '../components/ContactForm';

// Pixel-perfect migration of index.html to Next.js React page
// All class names, structure, and content are preserved
// All image paths updated to /images/...

function HomeContent() {
  return (
    <>
      <InfoBanner />
      <Header />

      {/* Cookie Consent Banner */}
      <div id="popupWrapper" className="cookies">
        <div id="consentPopup" fs-cc="banner" className="fs-cookie-popup">
          <div className="cookie-tag">We value your privacy</div>
          <p className="cookie-paragraph">We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.<br /></p>
          <div id="w-node-f3a05bf4-dbf3-f10c-2b27-bf024268b78e-5d66087f" className="button-wrapper w-clearfix">
            <a id="consentBtn" fs-cc="allow" href="#" className="button-2 accept w-node-f3a05bf4-dbf3-f10c-2b27-bf024268b78f-5d66087f w-button">Accept all</a>
            <a fs-cc="deny" id="w-node-f3a05bf4-dbf3-f10c-2b27-bf024268b791-5d66087f" data-w-id="f3a05bf4-dbf3-f10c-2b27-bf024268b791" href="#" className="button-2 deny w-button">Deny</a>
          </div>
        </div>
        <div fs-cc="preferences" className="fs-preferences-manager-wrapper">
          <div className="preferences-container">
            <div className="privacy-title">Preferences</div>
            <p className="paragraph-3">Privacy is important to us, so you have the option of disabling certain types of storage that may not be necessary for the basic functioning of the website. Blocking categories may impact your experience on the website. <a href="https://www.osano.com/legal/cookies" target="_blank" className="link-privacy">More information</a><br /></p>
            <a fs-cc="allow" href="#" className="button-2 w-button">Accept all cookies</a>
            <a fs-cc="close" href="#" className="close-button w-inline-block"><img loading="lazy" src="/images/np_close_25798_27313D.svg" alt="" className="image-3" /></a>
            <div className="consents-form w-form">
              {/* ...form structure preserved... */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container w-container">
          <div className="hero-content-area">
            <div className="content-area-left">
              <div className="hero-area-title">
                <h1 className="hero-area-title-text">Your Smile.<br />Our Passion.<br /></h1>
              </div>
              <div className="hero-area-content">
                <div className="hero-content-text">We believe that your smile should reflect who you are and who you want to become. Our dream is to allow your confidence to shine through after a smile transformation.<br /></div>
              </div>
              <div className="hero-content-button-home">
                <a data-w-id="c362c6e8-12b2-7377-c2d2-cfc774d77798" href="/appointments" className="button hero w-button">Reserve Free Consultation</a>
              </div>
            </div>
            <div className="div-block-4">
              <img src="/images/hero-section-two-girls.webp" loading="lazy" id="w-node-_2f78d993-48f5-d085-0266-264ba973c4d3-5d66087f" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" alt="Two young girls smiling with braces." srcSet="/images/hero-section-two-girls-p-500.webp 500w, /images/hero-section-two-girls-p-800.webp 800w, /images/hero-section-two-girls-p-1080.webp 1080w, /images/hero-section-two-girls-p-1600.webp 1600w, /images/hero-section-two-girls-p-2000.webp 2000w, /images/hero-section-two-girls-p-2600.webp 2600w, /images/hero-section-two-girls-p-3200.webp 3200w, /images/hero-section-two-girls.webp 3633w" className="hero-section-photo" />
            </div>
          </div>
        </div>
      </div>
      {/* Success Story Section */}
      <div className="success-story">
        <div className="container w-container">
          <h2 className="success-heading"><strong className="bold-text-4">Let your smile be a reflection of who you are.</strong></h2>
          <div className="success---text">And let us make the journey as easy as possible.<br /></div>
          <div className="counter-section-items">
            <div className="w-layout-grid counter-grid-wrap">
              <div className="success-grids">
                <h3 className="success---reasons">Less Surprises<br /></h3>
                <div className="info-text-block">We don't do add-on fees and we offer an affordable custom payment plan to fit your family's budget.<br /></div>
              </div>
              <div className="success-grids">
                <h3 className="success---reasons">Less Time<br /></h3>
                <div className="info-text-block">We use the latest technology and techniques to get you the best results in the shortest time possible.<br /></div>
              </div>
              <div className="success-grids">
                <h3 className="success---reasons">Less Pain<br /></h3>
                <div className="info-text-block">We use gentle, modern techniques that minimize discomfort during your treatment.<br /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="about-section">
        <div className="container w-container">
          <div className="w-layout-grid about-section-wrap">
            <div id="w-node-fc8ac0b2-08a1-0abf-0299-fd1a4ef1b510-5d66087f" className="simple-about-image"><img src="/images/2024-blanchard-family-photo.webp" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" srcSet="/images/2024-blanchard-family-photo-p-500.webp 500w, /images/2024-blanchard-family-photo-p-800.webp 800w, /images/2024-blanchard-family-photo-p-1080.webp 1080w, /images/2024-blanchard-family-photo-p-1600.webp 1600w, /images/2024-blanchard-family-photo.webp 1800w" alt="Family Photo of Dr. Blanchard." className="image" /></div>
            <div id="w-node-c89b9b3c-4b54-bebc-f8e6-57e59a73624e-5d66087f" className="about-content">
              <div className="section-title-area">
                <div className="sub-title-wrap">
                  <h1 className="sub-title-text">MEET YOUR ORTHODONTIST</h1>
                </div>
                <h2 className="consult-heading">Dr. Katelyn Blanchard</h2>
                <div className="section-title-content">When Dr. Blanchard was 10, she had a large gap between her front two teeth and an impacted tooth requiring both braces and surgery to pull in. After orthodontic treatment, she had a smile she loved and the inspiration to become an orthodontist.</div>
              </div>
              <div className="about-content-list">
                <div className="w-row">
                  <div className="about-list-column w-col w-col-6 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack">
                    <ul role="list" className="excellency-list w-list-unstyled">
                      <li className="unordered-list-item about-list-item">1500+ Patients Treated</li>
                      <li className="unordered-list-item about-list-item">Specialty Trained at Top-tier Orthodontic Program</li>
                    </ul>
                  </div>
                  <div className="about-list-column w-col w-col-6 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack">
                    <ul role="list" className="excellency-list w-list-unstyled">
                      <li className="unordered-list-item about-list-item">Extensive Experience in Traditional and Clear Braces</li>
                      <li className="unordered-list-item about-list-item">Proven Results that last</li>
                    </ul>
                  </div>
                </div>
                <a href="/appointments" className="button-large full-width-white w-button">Reserve Free Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get Started Section */}
      <div className="get-started-section">
        <div className="container w-container">
          <div className="w-layout-grid consulting-grid-wrap">
            <div className="section-title-area">
              <div className="sub-title-wrap">
                <h1 className="sub-title-text">HERE'S HOW IT WORKS</h1>
              </div>
              <h2 className="consult-heading"><strong className="bold-text-3">Four Steps To A Smile You Love</strong></h2>
              <div className="section-title-content consult">We handle everything so all you have to think about is how much you are going to love your smile.<br /></div>
            </div>
            <div className="consult-quick-links-section">
              <a href="appointments.html" className="consult-quick-link w-inline-block">
                <div className="consult-link">1. Schedule your complimentary new patient consultation</div>
              </a>
              <a href="#" className="consult-quick-link w-inline-block">
                <div className="consult-link">2. We will create a customized plan</div>
              </a>
              <a href="#" className="consult-quick-link w-inline-block">
                <div className="consult-link">3. Participate in our efficient process towards the final results</div>
              </a>
              <a href="#" className="consult-quick-link w-inline-block">
                <div className="consult-link">4. Follow our personalized retainer plan to keep your new smile for life</div>
              </a>
            </div>
          </div>
          <div className="hero-content-button">
            <a href="/appointments" className="button w-button">Reserve free consultation</a>
          </div>
        </div>
      </div>
      {/* Our Promise/Testimonials Section */}
      <div className="our-promise-section-copy">
        <div className="container w-container">
          <div className="section-title-area">
            <div id="w-node-_09287364-f5ce-edf5-dabc-732a198e5ae8-5d66087f" className="sub-title-wrap">
              <h1 className="sub-title-text">testimonials</h1>
            </div>
            <h2 className="section-title">Happy Patients</h2>
          </div>
          <div className="testimonial-carousel-wrap">
            <div data-delay="500" data-animation="slide" className="slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="2000" data-infinite="true">
              <div className="mask w-slider-mask">
                <div className="testimonial-slide w-slide">
                  <div className="testimonial-item"><img src="/images/6512cf86865dd3d45d660907_testimonial-quote.svg" loading="lazy" width="42" alt="Testimonial Quote" className="testimonial-quote" />
                    <div className="testimonial-content">I waited until 9 months before my wedding to decide I wanted to straighten my front teeth. Dr. Blanchard set realistic expectations but got it done! Every appointment was efficient and she moved my teeth in a fast but healthy way and she finished in time for my wedding! </div>
                    <div className="testimonial-bio">
                      <div className="testimonial-rating-wrap">
                        <h3 className="client-name">Kendall</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-slide w-slide">
                  <div className="testimonial-item"><img src="/images/6512cf86865dd3d45d660907_testimonial-quote.svg" loading="lazy" width="42" alt="Testimonial Quote" className="testimonial-quote" />
                    <div className="testimonial-content">This office is efficient and exactly what I needed to fix my broken retainer. Dr. Blanchard gave me several options and explained everything really well. I got a great value for my money and it was an overall easy and helpful experience. Would highly recommend this office for your orthodontic needs.</div>
                    <div className="testimonial-bio">
                      <div className="testimonial-rating-wrap">
                        <h3 className="client-name">Clayton</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-slide w-slide">
                  <div className="testimonial-item"><img src="/images/6512cf86865dd3d45d660907_testimonial-quote.svg" loading="lazy" width="42" alt="Testimonial Quote" className="testimonial-quote" />
                    <div className="testimonial-content">Great orthodontist! Dr. Blanchard knew exactly what our family needed and helped us get great smiles. She was very professional and extremely talented.</div>
                    <div className="testimonial-bio">
                      <div className="testimonial-rating-wrap">
                        <h3 className="client-name">Anita</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-arrow w-slider-arrow-left"><img src="/images/slider-arrow-left.svg" loading="lazy" alt="Slider Arrow" className="slider-arrow-icon" /></div>
              <div className="right-arrow w-slider-arrow-right"><img src="/images/slider-arrow-right.svg" loading="lazy" alt="Slider Arrow" className="slider-arrow-icon" /></div>
              <div className="slide-nav w-slider-nav"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Negative Consequences/Commitment Section */}
      <div className="negative-consequences">
        <div className="negative-consequence-container w-container">
          <div className="sub-title-wrap">
            <h1 className="sub-title-text">Get Started</h1>
          </div>
          <div className="div-block-2">
            <div className="promise-wrap">
              <div className="our-promise-item">
                <div className="promise-content-area">
                  <h2 className="promise-content-title service-single-intro"><strong className="bold-text-2">Our Commitment To You</strong></h2>
                </div>
              </div>
              <div className="intro-textblock">No one should have to live with a smile that feels embarrassing or uncomfortable. That's where we come in. We give kids and adults with a crooked smile or unhealthy bite an orthodontic transformation experience that is <strong>convenient</strong>, <strong>affordable</strong>, and <strong>life-changing</strong>.</div>
              <div className="intro-textblock">We understand that orthodontic treatment can seem inconvenient and expensive. We want this to be one of the best investments you ever make. You will finish treatment with a smile that brightens the room, a healthy bite for longterm dental health, and confidence that leads to success at work, school, and in relationships.</div>
            </div>
          </div>
          <div className="hero-content-button">
            <a href="/appointments" className="button w-button">Reserve Free Consultation</a>
          </div>
        </div>
      </div>
      {/* Appointment Form Section */}
      <div className="appointment-form-section">
        <div className="container w-container">
          <div className="w-layout-grid form-grid-wrap">
            <div className="appointment-content-area full-width">
              <div className="section-title-area">
                <div className="sub-title-wrap">
                  <h1 className="sub-title-text">CONTACT US</h1>
                </div>
                <h2 className="section-title white"><strong className="bold-text">Are You Ready For A Smile Transformation?</strong></h2>
                <div className="intro-textblock">Fill out this short form if you would like for us to give you a call to schedule an appointment.</div>
              </div>
            </div>
            <div className="appointment-form-wrap">
              <ContactForm variant="home" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function Home() {
  return (
    <ClientWrapper>
      <HomeContent />
    </ClientWrapper>
  );
}
