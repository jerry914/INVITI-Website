import React, { useRef, useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { WireframeButton } from './WireframeButton';
import { PaginationDots } from './PaginationDots';
import { Locale, getTranslations } from '../../locales/translations';

interface PricingSectionProps {
  isMobile?: boolean;
  locale?: Locale;
  onPlanSelect?: (plan: 'free' | 'basic' | 'pro' | 'enterprise') => void;
  onEnterpriseInquiry?: () => void;
}

interface PlanFeature {
  text: string;
  isBold?: boolean;
}

interface Plan {
  name: string;
  badge?: string;
  monthlyPrice: string;
  yearlyPrice?: string;
  yearlyStrikethrough?: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  ctaLink: string;
  variant: 'primary' | 'secondary';
  isHighlighted?: boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ isMobile = false, locale = 'tc', onPlanSelect, onEnterpriseInquiry }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isYearly, setIsYearly] = useState(false);
  const t = getTranslations(locale);

  const plans: Plan[] = [
    {
      name: t.pricing.freeTitle,
      monthlyPrice: t.pricing.freePrice,
      yearlyPrice: t.pricing.freePrice, // Same price for yearly
      description: t.pricing.freeDescription,
      features: [
        { text: `${t.pricing.guestDatabaseLimit}：50`, isBold: true },
        { text: `${t.pricing.monthlyEmails}：100 封（可加購）`, isBold: true },
        { text: `${t.pricing.emailTemplates}：每種信件類型各 1 封`, isBold: true },
        { text: `${t.pricing.eventsAndSessions}：不設上限`, isBold: true },
        { text: '邀請與 RSVP（基礎）', isBold: false }
      ],
      cta: t.pricing.getStarted,
      ctaLink: 'https://web.inviti.vip/#pricing',
      variant: 'secondary'
    },
    {
      name: t.pricing.basicTitle,
      badge: t.pricing.basicBadge,
      monthlyPrice: t.pricing.basicPrice,
      yearlyPrice: 'NT$6,000',
      yearlyStrikethrough: 'NT$7,200',
      description: t.pricing.basicDescription,
      features: [
        { text: `${t.pricing.userLimit}：1`, isBold: true },
        { text: `${t.pricing.guestDatabaseLimit}：500`, isBold: true },
        { text: `${t.pricing.monthlyEmails}：1,000 封（可加購）`, isBold: true },
        { text: `${t.pricing.emailTemplates}：每種信件類型各 5 封`, isBold: true },
        { text: `${t.pricing.eventsAndSessions}：不設上限`, isBold: true },
        { text: '自訂模板、基本協作、Email 支援（48h）', isBold: false }
      ],
      cta: t.pricing.tryBasic,
      ctaLink: 'https://web.inviti.vip/#pricing',
      variant: 'primary',
      isHighlighted: true
    },
    {
      name: t.pricing.proTitle,
      badge: t.pricing.proBadge,
      monthlyPrice: t.pricing.proPrice,
      yearlyPrice: 'NT$30,000',
      yearlyStrikethrough: 'NT$36,000',
      description: t.pricing.proDescription,
      features: [
        { text: `${t.pricing.userLimit}：3`, isBold: true },
        { text: `${t.pricing.guestDatabaseLimit}：5,000`, isBold: true },
        { text: `${t.pricing.monthlyEmails}：無上限`, isBold: true },
        { text: `${t.pricing.emailTemplates}：無上限`, isBold: true },
        { text: `${t.pricing.eventsAndSessions}：不設上限`, isBold: true },
        { text: '進階自動化、優先 Email 支援（24h）', isBold: false }
      ],
      cta: t.pricing.upgradeToPro,
      ctaLink: 'https://web.inviti.vip/#pricing',
      variant: 'secondary'
    },
    {
      name: t.pricing.enterpriseTitle,
      monthlyPrice: t.pricing.enterprisePrice,
      yearlyPrice: t.pricing.enterprisePrice, // Custom pricing for yearly
      description: t.pricing.enterpriseDescription,
      features: [
        { text: `${t.pricing.guestDatabaseLimit}＆席次：客製`, isBold: true },
        { text: '郵件與模板：無上限（依合約）', isBold: true },
        { text: `${t.pricing.eventsAndSessions}：不設上限`, isBold: true },
        { text: 'SLA、上線導入、專屬客成功', isBold: false }
      ],
      cta: t.pricing.contactSales,
      ctaLink: 'mailto:contact@inviti.vip',
      variant: 'secondary'
    }
  ];

  // Track scroll position to update active card indicator
  useEffect(() => {
    if (!isMobile || !carouselRef.current) return;

    const handleScroll = () => {
      if (!carouselRef.current) return;
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = 312 + 16; // card width + gap
      const newActiveCard = Math.round(scrollLeft / cardWidth);
      setActiveCard(Math.min(newActiveCard, plans.length - 1));
    };

    const carousel = carouselRef.current;
    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [isMobile, plans.length]);

  // Render pricing card
  const renderPricingCard = (plan: Plan, index: number) => {
    // Map plan name to data attribute identifier
    const getPricingCardId = (planName: string): string => {
      if (planName === t.pricing.freeTitle) return 'free';
      if (planName === t.pricing.basicTitle) return 'basic';
      if (planName === t.pricing.proTitle) return 'pro';
      if (planName === t.pricing.enterpriseTitle) return 'enterprise';
      return '';
    };

    return (
      <div 
        key={index}
        data-pricing-card={getPricingCardId(plan.name)}
        className={`col-12 col-md-6 col-lg-3 d-flex align-items-stretch ${isMobile ? 'flex-shrink-0 w-auto' : ''}`}
      >
        <div 
          className={`
            card w-100
            ${plan.isHighlighted ? 'border-dark border-2' : ''}
            ${!isMobile ? 'hover-shadow' : ''}
          `}
          style={{ 
            transition: 'box-shadow 0.2s',
            width: isMobile ? '312px' : '100%'
          }}
        >
          <div className={`card-body d-flex flex-column ${isMobile ? 'p-4' : 'p-4'}`}>
            {/* HeaderGroup - Fixed min-height for alignment */}
            <div className="mb-4" style={{ minHeight: isMobile ? '140px' : '160px' }}>
              {/* HeaderRow - Plan Title + Badge */}
              <div className="d-flex align-items-center gap-2 mb-3">
                <h3 className="h4 mb-0">{plan.name}</h3>
                {plan.badge && (
                  <span className="badge bg-light text-dark border fw-normal rounded-pill">
                    {plan.badge}
                  </span>
                )}
              </div>
              
              {/* PriceBlock - Yearly vs Monthly */}
              <div className="mb-2">
                {isYearly ? (
                  // Yearly mode - PriceBlock with discounted price on top
                  <div className="d-flex flex-column gap-1">
                    {/* Row 1: Discounted Price (large, bold, top) */}
                    <div className="d-flex align-items-baseline">
                      <span className={`${isMobile ? 'h3' : 'h2'} mb-0 text-dark tabular-nums`}>
                        {plan.yearlyPrice || plan.monthlyPrice}
                      </span>
                      <span className="text-muted ms-1 small">
                        {t.pricing.perYear}
                      </span>
                    </div>
                    
                    {/* Row 2: Original Price (strikethrough, smaller, bottom) */}
                    {plan.yearlyStrikethrough && (
                      <div className="text-muted text-decoration-line-through small tabular-nums">
                        {plan.yearlyStrikethrough}{t.pricing.perYear}
                      </div>
                    )}
                  </div>
                ) : (
                  // Monthly mode - single line price
                  <div className="d-flex align-items-baseline">
                    <span className={`${isMobile ? 'h2' : 'h2'} mb-0 text-dark tabular-nums`}>
                      {plan.monthlyPrice}
                    </span>
                    <span className="text-muted ms-1 small">
                      {' '}{t.pricing.month}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-muted small mb-0">{plan.description}</p>
            </div>

            <ul className="list-unstyled mb-4 flex-grow-1 d-flex flex-column gap-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="d-flex align-items-start gap-2">
                  <Check size={16} className="text-dark flex-shrink-0 mt-1" strokeWidth={2} />
                  <span className={`small ${
                    feature.isBold ? 'text-dark fw-medium' : 'text-muted'
                  }`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <WireframeButton 
                variant={plan.variant} 
                size={isMobile ? 'sm' : 'md'} 
                className="w-100"
                onClick={() => {
                  const planType = plan.name === t.pricing.freeTitle ? 'free' :
                                 plan.name === t.pricing.basicTitle ? 'basic' :
                                 plan.name === t.pricing.proTitle ? 'pro' : 'enterprise';
                  
                  // Free plan opens app directly, no payment modal
                  if (planType === 'free') {
                    window.open('https://app.inviti.vip', '_blank', 'noopener,noreferrer');
                  } else if (planType === 'enterprise') {
                    // Enterprise: open inquiry modal
                    if (onEnterpriseInquiry) {
                      onEnterpriseInquiry();
                    }
                  } else if (onPlanSelect) {
                    // Basic/Pro: open payment modal
                    onPlanSelect(planType);
                  } else {
                    window.location.href = plan.ctaLink;
                  }
                }}
              >
                {plan.cta}
              </WireframeButton>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="pricing" className="section-padding bg-light border-top border-bottom">
      <div className={isMobile ? 'container-fluid px-0' : 'container'}>
        {/* Header (Non-scrolling) */}
        <div className={`mb-5 ${isMobile ? 'px-4' : 'text-center'}`}>
          <h2 className="mb-4">{t.pricing.sectionTitle}</h2>
          
          {/* Monthly/Yearly Toggle */}
          <div className="d-inline-flex align-items-center">
            <button 
              onClick={() => setIsYearly(false)}
              className={`btn btn-sm ${!isYearly ? 'btn-dark' : 'btn-light text-muted'} rounded`}
            >
              {t.pricing.monthly}
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`btn btn-sm ${isYearly ? 'btn-dark' : 'btn-light text-muted'} rounded`}
            >
              {t.pricing.yearly}
            </button>
          </div>
        </div>

        {/* Cards Container */}
        {isMobile ? (
          <>
            {/* Carousel/Plans - Horizontal Scrollable */}
            <div 
              ref={carouselRef}
              className="w-100 overflow-x-auto overflow-y-hidden scrollbar-hide d-flex pb-4 px-4"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                gap: '1rem'
              }}
            >
              {plans.map((plan, index) => (
                <div key={index} style={{ scrollSnapAlign: 'start' }}>
                  {renderPricingCard(plan, index)}
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="mt-2">
              <PaginationDots total={plans.length} active={activeCard} />
            </div>
          </>
        ) : (
          <div className="row g-4">
            {plans.map((plan, index) => renderPricingCard(plan, index))}
          </div>
        )}
      </div>
    </section>
  );
};
