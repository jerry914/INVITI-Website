import React from 'react';
import { WireframeNav } from './WireframeNav';
import { Locale } from '../../locales/translations';

interface NavStackProps {
  isMobile?: boolean;
  locale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
  onNavigateToHelpCenter?: () => void;
  onNavigate?: (path: string) => void;
  onSetScrollTarget?: (target: string) => void;
}

export const NavStack: React.FC<NavStackProps> = ({ 
  isMobile = false,
  locale = 'tc',
  onLocaleChange,
  onNavigateToHelpCenter,
  onNavigate,
  onSetScrollTarget
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Navigation */}
      <WireframeNav 
        isMobile={isMobile}
        locale={locale}
        onLocaleChange={onLocaleChange}
        onNavigateToHelpCenter={onNavigateToHelpCenter}
        onNavigate={onNavigate}
        onSetScrollTarget={onSetScrollTarget}
      />
    </div>
  );
};

// Export hook to calculate NavStack height for content offset
export const useNavStackHeight = (isMobile: boolean): number => {
  // Calculate total height based on device
  const navHeight = isMobile ? 64 : 80; // From WireframeNav
  return navHeight;
};
