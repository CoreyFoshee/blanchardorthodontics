import type { Metadata } from 'next';

export const SITE_URL = 'https://blanchardorthodontics.com';
export const SITE_NAME = 'Blanchard Orthodontics';
const DEFAULT_IMAGE = '/images/Blanchard-Orthodontics-OpenGraph.webp';

export function pageMetadata(path: string, title: string, description: string, image = DEFAULT_IMAGE): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path === '/' ? '' : path}` },
    openGraph: {
      title, description, url: `${SITE_URL}${path === '/' ? '' : path}`,
      siteName: SITE_NAME, locale: 'en_US', type: 'website',
      images: [{ url: image, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export function plainText(value: unknown): string {
  if (typeof value === 'string') return value.replace(/\s+/g, ' ').trim();
  if (!Array.isArray(value)) return '';
  return value.map(block => (block.children || []).map((child: { text?: string }) => child.text || '').join('')).join(' ').replace(/\s+/g, ' ').trim();
}

export function descriptionText(value: unknown, fallback: string): string {
  const text = plainText(value) || fallback;
  return text.length > 160 ? `${text.slice(0, 157).replace(/\s+\S*$/, '')}…` : text;
}
