import React, { useState } from 'react';
import { HCSidebarItem } from './HCSidebarItem';
import { Locale, getTranslations } from '../../locales/translations';
import { ChevronDown, Menu } from 'lucide-react';

interface HCSidebarProps {
  locale?: Locale;
  isMobile?: boolean;
}

export const HCSidebar: React.FC<HCSidebarProps> = ({ 
  locale = 'tc',
  isMobile = false
}) => {
  const t = getTranslations(locale);
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { label: t.helpCenterPage.gettingStarted, hasChildren: false },
    { label: t.helpCenterPage.productOverview, hasChildren: false },
    { label: t.helpCenterPage.invitationsRSVP, hasChildren: false },
    { label: t.helpCenterPage.sessionsEvents, hasChildren: false },
    { label: t.helpCenterPage.guestDatabase, hasChildren: false },
    { label: t.helpCenterPage.pricingBilling, hasChildren: false },
    { label: t.helpCenterPage.settingsPermissions, hasChildren: false },
    { label: t.helpCenterPage.troubleshooting, hasChildren: false }
  ];

  if (isMobile) {
    return (
      <div className="w-full border-b border-gray-200 bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-4 text-left"
        >
          <div className="flex items-center gap-2">
            <Menu size={20} className="text-gray-700" />
            <span className="text-gray-900 leading-[140%]">Documentation</span>
          </div>
          <ChevronDown 
            size={20} 
            className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
        
        {isOpen && (
          <div className="px-6 pb-4 space-y-1 border-t border-gray-100">
            {categories.map((category, index) => (
              <HCSidebarItem
                key={index}
                label={category.label}
                hasChildren={category.hasChildren}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <aside className="w-60 flex-shrink-0">
      <div className="sticky top-6 space-y-1">
        <div className="mb-3 px-3">
          <h4 className="text-xs text-gray-500 uppercase tracking-wider leading-[140%]">
            Documentation
          </h4>
        </div>
        {categories.map((category, index) => (
          <HCSidebarItem
            key={index}
            label={category.label}
            hasChildren={category.hasChildren}
          />
        ))}
      </div>
    </aside>
  );
};
