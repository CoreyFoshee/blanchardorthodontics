'use client';

import React, { useEffect, useState } from 'react';
import { client } from '../../../lib/sanity.config';

export default function TestPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Test direct Sanity queries
        const [activeBanner, articles, teamMembers] = await Promise.all([
          client.fetch('*[_type == "infoBanner" && isActive == true][0]'),
          client.fetch('*[_type == "article"] | order(publishedAt desc)'),
          client.fetch('*[_type == "teamMember"]')
        ]);

        setData({
          activeBanner,
          articles,
          teamMembers
        });
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Direct Sanity Test Page</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Active Info Banner</h2>
        <pre>{JSON.stringify(data?.activeBanner, null, 2)}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Articles ({data?.articles?.length || 0})</h2>
        <pre>{JSON.stringify(data?.articles?.slice(0, 2), null, 2)}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Team Members ({data?.teamMembers?.length || 0})</h2>
        <pre>{JSON.stringify(data?.teamMembers, null, 2)}</pre>
      </div>
    </div>
  );
} 