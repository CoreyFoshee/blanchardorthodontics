'use client';

import React from 'react';
import { useCMS } from '../../components/CMSProvider';

export default function DebugPage() {
  const { 
    infoBanners, 
    articles, 
    categories, 
    teamMembers, 
    siteSettings, 
    isLoading, 
    error,
    getActiveInfoBanner 
  } = useCMS();

  const activeBanner = getActiveInfoBanner();

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>CMS Debug Page</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Status</h2>
        <p>Loading: {isLoading ? 'Yes' : 'No'}</p>
        <p>Error: {error || 'None'}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Active Info Banner</h2>
        <pre>{JSON.stringify(activeBanner, null, 2)}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Info Banners ({infoBanners.length})</h2>
        <pre>{JSON.stringify(infoBanners, null, 2)}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Articles ({articles.length})</h2>
        <pre>{JSON.stringify(articles.slice(0, 2), null, 2)}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Categories ({categories.length})</h2>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Team Members ({teamMembers.length})</h2>
        <pre>{JSON.stringify(teamMembers, null, 2)}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Site Settings</h2>
        <pre>{JSON.stringify(siteSettings, null, 2)}</pre>
      </div>
    </div>
  );
} 