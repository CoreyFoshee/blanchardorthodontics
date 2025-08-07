import { NextRequest, NextResponse } from 'next/server';
import { submitToGoHighLevel } from '../../../../lib/go-high-level';

export async function GET() {
  return NextResponse.json({
    message: 'Contact form API is working',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    hasWebhookUrl: !!process.env.GOHIGHLEVEL_WEBHOOK_URL,
    hasLocationId: !!process.env.GOHIGHLEVEL_LOCATION_ID,
    hasContactTags: !!process.env.GOHIGHLEVEL_CONTACT_TAGS,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, consent } = body;

    // Log the incoming request
    console.log('📝 Form submission received:', {
      name,
      email,
      phone: phone ? '***' + phone.slice(-4) : 'not provided',
      subject,
      message: message ? 'provided' : 'not provided',
      consent,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    });

    // Validate required fields
    if (!name || !email || !phone || !consent) {
      console.log('❌ Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Please fill in all required fields and agree to receive text messages.' },
        { status: 400 }
      );
    }

    // Check environment variables
    console.log('🔧 Environment check:', {
      hasWebhookUrl: !!process.env.GOHIGHLEVEL_WEBHOOK_URL,
      hasLocationId: !!process.env.GOHIGHLEVEL_LOCATION_ID,
      hasContactTags: !!process.env.GOHIGHLEVEL_CONTACT_TAGS,
      webhookUrlLength: process.env.GOHIGHLEVEL_WEBHOOK_URL?.length || 0,
    });

    // Submit to Go High Level via webhook
    console.log('🚀 Submitting to Go High Level...');
    const result = await submitToGoHighLevel({
      firstName: name.split(' ')[0] || name,
      lastName: name.split(' ').slice(1).join(' ') || '',
      email,
      phone,
      subject: subject || 'Website Contact Form',
      message: message || '',
      source: 'Website Contact Form',
      location: 'Blanchard Orthodontics',
      consent,
    });

    console.log('✅ Go High Level submission result:', result);

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you! Your message has been sent successfully.',
      result 
    });

  } catch (error) {
    console.error('❌ Form submission error:', error);
    
    return NextResponse.json(
      { 
        error: 'There was an error sending your message. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
