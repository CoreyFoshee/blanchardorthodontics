'use client';
import { useState } from 'react';
import { BOOKING_URL } from '../../lib/locations';

export function BookingFrame() {
  const [loaded, setLoaded] = useState(false);
  return <div className="booking-frame-wrap">
    {!loaded && <p role="status">Loading the appointment scheduler. You can also open it using the link above.</p>}
    <iframe src={BOOKING_URL} title="Schedule an appointment with Blanchard Orthodontics" className="booking-frame" onLoad={() => setLoaded(true)} />
  </div>;
}
