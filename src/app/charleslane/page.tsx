
import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ContactForm } from '../../components/ContactForm';

// Pixel-perfect migration of charleslane.html to Next.js React page
// All class names, structure, and content are preserved
// All image paths updated to /images/...

export default function CharlesLanePage() {
  return (
    <>
      <Header />
      <div className="hero-section-charles-lane">
        <div className="hero-content-area-copy">
          <div className="container-copy w-container">
            <div id="w-node-_56f38904-9c43-4d79-87ae-d19fdf213252-d3ae9ce3" className="content-area-left-copy">
              <div className="splash-page-hero-area-title-copy">
                <h1 className="splash-page-hero-area-title">Charles E. Lane Orthodontics is now Blanchard Orthodontics.<br /></h1>
              </div>
              <div className="splash-page-hero-content-text-copy">While Dr. Lane has passed the torch, our commitment to exceptional care remains unchanged—Dr. Blanchard and our team are here to continue creating confident, healthy smiles for you and your family.<br /></div>
              <div className="hero-content-button-copy">
                <a href="/appointments" data-w-id="56f38904-9c43-4d79-87ae-d19fdf21325e" target="_blank" className="button w-button">Book A FREE CONSULTATION</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section-charles-lane">
        <div className="container w-container">
          <div className="w-layout-grid about-section-wrap">
            <div id="w-node-_34734746-9ac3-a8f2-99d3-c774787728e2-d3ae9ce3" className="simple-about-image"><img src="/images/2024-blanchard-family-photo.webp" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" srcSet="/images/2024-blanchard-family-photo-p-500.webp 500w, /images/2024-blanchard-family-photo-p-800.webp 800w, /images/2024-blanchard-family-photo-p-1080.webp 1080w, /images/2024-blanchard-family-photo-p-1600.webp 1600w, /images/2024-blanchard-family-photo.webp 1800w" alt="Family Photo of Dr. Blanchard." className="image" /></div>
            <div id="w-node-_34734746-9ac3-a8f2-99d3-c774787728e4-d3ae9ce3" className="about-content">
              <div className="section-title-area">
                <div className="sub-title-wrap">
                  <p className="sub-title-text">MEET YOUR ORTHODONTIST</p>
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
      <div className="success-story-charles-lane">
        <div className="container w-container">
          <h2 className="success-heading"><strong className="bold-text-4">Let your smile be a reflection of who you are.</strong></h2>
          <div className="success---text">And let us make the journey as easy as possible.<br /></div>
          <div className="counter-section-items">
            <div className="w-layout-grid counter-grid-wrap">
              <div className="success-grids">
                <h3 className="success---reasons">Less Surprises<br /></h3>
                <div className="info-text-block">We don&apos;t do add-on fees and we offer an affordable custom payment plan to fit your family&apos;s budget.<br /></div>
              </div>
              <div className="success-grids">
                <h3 className="success---reasons">More Convenience<br /></h3>
                <div className="info-text-block">Our convenient locations in Jacksonville and Tyler means you will see a specialty-trained orthodontist without driving out of town.</div>
              </div>
              <div className="success-grids">
                <h3 className="success---reasons">More Personal<br /></h3>
                <div className="info-text-block">Our practice&apos;s model is built to focus on you and your smile - you will not be just a number here.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="negative-consequences-charles-lane">
        <div className="negative-consequence-container w-container">
          <div className="negative-consequence-content">
            <div className="negative-consequence-text">
              <h2 className="negative-consequence-heading">What happens if you don&apos;t get orthodontic treatment?</h2>
              <div className="negative-consequence-paragraph">Untreated orthodontic issues can lead to more serious problems down the road, including:</div>
              <ul role="list" className="negative-consequence-list w-list-unstyled">
                <li className="negative-consequence-list-item">Difficulty chewing and speaking</li>
                <li className="negative-consequence-list-item">Increased risk of tooth decay and gum disease</li>
                <li className="negative-consequence-list-item">Jaw pain and TMJ disorders</li>
                <li className="negative-consequence-list-item">Self-esteem issues</li>
                <li className="negative-consequence-list-item">More expensive treatment later in life</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="appointment-form-section---charleslane">
        <div className="container w-container">
          <div className="section-title-area center-align">
            <h2 className="heading-2">Questions? Reach Out Today!</h2>
          </div>
          <div className="contact-form-area">
            <div className="form-block w-form">
              <ContactForm variant="locations" />
            </div>
            <div className="section-title-area center-align"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
