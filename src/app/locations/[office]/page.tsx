import { notFound } from 'next/navigation';
import { offices, officeAddress, directionsUrl, OFFICE_PHONE, OFFICE_TEL, OFFICE_EMAIL } from '../../../../lib/locations';
import { pageMetadata } from '../../../../lib/seo';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { InfoBanner } from '../../../components/InfoBanner';

export const revalidate = 120;
type Props = { params: { office: string } };
export function generateStaticParams() { return offices.map(office => ({ office: office.slug })); }
function findOffice(slug: string) {
  const office = offices.find(office => office.slug === slug);
  if (!office) notFound();
  return office;
}
export function generateMetadata({ params }: Props) {
  const office = findOffice(params.office);
  return pageMetadata(`/locations/${office.slug}`, `Orthodontist in ${office.city}, TX | Blanchard Orthodontics`,
    `Visit Dr. Katelyn Blanchard at ${office.address} in ${office.city}, TX. Explore braces and clear aligners, get directions, and schedule a free consultation.`);
}
export default function OfficePage({ params }: Props) {
  const office = findOffice(params.office);
  return <><InfoBanner /><Header /><main className="repair-page container w-container">
    <nav className="repair-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true"> / </span><a href="/locations">Locations</a><span aria-hidden="true"> / </span><span aria-current="page">{office.city}</span></nav>
    <p className="repair-eyebrow">Blanchard Orthodontics · {office.city}, Texas</p>
    <h1>Orthodontic care in {office.city}, TX.</h1>
    <p className="repair-intro">{office.intro}</p>
    <div className="repair-actions"><a href="/appointments" className="button w-button">Schedule a free consultation</a><a href={OFFICE_TEL}>Call {OFFICE_PHONE}</a></div>
    <div className="office-detail-grid repair-section">
      <section className="office-card"><h2>Our {office.city} office</h2><address>{office.address}<br />{office.city}, TX {office.postalCode}</address><p><a href={OFFICE_TEL}>{OFFICE_PHONE}</a><br /><a href={`mailto:${OFFICE_EMAIL}`}>{OFFICE_EMAIL}</a></p><p>For current appointment availability and office hours, please call our team or use the scheduler.</p><a href={directionsUrl(office)} className="button w-button">Directions to {office.city}</a></section>
      <iframe className="office-map" title={`Map of Blanchard Orthodontics in ${office.city}`} src={`https://maps.google.com/maps?q=${encodeURIComponent(officeAddress(office))}&z=15&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
    <section className="repair-section"><h2>Your visit to {office.city}</h2><p>{office.visit}</p><p>{office.arrival}</p>{office.slug === 'tyler-tx' && <p><a href="/charleslane">Learn about the transition from Charles E. Lane Orthodontics.</a></p>}</section>
    <section className="repair-section"><h2>Explore your treatment options</h2><p>Our practice offers metal braces, clear braces, and clear aligners. A consultation is the place to discuss your goals and ask which option may suit your needs.</p><p><a href="/service">Compare our orthodontic services</a> and <a href="/detail-team/dr-katelyn-blanchard">get to know Dr. Katelyn Blanchard</a>.</p></section>
    <section className="repair-section"><h2>Scheduling questions</h2>
      <h3>How do I choose this office?</h3><p>Open our appointment scheduler and select {office.city}. If you need help with an existing appointment, call {OFFICE_PHONE}.</p>
      <h3>Can I ask about cost or insurance before booking?</h3><p>Yes. Contact our team with your questions about payment options or checking insurance benefits. Bring your questions to your consultation so you can discuss your circumstances.</p>
      <h3>Is there another Blanchard Orthodontics office?</h3><p>We also see patients at our <a href={`/locations/${office.otherSlug}`}>{office.other} office</a>. Choose the location that is convenient for you when scheduling.</p>
    </section>
    <div className="repair-actions"><a href="/appointments" className="button w-button">Reserve your free consultation</a><a href="/locations">Compare both offices</a></div>
  </main><Footer /></>;
}
