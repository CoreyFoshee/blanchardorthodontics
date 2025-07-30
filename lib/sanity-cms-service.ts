import {
  client, urlFor, getActiveInfoBanner, getAllInfoBanners, getAllArticles,
  getArticleBySlug, getArticlesByCategory, getRecentArticles, getAllCategories,
  getCategoryBySlug, getAllTeamMembers, getTeamMemberBySlug, getSiteSettings, searchArticles,
} from './sanity.config'

// Interfaces for Sanity data types
interface SanityInfoBanner {
  _id: string
  text: string
  buttonText?: string
  buttonUrl?: string
  isActive: boolean
}

interface SanityArticle {
  _id: string
  title: string
  slug: { current: string }
  excerpt: any[] | string
  content?: any[]
  author: string
  publishedAt: string
  featuredImage: any
  category: {
    name: string
    slug: { current: string }
  }
}

interface SanityCategory {
  _id: string
  name: string
  slug: { current: string }
  description?: string
}

interface SanityTeamMember {
  _id: string
  name: string
  slug: { current: string }
  title: string
  bio: string
  image: any
  phone?: string
  email?: string
  isActive: boolean
}

interface SanitySiteSettings {
  _id: string
  siteName: string
  siteDescription?: string
  contactEmail?: string
  contactPhone?: string
  address?: string
  socialMedia?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
  officeHours?: {
    monday?: string
    tuesday?: string
    wednesday?: string
    thursday?: string
    friday?: string
    saturday?: string
    sunday?: string
  }
}

class SanityCMSService {
  async getActiveInfoBanner(): Promise<SanityInfoBanner | null> {
    try {
      return await getActiveInfoBanner()
    } catch (error) {
      console.error('Error fetching active info banner:', error)
      return null
    }
  }

  async getArticles(): Promise<SanityArticle[]> {
    try {
      return await getAllArticles()
    } catch (error) {
      console.error('Error fetching articles:', error)
      return []
    }
  }

  async getArticleBySlug(slug: string): Promise<SanityArticle | null> {
    try {
      return await getArticleBySlug(slug)
    } catch (error) {
      console.error('Error fetching article by slug:', error)
      return null
    }
  }

  async getArticlesByCategory(categorySlug: string): Promise<SanityArticle[]> {
    try {
      return await getArticlesByCategory(categorySlug)
    } catch (error) {
      console.error('Error fetching articles by category:', error)
      return []
    }
  }

  async getRecentArticles(limit: number = 3): Promise<SanityArticle[]> {
    try {
      return await getRecentArticles(limit)
    } catch (error) {
      console.error('Error fetching recent articles:', error)
      return []
    }
  }

  async getCategories(): Promise<SanityCategory[]> {
    try {
      return await getAllCategories()
    } catch (error) {
      console.error('Error fetching categories:', error)
      return []
    }
  }

  async getCategoryBySlug(slug: string): Promise<SanityCategory | null> {
    try {
      return await getCategoryBySlug(slug)
    } catch (error) {
      console.error('Error fetching category by slug:', error)
      return null
    }
  }

  async getTeamMembers(): Promise<SanityTeamMember[]> {
    try {
      return await getAllTeamMembers()
    } catch (error) {
      console.error('Error fetching team members:', error)
      return []
    }
  }

  async getTeamMemberBySlug(slug: string): Promise<SanityTeamMember | null> {
    try {
      return await getTeamMemberBySlug(slug)
    } catch (error) {
      console.error('Error fetching team member by slug:', error)
      return null
    }
  }

  async getSiteSettings(): Promise<SanitySiteSettings | null> {
    try {
      return await getSiteSettings()
    } catch (error) {
      console.error('Error fetching site settings:', error)
      return null
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  convertBlockContentToHTML(blocks: any[] | any): string {
    if (!blocks) return ''
    
    // Handle case where content is a single block object
    if (!Array.isArray(blocks)) {
      blocks = [blocks]
    }
    
    return blocks.map((block: any) => {
      if (block._type === 'block') {
        let html = ''
        
        // Handle different block styles
        if (block.style === 'h1') html += '<h1>'
        else if (block.style === 'h2') html += '<h2>'
        else if (block.style === 'h3') html += '<h3>'
        else if (block.style === 'h4') html += '<h4>'
        else if (block.style === 'h5') html += '<h5>'
        else if (block.style === 'h6') html += '<h6>'
        else if (block.style === 'blockquote') html += '<blockquote>'
        else html += '<p>'
        
        // Process children (text spans)
        if (block.children) {
          block.children.forEach((child: any) => {
            let text = child.text || ''
            
            // Handle marks (bold, italic, etc.)
            if (child.marks) {
              child.marks.forEach((mark: string) => {
                if (mark === 'strong') text = `<strong>${text}</strong>`
                else if (mark === 'em') text = `<em>${text}</em>`
                else if (mark === 'underline') text = `<u>${text}</u>`
                else if (mark === 'code') text = `<code>${text}</code>`
              })
            }
            
            html += text
          })
        }
        
        // Close the tag
        if (block.style === 'h1') html += '</h1>'
        else if (block.style === 'h2') html += '</h2>'
        else if (block.style === 'h3') html += '</h3>'
        else if (block.style === 'h4') html += '</h4>'
        else if (block.style === 'h5') html += '</h5>'
        else if (block.style === 'h6') html += '</h6>'
        else if (block.style === 'blockquote') html += '</blockquote>'
        else html += '</p>'
        
        return html
      } else if (block._type === 'image') {
        const imageUrl = urlFor(block).url()
        return `<img src="${imageUrl}" alt="${block.alt || ''}" />`
      }
      
      return ''
    }).join('')
  }

  convertExcerptToText(blocks: any[] | string): string {
    // Handle case where excerpt is a string (old format)
    if (typeof blocks === 'string') {
      return blocks
    }
    
    // Handle case where excerpt is an array of blocks (new format)
    if (!blocks || !Array.isArray(blocks)) return ''
    
    return blocks.map(block => {
      if (block._type === 'block' && block.children) {
        return block.children.map((child: any) => child.text || '').join('')
      }
      return ''
    }).join(' ')
  }

  async searchArticles(query: string): Promise<SanityArticle[]> {
    try {
      return await searchArticles(query)
    } catch (error) {
      console.error('Error searching articles:', error)
      return []
    }
  }
}

const sanityCMSService = new SanityCMSService()
export default sanityCMSService 