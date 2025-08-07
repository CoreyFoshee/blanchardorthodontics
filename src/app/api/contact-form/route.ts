import { NextRequest, NextResponse } from 'next/server';
import { submitToGoHighLevel } from '../../../../lib/go-high-level';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, consent } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Submit to Go High Level via webhook
    const result = await submitToGoHighLevel({
      name,
      email,
      phone,
      subject,
      message,
      consent
    });

    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { 
        error: 'Oops! Something went wrong while submitting the form.' 
      },
      { status: 500 }
    );
  }
}
