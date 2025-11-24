import React from 'react';
import { HCSearchBar } from './HCSearchBar';
import { HCTagChip } from './HCTagChip';
import { HCSidebar } from './HCSidebar';
import { HCTopicCard } from './HCTopicCard';
import { HCContactBlock } from './HCContactBlock';
import { NavStack } from '../wireframe/NavStack';
import { FooterSection } from '../wireframe/FooterSection';
import { Locale, getTranslations } from '../../locales/translations';
import { Send, Eye, Tags, Upload, Palette, Bell } from 'lucide-react';

interface HelpCenterPageProps {
  locale?: Locale;
  isMobile?: boolean;
  onBack?: () => void;
  onNavigate?: (path: string) => void;
  onLocaleChange?: (locale: Locale) => void;
  onScrollToPricing?: (focusCard?: 'free' | 'basic' | 'pro' | 'enterprise') => void;
  onSetScrollTarget?: (target: string) => void;
}

export const HelpCenterPage: React.FC<HelpCenterPageProps> = ({ 
  locale = 'tc',
  isMobile = false,
  onBack,
  onNavigate,
  onLocaleChange,
  onScrollToPricing,
  onSetScrollTarget
}) => {
  const t = getTranslations(locale);

  const topics = [
    {
      icon: Send,
      title: t.helpCenterPage.topic1Title,
      description: t.helpCenterPage.topic1Description
    },
    {
      icon: Eye,
      title: t.helpCenterPage.topic2Title,
      description: t.helpCenterPage.topic2Description
    },
    {
      icon: Tags,
      title: t.helpCenterPage.topic3Title,
      description: t.helpCenterPage.topic3Description
    },
    {
      icon: Upload,
      title: t.helpCenterPage.topic4Title,
      description: t.helpCenterPage.topic4Description
    },
    {
      icon: Palette,
      title: t.helpCenterPage.topic5Title,
      description: t.helpCenterPage.topic5Description
    },
    {
      icon: Bell,
      title: t.helpCenterPage.topic6Title,
      description: t.helpCenterPage.topic6Description
    }
  ];

  const tags = [
    t.helpCenterPage.tagBilling,
    t.helpCenterPage.tagDataSources,
    t.helpCenterPage.tagRestoring,
    t.helpCenterPage.tagMembers
  ];

  // Help Center is always the current page, so no-op
  const handleNavigateToHelpCenter = () => {
    // Already on Help Center page, scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Global Navigation Stack (Fixed) */}
      <NavStack
        isMobile={isMobile}
        locale={locale}
        onLocaleChange={onLocaleChange}
        onNavigateToHelpCenter={handleNavigateToHelpCenter}
        onNavigate={onNavigate}
        onSetScrollTarget={onSetScrollTarget}
        showBanner={true}
      />

      {/* Header Section - with top padding for fixed NavStack */}
      <div className={`border-b border-gray-100 ${isMobile ? 'px-6 py-8 pt-[120px]' : 'px-6 py-12 pt-[112px]'}`}>
        <div className="max-w-[1120px] mx-auto">
          <h1 className={`mb-6 text-gray-900 ${isMobile ? '' : ''}`}>
            {t.helpCenterPage.title}
          </h1>
          
          {/* Search Bar */}
          <div className="mb-4">
            <HCSearchBar 
              placeholder={t.helpCenterPage.searchPlaceholder}
              isMobile={isMobile}
            />
          </div>

          {/* Tag Chips */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <HCTagChip key={index} label={tag} />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={isMobile ? '' : 'px-6 py-12'}>
        <div className="max-w-[1120px] mx-auto">
          <div className={isMobile ? 'flex flex-col' : 'flex gap-12'}>
            {/* Sidebar */}
            {!isMobile && (
              <HCSidebar locale={locale} isMobile={isMobile} />
            )}
            
            {isMobile && (
              <HCSidebar locale={locale} isMobile={isMobile} />
            )}

            {/* Main Content */}
            <main className={`flex-1 ${isMobile ? 'px-6 py-8' : ''}`}>
              {/* Popular Topics */}
              <div className="mb-12">
                <h2 className="mb-6 text-gray-900 leading-[140%]">
                  {t.helpCenterPage.popularTopics}
                </h2>
                
                <div className={`grid gap-4 ${
                  isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {topics.map((topic, index) => (
                    <HCTopicCard
                      key={index}
                      icon={topic.icon}
                      title={topic.title}
                      description={topic.description}
                      isMobile={isMobile}
                    />
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-12" />

              {/* Contact Block */}
              <HCContactBlock
                title={t.helpCenterPage.stillNeedHelp}
                emailLabel={t.helpCenterPage.emailUs}
                communityLabel={t.helpCenterPage.joinCommunity}
                supportLabel={t.helpCenterPage.talkToSupport}
                isMobile={isMobile}
              />
            </main>
          </div>
        </div>
      </div>

      {/* Global Footer */}
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
