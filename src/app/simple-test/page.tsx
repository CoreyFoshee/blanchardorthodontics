'use client';

import React, { useEffect, useState } from 'react';

export default function SimpleTestPage() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    // Test if we can access environment variables
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
    
    setStatus(`Project ID: ${projectId}, Dataset: ${dataset}`);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Simple Test Page</h1>
      <p>Status: {status}</p>
      <p>Environment: {process.env.NODE_ENV}</p>
    </div>
  );
} 