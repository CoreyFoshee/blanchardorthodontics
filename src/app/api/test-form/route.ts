import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('🧪 Test form submission received:', {
      body,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      hasWebhookUrl: !!process.env.GOHIGHLEVEL_WEBHOOK_URL,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Test form received successfully',
      receivedData: body,
      environment: process.env.NODE_ENV,
      hasWebhookUrl: !!process.env.GOHIGHLEVEL_WEBHOOK_URL,
    });

  } catch (error) {
    console.error('❌ Test form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Test form error',
        details: error.message,
        environment: process.env.NODE_ENV,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Test form endpoint is working',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    hasWebhookUrl: !!process.env.GOHIGHLEVEL_WEBHOOK_URL,
  });
}
