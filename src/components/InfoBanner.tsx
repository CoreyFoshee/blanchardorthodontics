import { getBanner } from '../../lib/site-content';

export async function InfoBanner() {
  // The announcement is optional; an unavailable banner must not hide the page.
  const banner = await getBanner().catch(() => null);
  if (!banner?.text) return null;
  const safeLink = banner.buttonUrl && /^(https?:\/\/|\/(?!\/))/i.test(banner.buttonUrl);
  return <div className="info-banner">
    <div className="info-banner-text1">{banner.text}</div>
    {banner.buttonText && safeLink && <a href={banner.buttonUrl} className="info-banner-button w-button">{banner.buttonText}</a>}
  </div>;
}
