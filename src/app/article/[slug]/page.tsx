import React from 'react';
import { InfoBanner } from '../../../components/InfoBanner';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ClientWrapper } from '../../../components/ClientWrapper';
import { notFound } from 'next/navigation';
import { getArticleBySlug } from '../../../../lib/sanity.config';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

async function ArticleDetailPageContent({ params }: ArticlePageProps) {
  // Fetch article data server-side
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }

  // Helper functions
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const convertBlockContentToHTML = (blocks: any[]): string => {
    if (!blocks || !Array.isArray(blocks)) return '';
    
    return blocks.map(block => {
      if (block._type === 'block') {
        const text = block.children?.map((child: any) => {
          let childText = child.text || '';
          
          if (child.marks && child.marks.includes('strong')) {
            childText = `<strong>${childText}</strong>`;
          }
          
          if (child.marks && child.marks.includes('em')) {
            childText = `<em>${childText}</em>`;
          }
          
          return childText;
        }).join('') || '';
        
        let processedText = text
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/^##\s+(.*?)$/gm, '<h2>$1</h2>')
          .replace(/^###\s+(.*?)$/gm, '<h3>$1</h3>')
          .replace(/^-\s+(.*?)$/gm, '<li>$1</li>')
          .replace(/^\d+\.\s+(.*?)$/gm, '<li>$1</li>')
          .replace(/\n\n/g, '</p><p>')
          .replace(/\n/g, '<br>');
        
        if (!processedText.startsWith('<h') && !processedText.startsWith('<li>')) {
          processedText = `<p>${processedText}</p>`;
        }
        
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

  return (
    <>
      <InfoBanner />
      <Header />
      <div className="banner-title-area-section">
        <div className="article-overlay"></div>
        <div className="banner-area-title blog-single">
          <div className="container banner-area-container w-container">
            <div className="title-area-content">
              <div className="article-listing-meta single-meta">
                <div className="article-author">
                  <img src="/images/Author-Icon.svg" loading="lazy" alt="Blog User" className="author-icon" />
                  <div className="article-author-name article-single">{article.author}</div>
                </div>
                <div className="article-date">
                  <img src="/images/Calendar-Icon.svg" loading="lazy" alt="Blog Calendar" className="article-date-icon" />
                  <div className="article-date-text article-single-meta">{formatDate(article.publishedAt)}</div>
                </div>
              </div>
              <h1 className="banner-title-text">{article.title}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="article-section-single-wrap">
        <div className="container w-container">
          <div className="single-featured-image">
            <img src={article.featuredImage?.asset?.url || '/images/webclip.jpg'} loading="lazy" alt={article.title} className="article-main-image" />
          </div>
          <div className="single-content-wrap">
            <div className="custom-content-area">
              <div 
                className="article-single-wrap w-richtext"
                dangerouslySetInnerHTML={{ __html: convertBlockContentToHTML(article.content) }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  return (
    <ClientWrapper>
      <ArticleDetailPageContent params={params} />
    </ClientWrapper>
  );
} 