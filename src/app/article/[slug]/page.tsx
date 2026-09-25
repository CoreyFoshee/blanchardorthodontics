import React from 'react';
import { InfoBanner } from '../../../components/InfoBanner';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { notFound } from 'next/navigation';
import { getArticle, getArticles } from '../../../../lib/site-content';
import { descriptionText, pageMetadata } from '../../../../lib/seo';
import { RichText } from '../../../components/RichText';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

async function ArticleDetailPageContent({ params }: ArticlePageProps) {
  // Fetch article data server-side
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  // Helper functions
  const formatDate = (dateString?: string): string => {
    if (!dateString) return "";
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
        <div className="article-overlay"></div>
        <div className="banner-area-title blog-single">
          <div className="container banner-area-container w-container">
            <div className="title-area-content">
              <div className="article-listing-meta single-meta">
                <div className="article-author">
                  <img src="/images/Author-Icon.svg" loading="lazy" alt="Blog User" className="author-icon" />
                  <a href="/detail-team/dr-katelyn-blanchard" className="article-author-name article-single">{article.author}</a>
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
              <div className="article-single-wrap w-richtext"><RichText value={article.content} /></div>
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
    <>
      <ArticleDetailPageContent params={params} />
    </>
  );
}

// Enable ISR - regenerate every 2 minutes
export const revalidate = 120;
export async function generateStaticParams() {
  return (await getArticles()).map(article => ({ slug: article.slug.current }));
}
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) notFound();
  const meta = pageMetadata(`/article/${article.slug.current}`, `${article.title} | Blanchard Orthodontics`,
    descriptionText(article.excerpt || article.content, article.title), article.featuredImage?.asset?.url);
  return { ...meta, openGraph: { ...meta.openGraph, type: 'article', publishedTime: article.publishedAt, modifiedTime: article._updatedAt, authors: article.author ? [article.author] : undefined } };
}
