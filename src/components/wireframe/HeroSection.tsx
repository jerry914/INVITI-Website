import React from 'react';
import { WireframeButton } from './WireframeButton';
import { Locale, getTranslations } from '../../locales/translations';
import invitLogo from '../../assets/hero.webp';

interface HeroSectionProps {
  isMobile?: boolean;
  locale?: Locale;
  onNavigate?: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isMobile = false, locale = 'tc', onNavigate }) => {
  const t = getTranslations(locale);
  
  return (
    <section id="home" className="bg-white section-padding">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column gap-3">
              <h1 className="display-6 fw-medium">{t.hero.title}</h1>
              <p className="text-muted lead">{t.hero.subtitle}</p>
              <div className="d-flex flex-column flex-sm-row gap-3 pt-2">
                <WireframeButton 
                  variant="primary" 
                  className="w-100"
                  onClick={() => onNavigate?.('/booking')}
                >
                  {t.hero.bookDemo}
                </WireframeButton>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="hero-animation-container position-relative overflow-hidden" style={{ minHeight: isMobile ? '240px' : '320px', backgroundColor: 'transparent' }}>
              <svg className="hero-canvas" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
                {/* Lines at -22-degree slope - moving from top-right to bottom-left along their direction */}
                {/* -22°: cos(-22°) ≈ 0.927, sin(-22°) ≈ -0.375, tan(-22°) ≈ -0.404 */}
                {/* Line length 40px: x = 40*0.927 ≈ 37.08, y = 40*(-0.375) ≈ -15 */}
                {/* Initial positions outside canvas (viewBox 400x300) - positioned in top-right area outside bounds */}
                <line className="moving-line line-1" x1="450" y1="-50" x2="487.08" y2="-65" stroke="#000000" strokeWidth="2"/>
                <line className="moving-line line-2" x1="480" y1="-40" x2="517.08" y2="-55" stroke="#000000" strokeWidth="2"/>
                <line className="moving-line line-3" x1="510" y1="-30" x2="547.08" y2="-45" stroke="#000000" strokeWidth="2"/>
                <line className="moving-line line-4" x1="500" y1="130" x2="537.08" y2="115" stroke="#000000" strokeWidth="2"/>
                <line className="moving-line line-5" x1="530" y1="140" x2="567.08" y2="125" stroke="#000000" strokeWidth="2"/>
                <line className="moving-line line-6" x1="560" y1="150" x2="597.08" y2="135" stroke="#000000" strokeWidth="2"/>
              </svg>
              
              {/* Floating INVITI Logo */}
              <div className="hero-logo-container">
                <img 
                  src={invitLogo} 
                  alt="INVITI Logo" 
                  className="hero-logo"
                  style={{ maxWidth: isMobile ? '80px' : '120px', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
