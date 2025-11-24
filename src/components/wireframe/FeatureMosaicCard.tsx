import React, { useState } from 'react';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type CardSize = 'large' | 'medium' | 'small';

interface FeatureMosaicCardProps {
  size: CardSize;
  icon: React.ReactNode;
  title: string;
  description: string;
  screenshot?: string;
  tag?: string;
  onClick?: () => void;
  onScreenshotClick?: () => void;
  isMobile?: boolean;
  disabled?: boolean;
  learnMoreText?: string;
}

export const FeatureMosaicCard: React.FC<FeatureMosaicCardProps> = ({ 
  size,
  icon, 
  title, 
  description, 
  screenshot,
  tag,
  onClick,
  onScreenshotClick,
  isMobile = false,
  disabled = false,
  learnMoreText = 'Learn more'
}) => {
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  // Fixed aspect ratio mapping (Notion-style)
  const getAspectRatio = () => {
    if (isMobile) return '16/9';
    switch (size) {
      case 'large': return '16/9';
      case 'medium': return '4/3';
      case 'small': return '1/1';
      default: return '4/3';
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (disabled) return;
    if ((e.target as HTMLElement).closest('.screenshot-container')) {
      return;
    }
    onClick?.();
  };

  const handleScreenshotClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onScreenshotClick?.();
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`card h-100 position-relative ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover-shadow'}`}
      style={{ transition: 'box-shadow 0.2s' }}
    >
      {tag && (
        <span className="badge bg-white text-dark border position-absolute top-0 start-0 m-3 rounded-pill">
          {tag}
        </span>
      )}

      <div 
        className="position-absolute bottom-0 end-0 m-3 rounded-circle bg-light d-flex align-items-center justify-content-center"
        style={{ width: '24px', height: '24px', opacity: 0.8 }}
      >
        <div className="rounded-circle bg-secondary" style={{ width: '12px', height: '12px', opacity: 0.5 }} />
      </div>

      <div className={`card-body d-flex flex-column gap-3 ${isMobile ? 'p-3' : 'p-4'}`}>
        {screenshot && (
          <div 
            className="position-relative bg-light border rounded overflow-hidden cursor-zoom-in flex-shrink-0"
            onClick={handleScreenshotClick}
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
            style={{
              aspectRatio: getAspectRatio()
            }}
          >
            <div className="w-100 h-100 p-2">
              <ImageWithFallback 
                src={screenshot}
                alt={`${title} screenshot`}
                className="w-100 h-100 object-fit-contain"
                style={{
                  transform: isHoveringImage ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.2s'
                }}
              />
            </div>
            
            <div 
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: isHoveringImage ? 'rgba(0,0,0,0.2)' : 'transparent',
                transition: 'background-color 0.2s'
              }}
            >
              <div 
                className="bg-white rounded-circle p-2 shadow"
                style={{
                  opacity: isHoveringImage ? 1 : 0,
                  transform: isHoveringImage ? 'scale(1)' : 'scale(0.9)',
                  transition: 'all 0.2s'
                }}
              >
                <ZoomIn size={20} className="text-dark" />
              </div>
            </div>
          </div>
        )}

        <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light" style={{ width: '32px', height: '32px' }}>
          {icon}
        </div>

        <h4 className="mb-1 text-truncate-2-lines">{title}</h4>

        <p className="text-muted small flex-grow-1 text-truncate-2-lines mb-0">
          {description}
        </p>

        {!disabled && (
          <div className="d-flex align-items-center gap-1 text-muted small mt-auto">
            <span>{learnMoreText}</span>
            <ArrowRight size={14} />
          </div>
        )}
      </div>
    </div>
  );
};
