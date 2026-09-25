import { pageMetadata } from '../../../lib/seo';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { InfoBanner } from '../../components/InfoBanner';
import { OfficeCards } from '../../components/OfficeCards';
import { ContactForm } from '../../components/ContactForm';

export const revalidate = 120;
export const metadata = pageMetadata('/locations', 'Tyler & Jacksonville Offices | Blanchard Orthodontics', 'Find addresses, directions, and contact information for our Tyler and Jacksonville, Texas orthodontic offices. Schedule a free consultation.');
export default function LocationsPage() {
  return <><InfoBanner /><Header /><main className="repair-page container w-container">
    <p className="repair-eyebrow">Two East Texas locations</p>
    <h1>Find your Blanchard Orthodontics office.</h1>
    <p className="repair-intro">Visit Dr. Katelyn Blanchard in Tyler or Jacksonville. Choose an office below for directions and appointment information.</p>
    <OfficeCards />
    <section className="repair-section"><h2>Plan your visit</h2><p>Our online scheduler lets you choose Tyler or Jacksonville. Confirm your office and appointment time before traveling, or call <a href="tel:+19037076275">(903) 707-6275</a> for help scheduling.</p><a href="/appointments" className="button w-button">Schedule a free consultation</a></section>
    <section className="repair-section"><h2>Request a call from our team</h2><p>Have a scheduling question? Send us your contact details and our team will follow up.</p><ContactForm variant="locations" /></section>
  </main><Footer /></>;
}
