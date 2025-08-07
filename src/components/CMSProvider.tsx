'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface CMSContextType {
  infoBanners: any[];
  articles: any[];
  categories: any[];
  teamMembers: any[];
  siteSettings: any;
  isLoading: boolean;
  error: string | null;
  getActiveInfoBanner: () => any | null;
  getArticleBySlug: (slug: string) => Promise<any | null>;
  getArticlesByCategory: (categorySlug: string) => any[];
  getTeamMemberBySlug: (slug: string) => Promise<any | null>;
  formatDate: (dateString: string) => string;
            convertBlockContentToHTML: (blocks: any[] | any) => string;
  convertExcerptToText: (blocks: any[] | string) => string;
  searchArticles: (query: string) => Promise<any[]>;
}

const CMSContext = createContext<CMSContextType | null>(null);

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};

interface CMSProviderProps {
  children: React.ReactNode;
}

export const CMSProvider: React.FC<CMSProviderProps> = ({ children }) => {
  const [data, setData] = useState<{
    infoBanners: any[];
    articles: any[];
    categories: any[];
    teamMembers: any[];
    siteSettings: any;
  }>({
    infoBanners: [],
    articles: [],
    categories: [],
    teamMembers: [],
    siteSettings: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('🔄 Starting to load CMS data...');
        setIsLoading(true);
        setError(null);
        
        // Add timeout to prevent infinite loading
        const timeoutId = setTimeout(() => {
          console.warn('⚠️ CMS data loading timeout - continuing without data');
          setIsLoading(false);
        }, 10000); // 10 second timeout
        
        // Fetch all data from the API route
        const response = await fetch('/api/cms-data');
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Data loaded from API:', data);

        setData({
          infoBanners: data.infoBanners || [],
          articles: data.articles || [],
          categories: data.categories || [],
          teamMembers: data.teamMembers || [],
          siteSettings: data.siteSettings || null,
        });
        
        console.log('🎉 All data loaded successfully!');
      } catch (err) {
        console.error('❌ Error loading CMS data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const getActiveInfoBanner = (): any | null => {
    return data.infoBanners.find((banner: any) => banner.isActive) || null;
  };

  const getArticleBySlug = async (slug: string): Promise<any | null> => {
    try {
      // For now, filter from loaded data. In the future, we can create a specific API endpoint
      return data.articles.find((article: any) => article.slug?.current === slug) || null;
    } catch (error) {
      console.error('Error fetching article by slug:', error);
      return null;
    }
  };

  const getArticlesByCategory = (categorySlug: string): any[] => {
    return data.articles.filter((article: any) => 
      article.category?.slug?.current === categorySlug
    );
  };

  const getTeamMemberBySlug = async (slug: string): Promise<any | null> => {
    try {
      // For now, filter from loaded data. In the future, we can create a specific API endpoint
      return data.teamMembers.find((member: any) => member.slug?.current === slug) || null;
    } catch (error) {
      console.error('Error fetching team member by slug:', error);
      return null;
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const convertBlockContentToHTML = (blocks: any[]): string => {
    // Convert Portable Text blocks to HTML
    if (!blocks || !Array.isArray(blocks)) return '';
    
    return blocks.map(block => {
      if (block._type === 'block') {
        const text = block.children?.map((child: any) => {
          let childText = child.text || '';
          
          // Handle bold text
          if (child.marks && child.marks.includes('strong')) {
            childText = `<strong>${childText}</strong>`;
          }
          
          // Handle italic text
          if (child.marks && child.marks.includes('em')) {
            childText = `<em>${childText}</em>`;
          }
          
          return childText;
        }).join('') || '';
        
        // Parse markdown-style formatting in the text
        let processedText = text
          // Convert **bold** to <strong>bold</strong>
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          // Convert ## headings to <h2>headings</h2>
          .replace(/^##\s+(.*?)$/gm, '<h2>$1</h2>')
          // Convert ### headings to <h3>headings</h3>
          .replace(/^###\s+(.*?)$/gm, '<h3>$1</h3>')
          // Convert - list items to <li>list items</li>
          .replace(/^-\s+(.*?)$/gm, '<li>$1</li>')
          // Convert numbered lists
          .replace(/^\d+\.\s+(.*?)$/gm, '<li>$1</li>')
          // Convert line breaks to <br>
          .replace(/\n\n/g, '</p><p>')
          .replace(/\n/g, '<br>');
        
        // Wrap in paragraph tags if it's not already wrapped
        if (!processedText.startsWith('<h') && !processedText.startsWith('<li>')) {
          processedText = `<p>${processedText}</p>`;
        }
        
        // Handle different block styles
        if (block.style === 'h1') {
          return `<h1>${processedText}</h1>`;
        } else if (block.style === 'h2') {
          return `<h2>${processedText}</h2>`;
        } else if (block.style === 'h3') {
          return `<h3>${processedText}</h3>`;
        } else if (block.style === 'h4') {
          return `<h4>${processedText}</h4>`;
        } else if (block.style === 'blockquote') {
          return `<blockquote>${processedText}</blockquote>`;
        } else {
          return processedText;
        }
      }
      return '';
    }).join('\n');
  };

  const convertExcerptToText = (blocks: any[] | string): string => {
    if (typeof blocks === 'string') return blocks;
    if (!blocks || !Array.isArray(blocks)) return '';
    
    return blocks.map(block => {
      if (block._type === 'block') {
        return block.children?.map((child: any) => child.text || '').join('') || '';
      }
      return '';
    }).join(' ');
  };

  const searchArticles = async (query: string): Promise<any[]> => {
    // Simple client-side search for now
    const searchTerm = query.toLowerCase();
    return data.articles.filter((article: any) => 
      article.title?.toLowerCase().includes(searchTerm) ||
      article.author?.toLowerCase().includes(searchTerm)
    );
  };

  const value: CMSContextType = {
    infoBanners: data.infoBanners,
    articles: data.articles,
    categories: data.categories,
    teamMembers: data.teamMembers,
    siteSettings: data.siteSettings,
    isLoading,
    error,
    getActiveInfoBanner,
    getArticleBySlug,
    getArticlesByCategory,
    getTeamMemberBySlug,
    formatDate,
    convertBlockContentToHTML,
    convertExcerptToText,
    searchArticles,
  };

  // Don't block the entire page for loading - show content with loading state
  if (isLoading) {
    return (
      <CMSContext.Provider value={value}>
        {children}
      </CMSContext.Provider>
    );
  }

  if (error) {
    console.error('CMS Error:', error);
    // Don't block the page for CMS errors - show content anyway
    return (
      <CMSContext.Provider value={value}>
        {children}
      </CMSContext.Provider>
    );
  }

  // Debug: Show data counts
  console.log('CMSProvider data:', {
    infoBanners: data.infoBanners.length,
    articles: data.articles.length,
    categories: data.categories.length,
    teamMembers: data.teamMembers.length,
    siteSettings: data.siteSettings ? 'Loaded' : 'Not loaded'
  });

  return (
    <CMSContext.Provider value={value}>
      {children}
    </CMSContext.Provider>
  );
}; 