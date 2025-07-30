'use client';

import React from 'react';
import { useCMS } from '../../../components/CMSProvider';
import { InfoBanner } from '../../../components/InfoBanner';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ClientWrapper } from '../../../components/ClientWrapper';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

function ArticleDetailPageContent({ params }: ArticlePageProps) {
  const { getArticleBySlug, formatDate, convertBlockContentToHTML } = useCMS();
  const [article, setArticle] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadArticle = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const articleData = await getArticleBySlug(params.slug);
        if (articleData) {
          setArticle(articleData);
        } else {
          setError('Article not found');
        }
      } catch (err) {
        setError('Failed to load article');
        console.error('Error loading article:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadArticle();
  }, [params.slug, getArticleBySlug]);

  if (isLoading) {
    return <div>Loading article...</div>;
  }

  if (error || !article) {
    notFound();
  }

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

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  return (
    <ClientWrapper>
      <ArticleDetailPageContent params={params} />
    </ClientWrapper>
  );
} 