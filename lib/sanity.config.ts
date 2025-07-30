import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Client for server-side operations (with token)
export const serverClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sln6nq50',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
})

// Client for client-side operations (without token)
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sln6nq50',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Info Banners
export async function getActiveInfoBanner() {
  return client.fetch(`
    *[_type == "infoBanner" && isActive == true][0] {
      _id,
      text,
      buttonText,
      buttonUrl,
      isActive
    }
  `)
}

export async function getAllInfoBanners() {
  return client.fetch(`
    *[_type == "infoBanner"] | order(isActive desc) {
      _id,
      text,
      buttonText,
      buttonUrl,
      isActive
    }
  `)
}

// Articles
        export async function getAllArticles() {
          return client.fetch(`
            *[_type == "article" && isPublished == true] | order(publishedAt desc) {
              _id,
              title,
              slug,
              excerpt,
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
          `)
        }

export async function getArticleBySlug(slug: string) {
  return client.fetch(`
    *[_type == "article" && slug.current == $slug && isPublished == true][0] {
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
  `, { slug })
}

export async function getArticlesByCategory(categorySlug: string) {
  return client.fetch(`
    *[_type == "article" && category->slug.current == $categorySlug && isPublished == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
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
  `, { categorySlug })
}

export async function getRecentArticles(limit: number = 3) {
  return client.fetch(`
    *[_type == "article" && isPublished == true] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      excerpt,
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
  `, { limit })
}

// Categories
export async function getAllCategories() {
  return client.fetch(`
    *[_type == "category"] | order(name asc) {
      _id,
      name,
      slug,
      description
    }
  `)
}

export async function getCategoryBySlug(slug: string) {
  return client.fetch(`
    *[_type == "category" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      description
    }
  `, { slug })
}

// Team Members
export async function getAllTeamMembers() {
  return client.fetch(`
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
  `)
}

export async function getTeamMemberBySlug(slug: string) {
  return client.fetch(`
    *[_type == "teamMember" && slug.current == $slug && isPublished == true][0] {
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
  `, { slug })
}

// Site Settings
export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      _id,
      siteName,
      siteDescription,
      contactEmail,
      contactPhone,
      address,
      socialMedia,
      officeHours
    }
  `)
}

// Search functionality
export async function searchArticles(query: string) {
  return client.fetch(`
    *[_type == "article" && isPublished == true && (
      title match $searchQuery + "*" ||
      excerpt match $searchQuery + "*" ||
      author match $searchQuery + "*"
    )] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      author,
      publishedAt,
      featuredImage{
        asset->{
          _id,
          url
        }
      },
      category->{
        _id,
        name,
        slug
      }
    }
  `, { searchQuery: query })
} 