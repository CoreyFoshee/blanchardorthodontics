import { NextResponse } from 'next/server';

export async function GET() {
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

  return NextResponse.json({
    message: 'Environment variables test',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    envVars,
  });
}
