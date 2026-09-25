import 'server-only';
import { createClient } from '@sanity/client';
import { cache } from 'react';
import type { PortableTextBlock } from '@portabletext/types';

export interface Article {
  _id: string; _updatedAt: string; title: string; slug: { current: string };
  excerpt?: PortableTextBlock[] | string; content?: PortableTextBlock[];
  author?: string; publishedAt?: string;
  featuredImage?: { asset?: { url?: string } };
  category?: { name: string; slug?: { current: string } };
}
export interface TeamMember {
  _id: string; _updatedAt: string; name: string; slug: { current: string }; title: string;
  bio?: string; fullBio?: PortableTextBlock[]; education?: PortableTextBlock[];
  image?: { asset?: { url?: string } }; specialties?: string[]; certifications?: string[];
  experience?: string; patients?: string; phone?: string; email?: string;
}

const cms = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sln6nq50',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', perspective: 'published', useCdn: false,
  timeout: 10000, maxRetries: 1,
});
const options = { next: { revalidate: 120, tags: ['site-content'] } };
const published = 'isPublished == true && !(_id in path("drafts.**")) && defined(slug.current)';
const articleFields = `_id, _updatedAt, title, slug, excerpt, content, author, publishedAt,
  featuredImage{asset->{url}}, category->{name,slug}`;
const teamFields = `_id, _updatedAt, name, slug, title, bio, fullBio, education,
  image{asset->{url}}, specialties, certifications, experience, patients, phone, email`;

// Errors propagate: a CMS outage must not silently become a missing page or an empty sitemap.
export const getArticles = cache(() => cms.fetch<Article[]>(
  `*[_type == "article" && ${published}] | order(publishedAt desc) {${articleFields}}`, {}, options));
export const getArticle = cache((slug: string) => cms.fetch<Article | null>(
  `*[_type == "article" && ${published} && slug.current == $slug][0] {${articleFields}}`, { slug }, options));
export const getTeamMembers = cache(() => cms.fetch<TeamMember[]>(
  `*[_type == "teamMember" && ${published}] | order(name asc) {${teamFields}}`, {}, options));
export const getTeamMember = cache((slug: string) => cms.fetch<TeamMember | null>(
  `*[_type == "teamMember" && ${published} && slug.current == $slug][0] {${teamFields}}`, { slug }, options));
export const getBanner = cache(() => cms.fetch<{text:string;buttonText?:string;buttonUrl?:string} | null>(
  '*[_type == "infoBanner" && isActive == true && !(_id in path("drafts.**"))][0]{text,buttonText,buttonUrl}', {}, options));
