import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Locale, getTranslations } from '../../locales/translations';
import { NavStack } from '../wireframe/NavStack';
import { FooterSection } from '../wireframe/FooterSection';
import { WireframeButton } from '../wireframe/WireframeButton';

interface BlogPostPageProps {
  locale?: Locale;
  isMobile?: boolean;
  onNavigate?: (path: string) => void;
  onLocaleChange?: (locale: Locale) => void;
  onScrollToPricing?: (focusCard?: 'free' | 'basic' | 'pro' | 'enterprise') => void;
  onSetScrollTarget?: (target: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ 
  locale = 'tc', 
  isMobile = false,
  onNavigate,
  onLocaleChange,
  onScrollToPricing,
  onSetScrollTarget
}) => {
  const t = getTranslations(locale);

  // Mock post data
  const post = {
    title: 'First Block：專訪 XXX',
    category: t.blogPage.caseStudies,
    date: '2024-10-15',
    readTime: `5 ${t.blogPage.readTime}`,
    author: {
      name: '林小明',
      role: '產品經理',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
    },
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
    content: `
      <p>深入探討活動管理的未來趨勢，以及如何利用科技提升賓客體驗。我們與業界專家一起探討數位轉型的關鍵要素。</p>
      
      <h2>數位化轉型的必要性</h2>
      <p>在當今快節奏的商業環境中，活動管理已經從傳統的紙本作業轉向全面數位化。這不僅提升了效率，更重要的是能夠提供更好的賓客體驗。</p>
      
      <h3>關鍵挑戰</h3>
      <ul>
        <li>如何有效管理大量賓客資料</li>
        <li>即時追蹤 RSVP 狀態</li>
        <li>確保邀請函的送達率</li>
        <li>提供個人化的賓客體驗</li>
      </ul>
      
      <blockquote>
        「INVITI 幫助我們將活動管理流程從數週縮短到數天，讓我們能夠專注於創造更好的活動體驗。」
        <br/><br/>
        — 活動總監，某知名品牌
      </blockquote>
      
      <h2>實際應用案例</h2>
      <p>我們訪問了多位使用 INVITI 的活動主辦者，了解他們如何在實際工作中運用這些工具。以下是一些關鍵洞察：</p>
      
      <h3>自動化流程的價值</h3>
      <p>透過自動化邀請發送與追蹤，團隊可以節省大量時間，並且確保不會遺漏任何重要的賓客。系統會自動記錄每一次互動，讓您隨時掌握最新狀態。</p>
      
      <h3>資料驅動的決策</h3>
      <p>即時的儀表板與報告功能，讓您能夠快速做出資料驅動的決策。無論是調整邀請策略或是優化活動流程，都能基於實際數據進行。</p>
      
      <h2>未來展望</h2>
      <p>隨著科技的進步，活動管理將會變得更加智慧化。AI 輔助、預測分析、個人化推薦等功能，都將成為標準配備。現在就開始數位轉型，為未來做好準備。</p>
    `
  };

  const prevPost = {
    title: '產品更新：邀請追蹤改版',
    id: '3'
  };

  const nextPost = {
    title: '從展演到品牌：我們如何用 INVITI 管理百場活動',
    id: '2'
  };

  const handleNavigateToHelpCenter = () => {
    if (onNavigate) {
      onNavigate('/help-center');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation Stack */}
      <NavStack
        locale={locale} 
        isMobile={isMobile}
        onNavigate={onNavigate}
        onLocaleChange={onLocaleChange}
        onNavigateToHelpCenter={handleNavigateToHelpCenter}
        onSetScrollTarget={onSetScrollTarget}
        showBanner={true}
      />

      {/* Main Content */}
      <main className={isMobile ? 'flex-1 pt-[120px]' : 'flex-1 pt-[112px]'}>
        {/* Back to Blog */}
        <div className={`border-b border-gray-200 ${isMobile ? 'py-4 px-6' : 'py-6'}`}>
          <div className={`${isMobile ? '' : 'max-w-[800px] mx-auto px-6'}`}>
            <button
              onClick={() => onNavigate?.('/blog')}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={16} />
              {t.blogPage.backToBlog}
            </button>
          </div>
        </div>

        {/* Article */}
        <article className={isMobile ? 'py-8' : 'py-12'}>
          <div className={`${isMobile ? 'px-6' : 'max-w-[800px] mx-auto px-6'}`}>
            {/* Meta Row */}
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
              <span className="px-2 py-1 bg-gray-50 border border-gray-200" style={{ borderRadius: '4px' }}>
                {post.category}
              </span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="mb-6">{post.title}</h1>

            {/* Author Row */}
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                <ImageWithFallback
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm text-gray-900">{post.author.name}</div>
                <div className="text-xs text-gray-500">{post.author.role}</div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mb-8 overflow-hidden" style={{ borderRadius: '8px' }}>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <ImageWithFallback
                  src={post.heroImage}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-gray max-w-none blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Prev/Next Navigation */}
        <div className={`border-t-2 border-gray-200 bg-gray-50 ${isMobile ? 'py-6 px-6' : 'py-8'}`}>
          <div className={`${isMobile ? '' : 'max-w-[800px] mx-auto px-6'}`}>
            <div className={`flex ${isMobile ? 'flex-col gap-4' : 'justify-between items-center gap-6'}`}>
              {/* Previous Post */}
              {prevPost ? (
                <button
                  onClick={() => onNavigate?.(`/blog/${prevPost.id}`)}
                  className="flex items-center gap-3 text-left flex-1 group"
                >
                  <ArrowLeft size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500 mb-1">{t.blogPage.previousPost}</div>
                    <div className="text-sm text-gray-900 group-hover:text-gray-700 transition-colors truncate">
                      {prevPost.title}
                    </div>
                  </div>
                </button>
              ) : (
                <div className="flex-1" />
              )}

              {/* Next Post */}
              {nextPost ? (
                <button
                  onClick={() => onNavigate?.(`/blog/${nextPost.id}`)}
                  className="flex items-center gap-3 text-right flex-1 group justify-end"
                >
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500 mb-1">{t.blogPage.nextPost}</div>
                    <div className="text-sm text-gray-900 group-hover:text-gray-700 transition-colors truncate">
                      {nextPost.title}
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" />
                </button>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterSection 
        locale={locale} 
        isMobile={isMobile}
        onNavigate={onNavigate}
        onNavigateToHelpCenter={handleNavigateToHelpCenter}
        onScrollToPricing={onScrollToPricing}
      />
    </div>
  );
};
