import React from 'react';
import { InfoBanner } from '../../components/InfoBanner';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ClientWrapper } from '../../components/ClientWrapper';
import { getAllArticles } from '../../../lib/sanity.config';

// Pixel-perfect migration of article.html to Next.js React page
// All class names, structure, and content are preserved
// All image paths updated to /images/...

async function ArticlePageContent() {
  // Fetch articles server-side
  const articles = await getAllArticles();

  // Helper function
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };



  return (
    <>
      <InfoBanner />
      <Header />
      <div className="banner-title-area-section">
        <div className="banner-title-overlay"></div>
        <div className="banner-area-title">
          <div className="container w-container">
            <div className="title-area-content">
              <h1 className="banner-title-text">Blog Posts</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-listing">
        <div className="container w-container">
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items w-row">
              {articles.map((article: any) => (
                <div key={article._id} role="listitem" className="collection-item-2 w-dyn-item w-col w-col-4">
                  <div className="article-item">
                    <a href={`/article/${article.slug.current}`} className="w-inline-block">
                      <img 
                        height="" 
                        loading="lazy" 
                        src={article.featuredImage?.asset?.url ? 
                          `${article.featuredImage.asset.url}?fit=crop&crop=center&w=250&h=250` : 
                          '/images/webclip.jpg'
                        } 
                        alt={article.title} 
                        className="article-thumbnail-image" 
                      />
                    </a>
                    <div className="post-listing-content">
                      <div className="article-listing-category">
                        <a href={`/category/${article.category?.slug?.current}`} className="article-category-link">{article.category?.name}</a>
                      </div>
                      <a href={`/article/${article.slug.current}`} className="article-title-link w-inline-block">
                        <h2 className="article-title">{article.title}</h2>
                      </a>
                      <div className="article-listing-meta">
                        <div className="article-author">
                          <img src="/images/Author-Icon.svg" loading="lazy" alt="Blog meta user icon" className="author-icon" />
                          <div className="article-author-name">{article.author}</div>
                        </div>
                        <div className="article-date">
                          <img src="/images/blog-calendar.svg" loading="lazy" alt="Blog calendar meta" className="article-date-icon" />
                          <div className="article-date-text">{formatDate(article.publishedAt)}</div>
                        </div>
                      </div>
                      <div className="simple-link">
                        <a href={`/article/${article.slug.current}`} className="simple-readmore-link">+  Readmore</a>
                        <div className="simple-link-underline"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {articles.length === 0 && (
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default async function ArticlePage() {
  return (
    <ClientWrapper>
      <ArticlePageContent />
    </ClientWrapper>
  );
} 