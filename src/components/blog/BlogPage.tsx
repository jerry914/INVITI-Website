import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { BlogCard, BlogCardProps } from './BlogCard';
import { Locale, getTranslations } from '../../locales/translations';
import { NavStack } from '../wireframe/NavStack';
import { FooterSection } from '../wireframe/FooterSection';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

interface BlogPageProps {
  locale?: Locale;
  isMobile?: boolean;
  onNavigate?: (path: string) => void;
  onLocaleChange?: (locale: Locale) => void;
  onScrollToPricing?: (focusCard?: 'free' | 'basic' | 'pro' | 'enterprise') => void;
  onSetScrollTarget?: (target: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ 
  locale = 'tc', 
  isMobile = false,
  onNavigate,
  onLocaleChange,
  onScrollToPricing,
  onSetScrollTarget
}) => {
  const t = getTranslations(locale);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = [
    { id: 'all', label: t.blogPage.allPosts },
    { id: 'product', label: t.blogPage.productUpdates },
    { id: 'case', label: t.blogPage.caseStudies },
    { id: 'industry', label: t.blogPage.industryInsights },
    { id: 'events', label: t.blogPage.events }
  ];

  // Mock blog posts
  const blogPosts: BlogCardProps[] = [
    {
      id: '1',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      title: 'First Block：專訪 XXX',
      excerpt: '深入探討活動管理的未來趨勢，以及如何利用科技提升賓客體驗。我們與業界專家一起探討數位轉型的關鍵要素...',
      category: t.blogPage.caseStudies,
      date: '2024-10-15',
      author: {
        name: '林小明',
        role: '產品經理',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
      },
      readTime: `5 ${t.blogPage.readTime}`
    },
    {
      id: '2',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
      title: '從展演到品牌：我們如何用 INVITI 管理百場活動',
      excerpt: '品牌活動的成功關鍵在於細節。分享我們如何透過 INVITI 平台管理複雜的多場次活動，提升效率與賓客滿意度...',
      category: t.blogPage.caseStudies,
      date: '2024-10-12',
      author: {
        name: '陳雅婷',
        role: '活動總監',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
      },
      readTime: `7 ${t.blogPage.readTime}`
    },
    {
      id: '3',
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
      title: '產品更新：邀請追蹤改版',
      excerpt: '全新的邀請追蹤功能讓您能即時掌握每一封邀請函的狀態，包括開信率、點擊率與 RSVP 回覆...',
      category: t.blogPage.productUpdates,
      date: '2024-10-08',
      author: {
        name: '王大偉',
        role: '工程師',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100'
      },
      readTime: `4 ${t.blogPage.readTime}`
    },
    {
      id: '4',
      thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
      title: '產業觀點：PR 名單資料資產化',
      excerpt: '在數位時代，賓客名單不再只是聯絡資訊的集合，而是企業最重要的資產之一。了解如何有效管理與運用...',
      category: t.blogPage.industryInsights,
      date: '2024-10-05',
      author: {
        name: '李思慧',
        role: '內容策略師',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
      },
      readTime: `6 ${t.blogPage.readTime}`
    },
    {
      id: '5',
      thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      title: '客戶故事：大型音樂節的邀請流程',
      excerpt: '管理超過 5000 位賓客的音樂節邀請流程，看看他們如何運用 INVITI 簡化複雜的多場次管理...',
      category: t.blogPage.caseStudies,
      date: '2024-10-01',
      author: {
        name: '張志強',
        role: '客戶成功經理',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
      },
      readTime: `8 ${t.blogPage.readTime}`
    },
    {
      id: '6',
      thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      title: '活動花絮：封測回顧',
      excerpt: '感謝所有參與 INVITI 封測的夥伴們！回顧這段旅程中的精彩時刻與寶貴反饋...',
      category: t.blogPage.events,
      date: '2024-09-28',
      author: {
        name: '黃美玲',
        role: '社群經理',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'
      },
      readTime: `3 ${t.blogPage.readTime}`
    }
  ];

  const handlePostClick = (postId: string) => {
    if (onNavigate) {
      onNavigate(`/blog/${postId}`);
    }
  };

  const handleNavigateToHelpCenter = () => {
    if (onNavigate) {
      onNavigate('/help-center');
    }
  };

  // Sidebar component
  const SidebarContent = () => (
    <nav className="space-y-1">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => {
            setActiveCategory(category.id);
            if (isMobile) {
              setIsSidebarOpen(false);
            }
          }}
          className={`w-full text-left px-3 py-2 text-sm transition-colors leading-[140%] ${
            activeCategory === category.id
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
          style={{ borderRadius: '4px' }}
        >
          {category.label}
        </button>
      ))}
    </nav>
  );

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
        {/* Hero Section */}
        <div className={`border-b border-gray-200 bg-gray-50 ${isMobile ? 'py-8 px-6' : 'py-12'}`}>
          <div className={`${isMobile ? '' : 'max-w-[1120px] mx-auto px-6'}`}>
            <h1 className={`mb-3 ${isMobile ? 'text-left' : 'text-center'}`}>
              {t.blogPage.title}
            </h1>
            <p className={`text-gray-600 leading-[150%] ${isMobile ? 'text-left' : 'text-center'}`}>
              {t.blogPage.subtitle}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className={`border-b border-gray-200 bg-white ${isMobile ? 'py-4 px-6' : 'py-6'}`}>
          <div className={`${isMobile ? '' : 'max-w-[1120px] mx-auto px-6'}`}>
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder={t.blogPage.searchPlaceholder}
                className="w-full h-12 pl-12 pr-4 border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition-colors leading-[140%]"
                style={{ borderRadius: '6px' }}
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className={isMobile ? 'py-6' : 'py-12'}>
          <div className={`${isMobile ? '' : 'max-w-[1120px] mx-auto px-6'}`}>
            {isMobile ? (
              // Mobile: Collapsible Sidebar + Single Column Feed
              <div>
                {/* Collapsible Sidebar */}
                <div className="px-6 mb-6">
                  <Collapsible open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-3 border border-gray-200 bg-white">
                      <span className="text-sm text-gray-900">
                        {categories.find(c => c.id === activeCategory)?.label}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 transition-transform ${
                          isSidebarOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 p-3 border border-gray-200 bg-white">
                      <SidebarContent />
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                {/* Single Column Feed */}
                <div className="px-6 space-y-6">
                  {blogPosts.map((post) => (
                    <div key={post.id} style={{ width: '343px', maxWidth: '100%' }}>
                      <BlogCard {...post} onClick={() => handlePostClick(post.id)} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Desktop: Sidebar + Two Column Feed
              <div className="flex gap-8">
                {/* Left Sidebar - Sticky */}
                <aside
                  className="flex-shrink-0"
                  style={{ width: '240px', position: 'sticky', top: '96px', height: 'fit-content' }}
                >
                  <SidebarContent />
                </aside>

                {/* Main Feed - Two Columns */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-6">
                    {blogPosts.map((post) => (
                      <BlogCard key={post.id} {...post} onClick={() => handlePostClick(post.id)} />
                    ))}
                  </div>
                </div>
              </div>
            )}
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
