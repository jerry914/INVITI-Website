import React, { useState } from 'react';
import { Calendar, Mail, Database, Users, FileText, Upload } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { ImageLightbox } from './ImageLightbox';
import { WireframeButton } from './WireframeButton';
import { Locale, getTranslations } from '../../locales/translations';

interface FeaturesSectionProps {
  isMobile?: boolean;
  onFeatureClick?: (featureId: string) => void;
  locale?: Locale;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ 
  isMobile = false, 
  onFeatureClick,
  locale = 'tc'
}) => {
  const [lightboxImage, setLightboxImage] = useState<{ url: string; alt: string } | null>(null);
  const t = getTranslations(locale);

  // Standard 6 feature cards
  const features = [
    {
      id: 'event-session-management',
      icon: <Calendar size={22} className="text-dark" />,
      title: t.features.card1Title,
      description: t.features.card1Description,
      screenshot: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjE4MTI4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'automated-invitations',
      icon: <Mail size={22} className="text-dark" />,
      title: t.features.card2Title,
      description: t.features.card2Description,
      screenshot: 'https://images.unsplash.com/photo-1584543515885-b8981dbf0b5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGF1dG9tYXRpb24lMjBzeXN0ZW18ZW58MXx8fHwxNzYxODEyODkzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'guest-database',
      icon: <Database size={22} className="text-dark" />,
      title: t.features.card3Title,
      description: t.features.card3Description,
      screenshot: 'https://images.unsplash.com/photo-1740560051533-3acef26ace95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMGNvbnRhY3RzJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NjE4MTI4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'roles-permissions',
      icon: <Users size={22} className="text-dark" />,
      title: t.features.card4Title,
      description: t.features.card4Description,
      screenshot: 'https://images.unsplash.com/photo-1602343457842-a98feacd5cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcGVybWlzc2lvbnMlMjBhY2Nlc3N8ZW58MXx8fHwxNzYxODEyODkzfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'email-templates',
      icon: <FileText size={22} className="text-dark" />,
      title: t.features.card5Title,
      description: t.features.card5Description,
      screenshot: 'https://images.unsplash.com/photo-1576859933856-c07ec7ddfe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMHRlbXBsYXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTgxMjg5M3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 'import-deduplication',
      icon: <Upload size={22} className="text-dark" />,
      title: locale === 'tc' ? '匯入/去重工具' : 
            locale === 'en' ? 'Import & Deduplication' :
            locale === 'ja' ? 'インポート/重複排除ツール' : '汇入/去重工具',
      description: locale === 'tc' ? '批次匯入賓客名單，自動偵測重複資料，保持資料庫整潔。' :
                   locale === 'en' ? 'Batch import guest lists, automatically detect duplicates, keep database clean.' :
                   locale === 'ja' ? 'ゲストリストの一括インポート、重複データの自動検出、データベースの整理。' : '批量汇入宾客名单，自动检测重复资料，保持资料库整洁。',
      screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwaW1wb3J0JTIwc3ByZWFkc2hlZXR8ZW58MXx8fHwxNzYxODU5MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const handleScreenshotClick = (screenshot: string, title: string) => {
    setLightboxImage({ url: screenshot, alt: `${title} screenshot` });
  };

  return (
    <>
      <section 
        id="features" 
        className="section-padding bg-light border-top border-bottom"
      >
        <div className={isMobile ? 'container-fluid px-4' : 'container'}>
          {/* Section Header */}
          <div className="mb-5">
            <h2 className={`mb-3 ${isMobile ? 'text-start' : 'text-center'}`}>
              {t.features.sectionTitle}
            </h2>
          </div>
          
          {/* Standard Grid */}
          <div className="row g-4">
            {features.map((feature) => (
              <div key={feature.id} className="col-12 col-md-6 col-lg-4">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  screenshot={feature.screenshot}
                  onClick={() => onFeatureClick?.(feature.id)}
                  onScreenshotClick={() => handleScreenshotClick(feature.screenshot, feature.title)}
                  isMobile={isMobile}
                  learnMoreText={t.features.viewDetails}
                />
              </div>
            ))}
          </div>

          {/* View All Features Button */}
          <div className={`d-flex justify-content-center ${isMobile ? 'mt-4' : 'mt-5'}`}>
            <WireframeButton
              variant="secondary"
              size="md"
              onClick={() => onFeatureClick?.('all')}
            >
              {t.features.viewAllFeatures}
            </WireframeButton>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          imageUrl={lightboxImage.url}
          alt={lightboxImage.alt}
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
};
