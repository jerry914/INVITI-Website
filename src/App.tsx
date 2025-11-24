import React, { useState, useEffect, useRef } from 'react';
import { NavStack } from './components/wireframe/NavStack';
import { HeroSection } from './components/wireframe/HeroSection';
import { FeaturesSection } from './components/wireframe/FeaturesSection';
import { PricingSection } from './components/wireframe/PricingSection';
import { BlogSection } from './components/wireframe/BlogSection';
import { FooterSection } from './components/wireframe/FooterSection';
import { FeatureDetail } from './components/wireframe/FeatureDetail';
import { CookieBanner } from './components/wireframe/CookieBanner';
import { CookiePreferencesModal, CookiePreferences } from './components/wireframe/CookiePreferencesModal';
import { CookiePolicyPage } from './components/wireframe/CookiePolicyPage';
import { HelpCenterPage } from './components/helpcenter/HelpCenterPage';
import { BlogPage } from './components/blog/BlogPage';
import { BlogPostPage } from './components/blog/BlogPostPage';
import { PaymentModal } from './components/wireframe/PaymentModal';
import { EnterpriseInquiryModal } from './components/wireframe/EnterpriseInquiryModal';
import { DemoBookingPage } from './components/wireframe/DemoBookingPage';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';
import { Monitor, Tablet, Smartphone } from 'lucide-react';
import { toast, Toaster } from 'sonner@2.0.3';
import { Locale, getTranslations } from './locales/translations';

type FeatureId = 'event-session-management' | 'automated-invitations' | 'guest-database' | 'roles-permissions' | 'email-templates' | 'all' | null;
type ViewType = 'wireframe' | 'references' | 'cookie-policy' | 'help-center' | 'blog' | 'blog-post' | 'demo-booking';
type PlanType = 'free' | 'basic' | 'pro' | 'enterprise';

export default function App() {
const [currentView, setCurrentView] = useState<ViewType>('wireframe');
const [displayedView, setDisplayedView] = useState<ViewType>('wireframe');
const [transitionStage, setTransitionStage] = useState<'idle' | 'fading-out' | 'fading-in'>('idle');
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [selectedFeature, setSelectedFeature] = useState<FeatureId>(null);
  
  // Locale state (Traditional Chinese as default/source of truth)
  const [locale, setLocale] = useState<Locale>('tc');
  
  // Navigation scroll target (for cross-page navigation with scroll)
const [scrollTarget, setScrollTarget] = useState<string>('');
const scrollTargetRef = useRef<string>('');
const initialRenderRef = useRef(true);
  
  // Cookie consent state
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    strictlyNecessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  // Payment modal state
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('free');
  
  // Enterprise inquiry modal state
  const [showEnterpriseModal, setShowEnterpriseModal] = useState(false);

  // Load saved locale from localStorage
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && ['tc', 'en', 'ja', 'zh-hans'].includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  // Check if user has already made cookie choices
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (!savedConsent) {
      // First time visitor - show banner after a short delay
      const timer = setTimeout(() => {
        setShowCookieBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(savedConsent);
        setCookiePreferences(saved);
      } catch (e) {
        console.error('Failed to parse cookie preferences');
      }
    }
  }, []);

  const containerWidths = {
    desktop: 'w-full',
    tablet: 'w-full',
    mobile: 'w-full'
  };

  const featureDetails = {
    'event-session-management': {
      title: 'Event & Session Management',
      description: 'Streamline your event planning process with powerful management tools designed for PR professionals and event organizers. Create, organize, and track multiple events and sessions all in one centralized platform.',
      screenshot: 'https://images.unsplash.com/photo-1517857612127-f33b2b246bd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYxNzQ4MTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capabilities: [
        'Create and manage unlimited events with custom timelines and schedules',
        'Organize multiple sessions within each event with detailed agenda planning',
        'Track venue details, capacity limits, and location information',
        'Set up recurring events and template sessions for faster planning',
        'Real-time dashboard showing all upcoming events and session status',
        'Manage event staff, vendors, and resource allocation',
        'Generate comprehensive event reports and analytics'
      ]
    },
    'automated-invitations': {
      title: 'Automated Invitations & Tracking',
      description: 'Send beautiful, branded invitations and track every interaction automatically. Our intelligent tracking system keeps you informed of RSVPs, opens, clicks, and engagement in real-time.',
      screenshot: 'https://images.unsplash.com/photo-1586957960362-65815d739527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGludml0YXRpb24lMjB0cmFja2luZ3xlbnwxfHx8fDE3NjE3OTgyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capabilities: [
        'Automated email invitations with customizable templates and branding',
        'Real-time RSVP tracking with instant notifications',
        'Track email opens, clicks, and engagement metrics',
        'Automated follow-up reminders for non-responders',
        'Personalized invitation messages with merge fields',
        'QR code generation for easy check-in at events',
        'Integration with calendar apps for automatic scheduling',
        'Waitlist management and automated seat allocation'
      ]
    },
    'guest-database': {
      title: 'Centralized Guest Database',
      description: 'Build and maintain a comprehensive database of your contacts and guests. Advanced segmentation and filtering tools help you target the right audience for every event.',
      screenshot: 'https://images.unsplash.com/photo-1740560051533-3acef26ace95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwZGF0YWJhc2UlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNzk4MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capabilities: [
        'Store unlimited contacts with detailed profiles and history',
        'Advanced segmentation by industry, location, interests, and custom tags',
        'Import contacts from CSV, Excel, or integrate with CRM systems',
        'Track guest attendance history and engagement patterns',
        'Create custom fields and categories for your specific needs',
        'Duplicate detection and automatic contact merging',
        'Export guest lists and reports in multiple formats',
        'GDPR-compliant data management and privacy controls'
      ]
    },
    'roles-permissions': {
      title: 'Roles & Permissions',
      description: 'Collaborate with your team securely with granular access control and comprehensive audit trails. Manage who can do what in your organization.',
      screenshot: 'https://images.unsplash.com/photo-1602343457842-a98feacd5cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcGVybWlzc2lvbnMlMjBhY2Nlc3N8ZW58MXx8fHwxNzYxODEyODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capabilities: [
        'Define custom roles with specific permission sets',
        'Granular access control for events, guests, and data',
        'Team collaboration with shared workspaces',
        'Comprehensive audit logs tracking all user actions',
        'Two-factor authentication for enhanced security',
        'SSO integration for enterprise customers',
        'Activity monitoring and user session management',
        'Role-based email sending and approval workflows'
      ]
    },
    'email-templates': {
      title: 'Email Templates',
      description: 'Create, manage, and deploy professional email templates with ease. Multi-version support and variable system for personalized communications.',
      screenshot: 'https://images.unsplash.com/photo-1576859933856-c07ec7ddfe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMHRlbXBsYXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTgxMjg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capabilities: [
        'Drag-and-drop template builder with rich formatting',
        'Multi-language template support for global events',
        'Version control and template history tracking',
        'Dynamic variable insertion for personalization',
        'Pre-built templates for common event types',
        'A/B testing capabilities for optimization',
        'Mobile-responsive email design',
        'Template analytics and performance tracking'
      ]
    }
  };

  const handleFeatureClick = (featureId: string) => {
    // If clicking "View All Features", scroll to top or show first feature
    if (featureId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setSelectedFeature(featureId as FeatureId);
  };

  const handleBackToFeatures = () => {
    setSelectedFeature(null);
  };

  // Cookie handlers
  const handleAcceptAllCookies = () => {
    const allAccepted: CookiePreferences = {
      strictlyNecessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowCookieBanner(false);
    toast.success('Cookie preferences saved');
  };

  const handleRejectNonEssential = () => {
    const essentialOnly: CookiePreferences = {
      strictlyNecessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    setCookiePreferences(essentialOnly);
    localStorage.setItem('cookieConsent', JSON.stringify(essentialOnly));
    setShowCookieBanner(false);
    toast.success('Cookie preferences saved');
  };

  const handleManagePreferences = () => {
    setShowCookieBanner(false);
    setShowCookieModal(true);
  };

  const handleSaveCookiePreferences = (preferences: CookiePreferences) => {
    setCookiePreferences(preferences);
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    toast.success('Cookie preferences saved');
  };

  const handleViewCookiePolicy = () => {
    setShowCookieBanner(false);
    setCurrentView('cookie-policy');
    setSelectedFeature(null);
  };

  const handleBackFromCookiePolicy = () => {
    setCurrentView('wireframe');
  };

  const handleBackFromHelpCenter = () => {
    setCurrentView('wireframe');
  };

  const handleNavigateToHelpCenter = () => {
    setCurrentView('help-center');
    setSelectedFeature(null);
  };

  const handleNavigate = (path: string) => {
    if (path === '/blog') {
      setCurrentView('blog');
      setSelectedFeature(null);
    } else if (path.startsWith('/blog/')) {
      setCurrentView('blog-post');
      setSelectedFeature(null);
    } else if (path === '/help-center') {
      setCurrentView('help-center');
      setSelectedFeature(null);
    } else if (path === '/demo-booking') {
      setCurrentView('demo-booking');
      setSelectedFeature(null);
    } else if (path === '/') {
      setCurrentView('wireframe');
      setSelectedFeature(null);
    }
  };

  const handleScrollToPricing = (focusCard?: 'free' | 'basic' | 'pro' | 'enterprise') => {
    // Ensure we're on the wireframe view
    if (currentView !== 'wireframe') {
      setCurrentView('wireframe');
      setSelectedFeature(null);
    }

    // Use setTimeout to ensure the view has switched before scrolling
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        // Calculate NavStack height (Nav + Banner)
        const navHeight = 64; // h-16 = 64px
        const bannerHeight = deviceView === 'mobile' ? 56 : 48;
        const isBannerDismissed = localStorage.getItem('banner-dismissed') === 'true';
        const totalNavHeight = isBannerDismissed ? navHeight : navHeight + bannerHeight;
        
        const elementPosition = pricingSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - totalNavHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Highlight the focused card after scroll
        if (focusCard) {
          setTimeout(() => {
            const cardElement = document.querySelector(`[data-pricing-card="${focusCard}"]`);
            if (cardElement) {
              cardElement.classList.add('pricing-card-highlight');
              setTimeout(() => {
                cardElement.classList.remove('pricing-card-highlight');
              }, 1500);
            }
          }, 300);
        }
      }
    }, currentView !== 'wireframe' ? 100 : 0);
  };

  // Handle locale change with smooth transition
  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    // Optional: Show toast notification
    // toast.success('Language changed');
  };

  // Handle plan selection for payment
  const handlePlanSelect = (plan: PlanType) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  // Handle enterprise inquiry
  const handleEnterpriseInquiry = () => {
    setShowEnterpriseModal(true);
  };

  // Handle auto-scroll after navigation from other pages
useEffect(() => {
  scrollTargetRef.current = scrollTarget;
}, [scrollTarget]);

useEffect(() => {
  document.title = `INVITI - ${getTranslations(locale).hero.title}`;

  const faviconUrl = new URL('./assets/favicon.webp', import.meta.url).href;
  let faviconLink = document.querySelector("link[rel='icon']");
  if (!faviconLink) {
    faviconLink = document.createElement('link');
    faviconLink.setAttribute('rel', 'icon');
    document.head.appendChild(faviconLink);
  }
  faviconLink.setAttribute('type', 'image/svg+xml');
  faviconLink.setAttribute('href', faviconUrl);
}, [locale]);

useEffect(() => {
  if (initialRenderRef.current) {
    initialRenderRef.current = false;
    setDisplayedView(currentView);
    return;
  }
  setTransitionStage('fading-out');
  const fadeTimeout = setTimeout(() => {
    setDisplayedView(currentView);
    if (!scrollTargetRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setTransitionStage('fading-in');
  }, 200);
  const finishTimeout = setTimeout(() => {
    setTransitionStage('idle');
  }, 400);
  return () => {
    clearTimeout(fadeTimeout);
    clearTimeout(finishTimeout);
  };
}, [currentView]);

useEffect(() => {
  if (scrollTarget && currentView === 'wireframe') {
      // Delay to ensure DOM is ready and page has rendered
      const timeoutId = setTimeout(() => {
        const section = document.getElementById(scrollTarget);
        if (section) {
          // Calculate NavStack height (Nav + Banner)
          const navHeight = 64; // h-16 = 64px
          const bannerHeight = deviceView === 'mobile' ? 56 : 48;
          const isBannerDismissed = localStorage.getItem('banner-dismissed') === 'true';
          const totalNavHeight = isBannerDismissed ? navHeight : navHeight + bannerHeight;
          
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - totalNavHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Clear the scroll target after scrolling
          setScrollTarget('');
        } else {
          // If section not found, clear target to avoid infinite loop
          console.warn(`Section ${scrollTarget} not found`);
          setScrollTarget('');
        }
      }, 350); // Slightly longer delay for view transition
      
      return () => clearTimeout(timeoutId);
    }
  }, [scrollTarget, currentView, deviceView]);

  const viewToRender = displayedView;

  return (
    <div className={`min-h-screen page-transition ${transitionStage}`}>
      {/* Content */}
      {viewToRender === 'help-center' ? (
        <div className="flex justify-center pt-8">
          <div className={`${containerWidths[deviceView]} w-full transition-all duration-300 bg-white overflow-hidden`}>
            <HelpCenterPage
              locale={locale}
              isMobile={deviceView === 'mobile'}
              onBack={handleBackFromHelpCenter}
              onNavigate={handleNavigate}
              onLocaleChange={handleLocaleChange}
              onScrollToPricing={handleScrollToPricing}
              onSetScrollTarget={setScrollTarget}
            />
          </div>
        </div>
      ) : viewToRender === 'cookie-policy' ? (
        <div className="flex justify-center pt-12">
          <div className={`${containerWidths[deviceView]} w-full transition-all duration-300 bg-white overflow-hidden`}>
            <CookiePolicyPage
              onBack={handleBackFromCookiePolicy}
              onManagePreferences={handleManagePreferences}
              isMobile={deviceView === 'mobile'}
            />
          </div>
        </div>
      ) : viewToRender === 'blog' ? (
        <div className="flex justify-center pt-12">
          <div className={`${containerWidths[deviceView]} w-full transition-all duration-300 bg-white overflow-hidden`}>
            <BlogPage
              locale={locale}
              isMobile={deviceView === 'mobile'}
              onNavigate={handleNavigate}
              onLocaleChange={handleLocaleChange}
              onScrollToPricing={handleScrollToPricing}
              onSetScrollTarget={setScrollTarget}
            />
          </div>
        </div>
      ) : viewToRender === 'blog-post' ? (
        <div className="flex justify-center pt-12">
          <div className={`${containerWidths[deviceView]} w-full transition-all duration-300 bg-white overflow-hidden`}>
            <BlogPostPage
              locale={locale}
              isMobile={deviceView === 'mobile'}
              onNavigate={handleNavigate}
              onLocaleChange={handleLocaleChange}
              onScrollToPricing={handleScrollToPricing}
              onSetScrollTarget={setScrollTarget}
            />
          </div>
        </div>
      ) : viewToRender === 'demo-booking' ? (
        <div className="flex justify-center pt-12">
          <div className={`${containerWidths[deviceView]} w-full transition-all duration-300 bg-white border-2 border-gray-400 shadow-lg overflow-hidden`}>
            <DemoBookingPage
              locale={locale}
              isMobile={deviceView === 'mobile'}
              onNavigate={handleNavigate}
              onLocaleChange={handleLocaleChange}
              onScrollToPricing={handleScrollToPricing}
              onSetScrollTarget={setScrollTarget}
            />
          </div>
        </div>
      ) : selectedFeature ? (
        <div className="flex justify-center pt-12">
          <div className={`${containerWidths[deviceView]} w-full transition-all duration-300 bg-white overflow-hidden`}>
            <FeatureDetail
              title={featureDetails[selectedFeature].title}
              description={featureDetails[selectedFeature].description}
              capabilities={featureDetails[selectedFeature].capabilities}
              screenshot={featureDetails[selectedFeature].screenshot}
              onBack={handleBackToFeatures}
              isMobile={deviceView === 'mobile'}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center pt-12">
          <div className={`${containerWidths[deviceView]} w-full transition-all duration-300 bg-white overflow-hidden`}>
            {/* Mobile Rules Note */}
            {deviceView === 'mobile' && (
              <div className="bg-yellow-50 border-b-2 border-yellow-300 px-6 py-3">
                <p className="text-xs text-gray-700">
                  <strong>Mobile rules applied:</strong> Fixed width text (343px), auto height, no clipping, 1-col stacks, 24px side padding.
                </p>
              </div>
            )}
            <div key={locale} className="locale-transition">
              <NavStack
                isMobile={deviceView === 'mobile'} 
                locale={locale}
                onLocaleChange={handleLocaleChange}
                onNavigateToHelpCenter={handleNavigateToHelpCenter}
                onNavigate={handleNavigate}
                onSetScrollTarget={setScrollTarget}
                showBanner={true}
              />
              <HeroSection 
                isMobile={deviceView === 'mobile'} 
                locale={locale}
                onNavigate={handleNavigate}
              />
              <FeaturesSection 
                isMobile={deviceView === 'mobile'} 
                onFeatureClick={handleFeatureClick} 
                locale={locale}
              />
              <BlogSection 
                isMobile={deviceView === 'mobile'} 
                locale={locale}
                onNavigate={handleNavigate}
              />
              <PricingSection 
                isMobile={deviceView === 'mobile'} 
                locale={locale}
                onPlanSelect={handlePlanSelect}
                onEnterpriseInquiry={handleEnterpriseInquiry}
              />
              <FooterSection 
                isMobile={deviceView === 'mobile'} 
                locale={locale}
                onNavigate={handleNavigate}
                onNavigateToHelpCenter={handleNavigateToHelpCenter}
                onScrollToPricing={handleScrollToPricing}
              />
            </div>
          </div>
        </div>
      )}

      {/* Cookie Banner */}
      {viewToRender === 'wireframe' && showCookieBanner && (
        <CookieBanner
          isMobile={deviceView === 'mobile'}
          onAcceptAll={handleAcceptAllCookies}
          onRejectNonEssential={handleRejectNonEssential}
          onManagePreferences={handleManagePreferences}
          onViewPolicy={handleViewCookiePolicy}
          locale={locale}
        />
      )}

      {/* Cookie Preferences Modal */}
      <CookiePreferencesModal
        isOpen={showCookieModal}
        onClose={() => setShowCookieModal(false)}
        preferences={cookiePreferences}
        onSave={handleSaveCookiePreferences}
        isMobile={deviceView === 'mobile'}
      />

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        selectedPlan={selectedPlan}
        isMobile={deviceView === 'mobile'}
        locale={locale}
        onNavigate={handleNavigate}
        onScrollToPricing={() => handleScrollToPricing()}
      />

      {/* Enterprise Inquiry Modal */}
      <EnterpriseInquiryModal
        isOpen={showEnterpriseModal}
        onClose={() => setShowEnterpriseModal(false)}
        locale={locale}
        isMobile={deviceView === 'mobile'}
      />

      {/* Toast Notifications */}
      <Toaster position="top-center" />
    </div>
  );
}
