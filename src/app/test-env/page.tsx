export default function TestEnvPage() {
  const envVars = {
    hasWebhookUrl: !!process.env.GOHIGHLEVEL_WEBHOOK_URL,
    webhookUrlLength: process.env.GOHIGHLEVEL_WEBHOOK_URL?.length || 0,
    hasLocationId: !!process.env.GOHIGHLEVEL_LOCATION_ID,
    hasContactTags: !!process.env.GOHIGHLEVEL_CONTACT_TAGS,
    locationId: process.env.GOHIGHLEVEL_LOCATION_ID,
    contactTags: process.env.GOHIGHLEVEL_CONTACT_TAGS,
    // Don't expose the full webhook URL for security
    webhookUrlPreview: process.env.GOHIGHLEVEL_WEBHOOK_URL?.substring(0, 50) + '...',
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Environment Variables Test</h1>
      <p>Timestamp: {new Date().toISOString()}</p>
      <p>Environment: {process.env.NODE_ENV}</p>
      
      <h2>Environment Variables Status:</h2>
      <pre>{JSON.stringify(envVars, null, 2)}</pre>
      
      <h2>All Environment Variables (filtered):</h2>
      <pre>
        {Object.keys(process.env)
          .filter(key => key.includes('GOHIGHLEVEL') || key.includes('SANITY'))
          .map(key => `${key}: ${process.env[key] ? 'SET' : 'NOT SET'}`)
          .join('\n')}
      </pre>
    </div>
  );
}
