import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Locale, getTranslations } from '../../locales/translations';

interface HelpCenterSectionProps {
  isMobile?: boolean;
  locale?: Locale;
}

export const HelpCenterSection: React.FC<HelpCenterSectionProps> = ({ isMobile = false, locale = 'tc' }) => {
  const t = getTranslations(locale);
  
  const topics = [
    t.helpCenter.gettingStarted,
    t.helpCenter.accountManagement,
    t.helpCenter.eventCreation,
    t.helpCenter.guestManagement,
    t.helpCenter.technicalSupport,
    t.helpCenter.billing
  ];

  return (
    <section id="help-center" className={isMobile ? 'py-6 bg-white' : 'py-16 md:py-24 bg-white'}>
      <div className={isMobile ? 'px-6' : 'max-w-[1280px] mx-auto px-20'}>
        <div className={isMobile ? 'border-2 border-gray-300 p-4' : 'border-2 border-gray-300 p-8 md:p-12'}>
          <div className={isMobile ? 'mb-4 max-w-[343px]' : 'text-center mb-8'}>
            <h2 className={`mb-2 ${isMobile ? 'text-left' : ''}`}>{t.helpCenter.sectionTitle}</h2>
          </div>

          <div className={isMobile ? 'flex flex-col gap-4 max-w-[311px]' : 'grid md:grid-cols-2 gap-8 items-start'}>
            {/* Search Bar */}
            <div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={isMobile ? 18 : 20} />
                <input 
                  type="text" 
                  placeholder={t.helpCenter.searchPlaceholder}
                  className={`w-full border-2 border-gray-300 focus:border-gray-500 outline-none transition-colors ${
                    isMobile ? 'pl-10 pr-3 py-2 text-sm' : 'pl-12 pr-4 py-3'
                  }`}
                />
              </div>
            </div>

            {/* Topic Links */}
            <div className={isMobile ? 'flex flex-col gap-2' : 'space-y-3'}>
              {topics.map((topic, index) => (
                <a 
                  key={index}
                  href="#"
                  className={`flex items-center justify-between border-2 border-gray-300 hover:border-gray-500 hover:bg-gray-50 transition-colors group ${
                    isMobile ? 'p-3' : 'p-3'
                  }`}
                >
                  <span className={`text-gray-700 group-hover:text-gray-900 leading-[140%] ${isMobile ? 'text-sm max-w-[260px]' : ''}`}>
                    {topic}
                  </span>
                  <ChevronRight size={isMobile ? 16 : 20} className="text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
