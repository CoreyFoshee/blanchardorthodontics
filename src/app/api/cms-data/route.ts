import { NextResponse } from 'next/server';
import { serverClient } from '../../../../lib/sanity.config';

export async function GET() {
  try {
    // Fetch all data server-side with no caching
    const [activeInfoBanner, articles, categories, teamMembers, siteSettings] = await Promise.all([
      serverClient.fetch('*[_type == "infoBanner" && isActive == true][0]'),
      serverClient.fetch(`
        *[_type == "article" && isPublished == true] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          content,
          author,
          publishedAt,
          featuredImage{
            asset->{
              _id,
              url
            }
          },
          isPublished,
          category->{
            _id,
            name,
            slug
          }
        }
      `),
      serverClient.fetch('*[_type == "category"] | order(name asc)'),
      serverClient.fetch(`
        *[_type == "teamMember" && isPublished == true] | order(name asc) {
          _id,
          name,
          slug,
          title,
          bio,
          fullBio,
          image{
            asset->{
              _id,
              url
            }
          },
          specialties,
          education,
          certifications,
          experience,
          patients,
          phone,
          email,
          isActive
        }
      `),
      serverClient.fetch('*[_type == "siteSettings"][0]'),
    ]);

    return NextResponse.json({
      infoBanners: activeInfoBanner ? [activeInfoBanner] : [],
      articles,
      categories,
      teamMembers,
      siteSettings,
    }, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Error fetching CMS data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch CMS data' },
      { status: 500 }
    );
  }
} 