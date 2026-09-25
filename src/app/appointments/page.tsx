import { pageMetadata } from '../../../lib/seo';
import { BOOKING_URL, OFFICE_PHONE, OFFICE_TEL } from '../../../lib/locations';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BookingFrame } from '../../components/BookingFrame';

export const metadata = pageMetadata('/appointments', 'Schedule a Free Orthodontic Consultation | Blanchard Orthodontics', 'Schedule your free consultation with Blanchard Orthodontics in Tyler or Jacksonville, Texas. Book online or call (903) 707-6275 for assistance.');
export default function AppointmentsPage() {
  return <><Header /><main className="repair-page container w-container">
    <p className="repair-eyebrow">Your next step</p><h1>Schedule your free consultation.</h1>
    <p className="repair-intro">Choose our Tyler or Jacksonville office in the scheduler below. If you have a question about an existing appointment or need help scheduling, call our team.</p>
    <div className="booking-help"><p><strong>Need another way to book?</strong></p><div className="repair-actions"><a href={OFFICE_TEL}>Call {OFFICE_PHONE}</a><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Open the scheduler in a new tab</a><a href="/locations">Find office details</a></div></div>
    <BookingFrame />
  </main><Footer /></>;
}
