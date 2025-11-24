import React from 'react';
import { WireframeCard } from './WireframeCard';
import { Locale, getTranslations } from '../../locales/translations';

interface BlogSectionProps {
  isMobile?: boolean;
  locale?: Locale;
  onNavigate?: (path: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ isMobile = false, locale = 'tc', onNavigate }) => {
  const t = getTranslations(locale);
  const posts = [
    {
      meta: t.blog.post1Meta,
      title: t.blog.post1Title,
      description: t.blog.post1Description
    },
    {
      meta: t.blog.post2Meta,
      title: t.blog.post2Title,
      description: t.blog.post2Description
    },
    {
      meta: t.blog.post3Meta,
      title: t.blog.post3Title,
      description: t.blog.post3Description
    }
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className={isMobile ? 'container-fluid px-4' : 'container'}>
        <div className={`d-flex ${isMobile ? 'flex-column mb-4' : 'align-items-center justify-content-between mb-5'}`}>
          <h2 className={`mb-3 ${isMobile ? 'text-start' : 'mb-0'}`}>{t.blog.sectionTitle}</h2>
          {!isMobile && (
            <button
              onClick={() => onNavigate?.('/blog')}
              className="btn btn-link text-decoration-none text-dark px-0"
            >
              {t.blog.viewAll}
            </button>
          )}
        </div>

        <div className={`row g-4 ${isMobile ? '' : 'row-cols-1 row-cols-md-3'}`}>
          {posts.map((post, index) => (
            <div 
              key={index}
              className={isMobile ? '' : 'col'}
              onClick={() => onNavigate?.('/blog')}
            >
              <WireframeCard
                image="placeholder"
                meta={post.meta}
                title={post.title}
                description={post.description}
                hover
                isMobile={isMobile}
              />
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="mt-4">
            <button
              onClick={() => onNavigate?.('/blog')}
              className="btn btn-link text-decoration-none text-dark px-0"
            >
              {t.blog.viewAll}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};