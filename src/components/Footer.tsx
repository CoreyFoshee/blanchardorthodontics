'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="footer-container w-container">
        <div className="footer-widgets">
          <div className="w-layout-grid footer-grid-copy">
            <div id="w-node-_9bee52d3-2070-ed7e-df53-b5a10daf2f1f-0daf2f1a" className="widget-content-one">
              <img src="/images/blanchard-logos-FINAL-01.png" loading="lazy" width="216" sizes="216px" alt="Footer Logo" srcSet="/images/blanchard-logos-FINAL-01-p-500.png 500w, /images/blanchard-logos-FINAL-01.png 1152w" />
              <div className="footer-social-section">
                <a href="https://www.facebook.com/profile.php?id=61552167444126" target="_blank" className="footer-social-link w-inline-block">
                  <img src="/images/social-icon-svg-1.svg" loading="lazy" alt="Footer Social Facebook" width="17" className="footer-social" />
                </a>
                <a href="https://www.instagram.com/blanchardorthoetx/" target="_blank" className="footer-social-link w-inline-block">
                  <img src="/images/social-icon-svg-4.svg" loading="lazy" alt="Footer Social Instagram" width="30" className="footer-social" />
                </a>
              </div>
            </div>
            <div id="w-node-_9bee52d3-2070-ed7e-df53-b5a10daf2f2e-0daf2f1a" className="widget-content-two">
              <div className="widget-title-section">
                <h2 className="widget-title">Explore</h2>
              </div>
              <div className="footer-widget-links">
                <Link href="/article" className="footer-link">Blog</Link>
                <Link href="/about" className="footer-link">About</Link>
                <Link href="/locations" className="footer-link">Contact Us</Link>
                <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
                <a href="#" className="footer-link---terms">Terms &amp; Conditions</a>
              </div>
            </div>
            <div id="w-node-_44bf2610-f9aa-e5a2-95d4-47a05bfd9a48-0daf2f1a" className="widget-content-three">
              <div className="widget-title-section">
                <h2 className="widget-title">Contact</h2>
              </div>
              <div className="footer-contact-area">
                <div className="address-section address-section-one">
                  <div className="address-text">
                    <Link href="/locations" className="footer-link">Locations</Link>
                  </div>
                </div>
                <div className="address-section mail-content">
                  <a href="mailto:info@blanchardorthodontics.com" className="address-text footer-link">info@blanchardorthodontics.com</a>
                </div>
                <div className="address-section mail-content">
                  <a href="tel:(903)707-6275" className="address-text footer-link">(903) 707-6275</a>
                </div>
              </div>
            </div>
            <div id="w-node-_6df2f45f-8a47-7fc7-53aa-6275b32b4061-0daf2f1a" className="widget-content-four">
              <Link href="/appointments" className="pink-button w-button">Reserve Free Consultation</Link>
              <div id="Footer-Widget-Booking" className="footer-widget-booking">
                <div className="footer-booking-text primary-font">Your Smile. Our Passion.</div>
              </div>
              <div className="footer-copyright-text">
                <div className="copyright-text">
                  <strong>©</strong> Blanchard Orthodontics 2025<br />
                  Designed by <a href="https://cfdesign.studio" className="cf-design-link"><span>CF Design Studio</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 