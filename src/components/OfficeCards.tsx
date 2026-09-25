import { offices, OFFICE_PHONE, OFFICE_TEL, directionsUrl } from '../../lib/locations';

export function OfficeCards() {
  return <div className="office-grid">{offices.map(office => <article className="office-card" key={office.slug}>
    <p className="repair-eyebrow">{office.city}, Texas</p>
    <h3><a href={`/locations/${office.slug}`}>{office.city} orthodontic office</a></h3>
    <address>{office.address}<br />{office.city}, TX {office.postalCode}</address>
    <a href={OFFICE_TEL}>{OFFICE_PHONE}</a>
    <div className="repair-actions"><a href={`/locations/${office.slug}`} className="button w-button">Office details</a><a href={directionsUrl(office)}>Get directions</a></div>
  </article>)}</div>;
}
