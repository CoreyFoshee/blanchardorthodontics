'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`header-section ${className}`}>
      <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
        <div className="navbar-container w-container">
          <Link href="/" className={`brand w-nav-brand ${pathname === '/' ? 'w--current' : ''}`}>
            <img src="/images/blanchard-logos-FINAL-09.png" loading="lazy" alt="Doctorate Logo" height="" width="166" srcSet="/images/blanchard-logos-FINAL-09-p-500.png 500w, /images/blanchard-logos-FINAL-09.png 1152w" sizes="166px" className="image-2" />
          </Link>
          <nav 
            role="navigation" 
            className={`nav-menu w-nav-menu ${isMenuOpen ? 'w--nav-dropdown-open' : ''}`}
            style={{ 
              display: isMenuOpen ? 'block' : undefined,
              position: isMenuOpen ? 'absolute' : undefined,
              top: isMenuOpen ? '100%' : undefined,
              left: isMenuOpen ? '0' : undefined,
              right: isMenuOpen ? '0' : undefined,
              zIndex: isMenuOpen ? '1000' : undefined
            }}
          >
            <Link href="/about" className={`navbar-links w-nav-link ${pathname === '/about' ? 'w--current' : ''}`} onClick={closeMenu}>
              About
            </Link>
            <Link href="/service" className={`navbar-links w-nav-link ${pathname === '/service' ? 'w--current' : ''}`} onClick={closeMenu}>
              Services
            </Link>
            <Link href="/article" className={`navbar-links w-nav-link ${pathname === '/article' ? 'w--current' : ''}`} onClick={closeMenu}>
              Blog
            </Link>
            <Link href="/locations" className={`navbar-links w-nav-link ${pathname === '/locations' ? 'w--current' : ''}`} onClick={closeMenu}>
              Locations
            </Link>
            <Link href="/appointments" className="header-button-link w-inline-block" onClick={closeMenu}>
              <div className="header-button">
                <img src="/images/header-calendar.svg" loading="lazy" alt="Header Calendar Icons" className="header-calendar-icon" />
                <h6 className="header-button-text">reserve free consultation</h6>
              </div>
            </Link>
          </nav>
          <div className={`menu-button w-nav-button ${isMenuOpen ? 'w--open' : ''}`} onClick={toggleMenu}>
            <div className="menu-icon w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
    </div>
  );
}; 