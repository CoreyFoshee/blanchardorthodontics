'use client';

import React from 'react';

interface MapsProps {
  location: 'jacksonville' | 'tyler';
  className?: string;
}

const locationData = {
  jacksonville: {
    name: 'Blanchard Orthodontics - Jacksonville',
    address: '1501 East Rusk St, Jacksonville, TX 75766',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.1234567890123!2d-95.2516784!3d31.965875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzU3LjEiTiA5NcKwMTUnMDYuNyJX!5e0!3m2!1sen!2sus!4v1234567890123'
  },
  tyler: {
    name: 'Blanchard Orthodontics - Tyler',
    address: '3824 SouthPark Dr, Tyler, TX 75703',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.1234567890123!2d-95.277397!3d32.307448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE4JzI2LjgiTiA5NcKwMTYnMzAuNyJX!5e0!3m2!1sen!2sus!4v1234567890123'
  }
};

export const Maps: React.FC<MapsProps> = ({ location, className = '' }) => {
  const locationInfo = locationData[location];
  
  // Create a simple embed URL using the address
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBiEVnl_Q4Pk1BOrnKxlBT1n7vw0Ki8Ja4&q=${encodeURIComponent(locationInfo.address)}&zoom=15`;

  return (
    <div className={`map ${className}`}>
      <iframe
        src={embedUrl}
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: '8px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={locationInfo.name}
      />
    </div>
  );
}; 