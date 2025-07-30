// CMS Service for Next.js
// This integrates the existing CMS data and functionality

// Import the CMS data
import { CMS_DATA } from './cms-data';

export interface InfoBanner {
  id: number;
  text: string;
  buttonText: string;
  buttonUrl: string;
  isActive: boolean;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  publishDate: string;
  category: string;
  categorySlug: string;
  featuredImage: string;
  tags: string[];
  isPublished: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  slug: string;
  title: string;
  bio: string;
  image: string;
  isPublished: boolean;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
}

class CMSService {
  private data: any;

  constructor() {
    this.data = CMS_DATA;
  }

  // Info Banners
  getActiveInfoBanner(): InfoBanner | null {
    const activeBanner = this.data.infoBanners.find((banner: InfoBanner) => banner.isActive);
    return activeBanner || null;
  }

  getAllInfoBanners(): InfoBanner[] {
    return this.data.infoBanners;
  }

  // Articles
  getArticles(): Article[] {
    return this.data.articles.filter((article: Article) => article.isPublished);
  }

  getArticleBySlug(slug: string): Article | null {
    return this.data.articles.find((article: Article) => 
      article.slug === slug && article.isPublished
    ) || null;
  }

  getArticlesByCategory(categorySlug: string): Article[] {
    return this.data.articles.filter((article: Article) => 
      article.categorySlug === categorySlug && article.isPublished
    );
  }

  getRecentArticles(limit: number = 3): Article[] {
    return this.getArticles()
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, limit);
  }

  // Categories
  getCategories(): Category[] {
    return this.data.categories;
  }

  getCategoryBySlug(slug: string): Category | null {
    return this.data.categories.find((category: Category) => category.slug === slug) || null;
  }

  // Team Members
  getTeamMembers(): TeamMember[] {
    return this.data.teamMembers.filter((member: TeamMember) => member.isPublished);
  }

  getTeamMemberBySlug(slug: string): TeamMember | null {
    return this.data.teamMembers.find((member: TeamMember) => 
      member.slug === slug && member.isPublished
    ) || null;
  }

  // Site Settings
  getSiteSettings(): SiteSettings {
    return this.data.siteSettings;
  }

  // Utility functions
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Convert markdown to HTML (simplified version)
  convertMarkdownToHTML(markdown: string): string {
    if (!markdown) return '';
    
    return markdown
      // Convert **bold** to <strong>bold</strong>
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Convert *italic* to <em>italic</em>
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Convert ### headers to <h3>
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      // Convert ## headers to <h2>
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      // Convert # headers to <h1>
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Convert line breaks to <br>
      .replace(/\n/g, '<br>');
  }

  // Search functionality
  searchArticles(query: string): Article[] {
    const articles = this.getArticles();
    const searchTerm = query.toLowerCase();
    
    return articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm) ||
      article.excerpt.toLowerCase().includes(searchTerm) ||
      article.content.toLowerCase().includes(searchTerm) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
}

// Create and export a singleton instance
const cmsService = new CMSService();
export default cmsService; 