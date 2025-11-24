import React from 'react';

interface WireframeCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  meta?: string;
  hover?: boolean;
  isMobile?: boolean;
  className?: string;
}

export const WireframeCard: React.FC<WireframeCardProps> = ({ 
  icon, 
  title, 
  description, 
  image,
  meta,
  hover = false,
  isMobile = false,
  className = '' 
}) => {
  return (
    <div className={`card ${hover ? 'cursor-pointer' : ''} ${className}`}>
      <div className={`card-body ${isMobile ? 'p-3' : 'p-4'}`}>
        {image && (
          <div className={`bg-light border mb-3 d-flex align-items-center justify-content-center ${isMobile ? 'h-auto' : ''}`} style={{ height: isMobile ? '160px' : '192px' }}>
            <span className="text-muted small">Image Placeholder</span>
          </div>
        )}
        {icon && <div className="mb-3">{icon}</div>}
        {meta && <div className="small text-muted mb-2">{meta}</div>}
        <h5 className="card-title mb-2">{title}</h5>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  );
};
