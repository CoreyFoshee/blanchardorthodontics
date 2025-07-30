// Pixel-perfect migration of category.html to Next.js React page
// All class names, structure, and content are preserved
// All image paths updated to /images/...

export default function CategoryPage() {
  return (
    <>
      <div className="w-dyn-list">
        <div role="list" className="w-dyn-items">
          <div role="listitem" className="w-dyn-item">
            <div className="info-banner">
              <div className="info-banner-text1 w-dyn-bind-empty"></div>
              <a href="#" className="info-banner-button w-button"></a>
            </div>
          </div>
        </div>
        <div className="info-banner_empty w-dyn-empty"></div>
      </div>
      <div className="header-section">
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
          <div className="navbar-container w-container">
            <a href="/" className="brand w-nav-brand"><img src="/images/blanchard-logos-FINAL-09.png" loading="lazy" alt="Doctorate Logo" height="" width="166" srcSet="/images/blanchard-logos-FINAL-09-p-500.png 500w, /images/blanchard-logos-FINAL-09.png 1152w" sizes="166px" className="image-2" /></a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="/about" className="navbar-links w-nav-link">About</a>
              <a href="/service" className="navbar-links w-nav-link">Services</a>
              <a href="/article" className="navbar-links w-nav-link">Blog</a>
              <a href="/locations" className="navbar-links w-nav-link">Locations</a>
              <a href="/appointments" className="header-button-link w-inline-block">
                <div className="header-button"><img src="/images/header-calendar.svg" loading="lazy" alt="Header Calendar Icons" className="header-calendar-icon" />
                  <h6 className="header-button-text">reserve free consultation</h6>
                </div>
              </a>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="menu-icon w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-section">
        <div className="banner-container w-container">
          <div className="banner-content">
            <h1 className="banner-title-text w-dyn-bind-empty"></h1>
            <div className="category-description w-dyn-bind-empty"></div>
          </div>
        </div>
      </div>
      <div className="categories-section">
        <div className="container w-container">
          <div className="w-dyn-list">
            <div role="list" className="category-collection-list w-dyn-items">
              {/* Categories will be populated by CMS */}
            </div>
            <div className="w-dyn-empty">
              <div>No categories found.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-listing">
        <div className="container w-container">
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items w-row">
              {/* Articles will be populated by CMS */}
            </div>
            <div className="w-dyn-empty">
              <div>No articles found in this category.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-container w-container">
          <div className="footer-widgets">
            <div className="w-layout-grid footer-grid-copy">
              <div id="w-node-_9bee52d3-2070-ed7e-df53-b5a10daf2f1f-0daf2f1a" className="widget-content-one"><img src="/images/blanchard-logos-FINAL-01.png" loading="lazy" width="216" sizes="216px" alt="Footer Logo" srcSet="/images/blanchard-logos-FINAL-01-p-500.png 500w, /images/blanchard-logos-FINAL-01.png 1152w" />
                <div className="footer-social-section">
                  <a href="https://www.facebook.com/profile.php?id=61552167444126" target="_blank" className="footer-social-link w-inline-block"><img src="/images/social-icon-svg-1.svg" loading="lazy" alt="Footer Social Facebook" width="17" className="footer-social" /></a>
                  <a href="https://www.instagram.com/blanchardorthoetx/" target="_blank" className="footer-social-link w-inline-block"><img src="/images/social-icon-svg-4.svg" loading="lazy" alt="Footer Social Instagram" width="30" className="footer-social" /></a>
                </div>
              </div>
              <div id="w-node-_9bee52d3-2070-ed7e-df53-b5a10daf2f2e-0daf2f1a" className="widget-content-two">
                <div className="widget-title-section">
                  <h2 className="widget-title">Explore</h2>
                </div>
                <div className="footer-widget-links">
                  <a href="/article" className="footer-link">Blog</a>
                  <a href="/about" className="footer-link">About</a>
                  <a href="/locations" className="footer-link">Contact Us</a>
                  <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
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
                      <a href="/locations" className="footer-link">Locations</a>
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
                <a href="/appointments" className="pink-button w-button">Reserve Free Consultation</a>
                <div id="Footer-Widget-Booking" className="footer-widget-booking">
                  <div className="footer-booking-text primary-font">Your Smile. Our Passion.</div>
                </div>
                <div className="footer-copyright-text">
                  <div className="copyright-text"><strong>©</strong> Blanchard Orthodontics 2025<br />Designed by <a href="https://cfdesign.studio" className="cf-design-link"><span>CF Design Studio</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 