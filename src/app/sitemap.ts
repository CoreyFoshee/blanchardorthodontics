import type { MetadataRoute } from 'next';
import { getArticles, getTeamMembers } from '../../lib/site-content';
import { SITE_URL } from '../../lib/seo';

export const revalidate = 120;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, members] = await Promise.all([getArticles(), getTeamMembers()]);
  const staticPaths = ['', '/about', '/service', '/article', '/locations', '/locations/tyler-tx', '/locations/jacksonville-tx', '/appointments', '/charleslane', '/privacy-policy'];
  return [
    ...staticPaths.map(path => ({ url: `${SITE_URL}${path}` })),
    ...articles.map(article => ({ url: `${SITE_URL}/article/${article.slug.current}`, lastModified: article._updatedAt })),
    ...members.map(member => ({ url: `${SITE_URL}/detail-team/${member.slug.current}`, lastModified: member._updatedAt })),
  ];
}
