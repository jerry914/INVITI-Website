import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Locale, getTranslations } from '../../locales/translations';

interface GlobalBannerProps {
  isMobile?: boolean;
  locale?: Locale;
  onDismiss?: () => void;
  onActionClick?: () => void;
}

export const GlobalBanner: React.FC<GlobalBannerProps> = ({ 
  isMobile = false,
  locale = 'tc',
  onDismiss,
  onActionClick
}) => {
  const t = getTranslations(locale);

  return (
    <div className="bg-dark text-white border-bottom border-secondary">
      <div className={isMobile ? 'container-fluid px-4 py-3' : 'container py-3'}>
        <div className={`d-flex ${isMobile ? 'flex-column align-items-start gap-2' : 'align-items-center justify-content-between gap-3'}`}>
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <p className="mb-0 small text-white">
              {t.banner?.message || '🎉 新功能上線！立即體驗 INVITI 的智能賓客管理系統'}
            </p>
            {onActionClick && !isMobile && (
              <button
                onClick={onActionClick}
                className="btn btn-link text-white text-decoration-none d-flex align-items-center gap-1 p-0"
              >
                <span>{t.banner?.cta || '了解更多'}</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>

          {onActionClick && isMobile && (
            <button
              onClick={onActionClick}
              className="btn btn-outline-light btn-sm d-flex align-items-center gap-1"
            >
              <span>{t.banner?.cta || '了解更多'}</span>
              <ArrowRight size={16} />
            </button>
          )}

          {onDismiss && (
            <button
              onClick={onDismiss}
              className="btn btn-link text-white text-decoration-none p-0 d-flex align-items-center"
              aria-label="Dismiss banner"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
