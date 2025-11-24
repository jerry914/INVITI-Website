import React, { useState } from 'react';
import { WireframeNav } from './WireframeNav';
import { GlobalBanner } from './GlobalBanner';
import { Locale } from '../../locales/translations';

interface NavStackProps {
  isMobile?: boolean;
  locale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
  onNavigateToHelpCenter?: () => void;
  onNavigate?: (path: string) => void;
  onSetScrollTarget?: (target: string) => void;
  showBanner?: boolean;
  onBannerAction?: () => void;
}

export const NavStack: React.FC<NavStackProps> = ({ 
  isMobile = false,
  locale = 'tc',
  onLocaleChange,
  onNavigateToHelpCenter,
  onNavigate,
  onSetScrollTarget,
  showBanner = true,
  onBannerAction
}) => {
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);

  const handleDismissBanner = () => {
    setIsBannerDismissed(true);
    // Store in localStorage to persist dismissal
    localStorage.setItem('banner-dismissed', 'true');
  };

  // Check if banner was previously dismissed
  React.useEffect(() => {
    const dismissed = localStorage.getItem('banner-dismissed');
    if (dismissed === 'true') {
      setIsBannerDismissed(true);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Banner - conditionally rendered */}
      {showBanner && !isBannerDismissed && (
        <GlobalBanner 
          isMobile={isMobile}
          locale={locale}
          onDismiss={handleDismissBanner}
          onActionClick={onBannerAction}
        />
      )}
      
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
export const useNavStackHeight = (isMobile: boolean, showBanner: boolean = true): number => {
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);

  React.useEffect(() => {
    const dismissed = localStorage.getItem('banner-dismissed');
    if (dismissed === 'true') {
      setIsBannerDismissed(true);
    }
  }, []);

  // Calculate total height based on device and banner visibility
  const navHeight = isMobile ? 64 : 80; // From WireframeNav
  const bannerHeight = isMobile ? 56 : 48; // Approximate heights

  if (showBanner && !isBannerDismissed) {
    return navHeight + bannerHeight;
  }
  return navHeight;
};
