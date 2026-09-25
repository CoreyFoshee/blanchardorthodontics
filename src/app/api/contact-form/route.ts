import { NextRequest, NextResponse } from 'next/server';
import { submitToGoHighLevel } from '../../../../lib/go-high-level';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const stringField = (key: string, max: number) => typeof body?.[key] === 'string' ? body[key].trim().slice(0, max) : '';
    const name = stringField('name', 256), email = stringField('email', 256), phone = stringField('phone', 256);
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !phone || body.consent !== true) {
      return NextResponse.json({ error: 'Please provide your name, email, phone number, and text-message consent.' }, { status: 400 });
    }
    const result = await submitToGoHighLevel({ name, email, phone, consent: true,
      subject: stringField('subject', 256) || 'Website Contact Form', message: stringField('message', 5000) });
    if (!result.success) throw new Error('Delivery failed');
    return NextResponse.json({ success: true, message: 'Your request has been sent to our team.' });
  } catch {
    return NextResponse.json({ error: 'Your request could not be sent. Please try again or call (903) 707-6275.' }, { status: 500 });
  }
}
