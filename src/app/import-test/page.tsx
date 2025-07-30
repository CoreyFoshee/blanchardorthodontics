'use client';

import React, { useEffect, useState } from 'react';

export default function ImportTestPage() {
  const [status, setStatus] = useState('Testing import...');

  useEffect(() => {
    async function testImport() {
      try {
        // Test if we can import the sanity-cms-service
        const sanityCMSService = await import('../../../lib/sanity-cms-service');
        setStatus('✅ Import successful!');
        
        // Test if we can call a method
        try {
          const result = await sanityCMSService.default.getActiveInfoBanner();
          setStatus(`✅ Import and method call successful! Result: ${result ? 'Found' : 'Not found'}`);
        } catch (methodError) {
          setStatus(`✅ Import successful but method failed: ${methodError instanceof Error ? methodError.message : 'Unknown error'}`);
        }
      } catch (importError) {
        setStatus(`❌ Import failed: ${importError instanceof Error ? importError.message : 'Unknown error'}`);
      }
    }

    testImport();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Import Test Page</h1>
      <p>Status: {status}</p>
    </div>
  );
} 