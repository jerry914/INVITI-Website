import React from 'react';
import { WireframeButton } from './WireframeButton';
import { Locale, getTranslations } from '../../locales/translations';

interface CookieBannerProps {
  isMobile?: boolean;
  onAcceptAll: () => void;
  onRejectNonEssential: () => void;
  onManagePreferences: () => void;
  onViewPolicy: () => void;
  locale?: Locale;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  isMobile = false,
  onAcceptAll,
  onRejectNonEssential,
  onManagePreferences,
  onViewPolicy,
  locale = 'tc'
}) => {
  const t = getTranslations(locale);
  
  return (
    <div className="fixed-banner bg-white border-top shadow-sm">
      <div className={isMobile ? 'container-fluid px-4 py-4' : 'container py-4'}>
        <div className={`d-flex ${isMobile ? 'flex-column gap-3' : 'align-items-center justify-content-between gap-4'}`}>
          <p className="mb-0 text-secondary">
            {t.cookieBanner.message}{' '}
            <button
              onClick={onViewPolicy}
              className="btn btn-link p-0 text-dark text-decoration-underline"
            >
              {t.cookieBanner.cookiePolicy}
            </button>
          </p>

          <div className={`d-flex ${isMobile ? 'flex-column' : 'align-items-center'} gap-2`}>
            <WireframeButton
              variant="primary"
              size="sm"
              onClick={onAcceptAll}
              className={isMobile ? 'w-100' : ''}
            >
              {t.cookieBanner.acceptAll}
            </WireframeButton>
            <WireframeButton
              variant="secondary"
              size="sm"
              onClick={onManagePreferences}
              className={isMobile ? 'w-100' : ''}
            >
              {t.cookieBanner.managePreferences}
            </WireframeButton>
            <WireframeButton
              variant="secondary"
              size="sm"
              onClick={onRejectNonEssential}
              className={isMobile ? 'w-100' : ''}
            >
              {t.cookieBanner.rejectNonEssential}
            </WireframeButton>
          </div>
        </div>
      </div>
    </div>
  );
};
