export const OFFICE_PHONE = '(903) 707-6275';
export const OFFICE_TEL = 'tel:+19037076275';
export const OFFICE_EMAIL = 'info@blanchardorthodontics.com';
export const BOOKING_URL = 'https://appointments.greyfinch.com/?division=339905';

// Addresses are from the current website and Greyfinch office selector. Hours are
// intentionally not invented: confirm the visit time with the practice.
export const offices = [
  {
    slug: 'tyler-tx', city: 'Tyler', address: '3824 SouthPark Dr', postalCode: '75703',
    intro: 'Visit Blanchard Orthodontics at 3824 SouthPark Dr in Tyler, Texas. Dr. Katelyn Blanchard offers braces, clear braces, and clear aligners for patients looking for orthodontic care close to home.',
    visit: 'Our Tyler office welcomes patients of the former Charles E. Lane III Orthodontics practice. If you are a returning patient or have questions about continuing care, call our team so we can help you arrange the right visit.',
    arrival: 'Use 3824 SouthPark Dr, Tyler, TX 75703 when planning your trip. Our practice also has a Jacksonville office, so check your appointment confirmation before you travel. Call us if you need help finding the Tyler location or have an accessibility question.',
    other: 'Jacksonville', otherSlug: 'jacksonville-tx',
  },
  {
    slug: 'jacksonville-tx', city: 'Jacksonville', address: '1501 East Rusk St', postalCode: '75766',
    intro: 'Find Blanchard Orthodontics at 1501 East Rusk St in Jacksonville, Texas. Dr. Katelyn Blanchard provides braces, clear braces, and clear aligners, with a personal approach to helping children and adults explore their orthodontic options.',
    visit: 'Looking for orthodontic care in Jacksonville or elsewhere in Cherokee County? Start with a free consultation to discuss your smile and treatment options with our practice. You can also contact our team with questions before choosing an appointment.',
    arrival: 'Enter 1501 East Rusk St, Jacksonville, TX 75766 in your navigation app. This office is separate from our Tyler location. Check which office is listed in your appointment confirmation, and call us for arrival or accessibility questions before your visit.',
    other: 'Tyler', otherSlug: 'tyler-tx',
  },
] as const;
export type Office = typeof offices[number];
export function officeAddress(office: Office) { return `${office.address}, ${office.city}, TX ${office.postalCode}`; }
export function directionsUrl(office: Office) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(officeAddress(office))}`;
}
