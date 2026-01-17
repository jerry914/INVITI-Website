import React, { useState } from 'react';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  screenshot?: string;
  onClick?: () => void;
  onScreenshotClick?: () => void;
  isMobile?: boolean;
  disabled?: boolean;
  learnMoreText?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  screenshot,
  onClick,
  onScreenshotClick,
  isMobile = false,
  disabled = false,
  learnMoreText = 'Learn more'
}) => {
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    if (disabled) return;
    // If a custom screenshot click handler exists, avoid triggering card click from screenshot region
    if (
      onScreenshotClick &&
      (e.target as HTMLElement).closest('.screenshot-container')
    ) {
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
      className={`
        card h-100
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${!disabled ? 'shadow-sm hover-shadow' : ''}
      `}
      style={{ 
        transition: 'box-shadow 0.2s',
        backgroundColor: '#2D3508',
        borderColor: 'rgba(255, 252, 235, 0.15)'
      }}
    >
      <div className={`card-body d-flex flex-column ${isMobile ? 'p-3' : 'p-4'}`} style={{ color: '#FFFCEB' }}>
        
        {/* Screenshot - Fixed 16:9 Ratio */}
        {screenshot && (
          <div 
            className="screenshot-container position-relative mb-3 border rounded overflow-hidden flex-shrink-0 cursor-pointer"
            onClick={onScreenshotClick ? handleScreenshotClick : undefined}
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
            style={{
              aspectRatio: '16/9',
              borderColor: 'rgba(255, 252, 235, 0.2)'
            }}
          >
            <ImageWithFallback 
              src={screenshot}
              alt={`${title} screenshot`}
              className="w-100 h-100 object-fit-cover transition-transform"
              style={{ 
                transform: isHoveringImage ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.2s'
              }}
            />
            
            {onScreenshotClick && (
              // Zoom Icon Overlay (only when screenshot click is enabled)
              <div 
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{ 
                  backgroundColor: isHoveringImage ? 'rgba(0,0,0,0.3)' : 'transparent',
                  transition: 'background-color 0.2s'
                }}
              >
                <div 
                  className="rounded-circle p-2 shadow transition-all"
                  style={{
                    opacity: isHoveringImage ? 1 : 0,
                    transform: isHoveringImage ? 'scale(1)' : 'scale(0.9)',
                    backgroundColor: '#FFFCEB'
                  }}
                >
                  <ZoomIn size={20} style={{ color: '#2D3508' }} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Icon Circle */}
        <div 
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 flex-shrink-0" 
          style={{ 
            width: '32px', 
            height: '32px',
            backgroundColor: 'rgba(255, 252, 235, 0.15)'
          }}
        >
          <div style={{ color: '#FFFCEB' }}>
            {icon}
          </div>
        </div>

        {/* Title */}
        <h5 className="card-title mb-2 text-truncate-2-lines" style={{ color: '#FFFCEB', fontWeight: 500 }}>
          {title}
        </h5>

        {/* Description */}
        <p className="card-text mb-3 small flex-grow-1 text-truncate-2-lines" style={{ color: '#FFFCEB', opacity: 0.9, lineHeight: '1.6' }}>
          {description}
        </p>

        {/* Learn More Link */}
        {!disabled && (
          <div className="d-flex align-items-center gap-1 small mt-auto" style={{ color: '#FFFCEB', opacity: 0.8 }}>
            <span>{learnMoreText}</span>
            <ArrowRight size={14} />
          </div>
        )}
      </div>
    </div>
  );
};
