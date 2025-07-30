'use client';

import React from 'react';
import { useCMS } from './CMSProvider';

export const InfoBanner: React.FC = () => {
  const { getActiveInfoBanner } = useCMS();
  const activeBanner = getActiveInfoBanner();

  if (!activeBanner) {
    return null;
  }

  return (
    <div className="info-banner">
      <div className="info-banner-text1">{activeBanner.text}</div>
      {activeBanner.buttonText && (
        <a href={activeBanner.buttonUrl} className="info-banner-button w-button">
          {activeBanner.buttonText}
        </a>
      )}
    </div>
  );
}; 