import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { WireframeButton } from './WireframeButton';

interface CookiePolicyPageProps {
  onBack: () => void;
  onManagePreferences: () => void;
  isMobile?: boolean;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({
  onBack,
  onManagePreferences,
  isMobile = false
}) => {
  return (
    <div className={`bg-white min-h-screen ${isMobile ? 'p-6' : 'py-16 px-20'}`}>
      <div className={isMobile ? 'max-w-[343px]' : 'max-w-[800px] mx-auto'}>
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group focus:outline-none focus:ring-2 focus:ring-gray-400 rounded px-2 py-1 -ml-2"
        >
          <ArrowLeft size={isMobile ? 18 : 20} className="group-hover:-translate-x-1 transition-transform" />
          <span className={isMobile ? 'text-sm' : ''}>Back</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 leading-[140%]">Cookie Policy</h1>
          <p className="text-gray-600 leading-[160%] mb-6">
            Last updated: October 30, 2025
          </p>
          <WireframeButton
            variant="secondary"
            size={isMobile ? 'sm' : 'md'}
            onClick={onManagePreferences}
          >
            Manage cookie preferences
          </WireframeButton>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {/* Introduction */}
          <section>
            <h2 className="mb-4">Introduction & Scope</h2>
            <div className="space-y-4 text-gray-700 leading-[160%]">
              <p>
                This Cookie Policy explains how INVITI ("we," "us," or "our") uses cookies and similar
                technologies when you visit our website. This policy is part of our broader Privacy Policy
                and should be read together with it.
              </p>
              <p>
                By using our website, you agree to the use of cookies as described in this policy. You can
                manage your cookie preferences at any time using the cookie settings tool.
              </p>
            </div>
          </section>

          {/* What are Cookies */}
          <section>
            <h2 className="mb-4">What Are Cookies</h2>
            <div className="space-y-4 text-gray-700 leading-[160%]">
              <p>
                Cookies are small text files stored on your device (computer, tablet, or mobile) when you
                visit a website. They help websites recognize your device and remember information about
                your visit, such as your preferences and settings.
              </p>
              <p>
                We use both first-party cookies (set by INVITI) and third-party cookies (set by external
                services we use) to enhance your experience and provide our services.
              </p>
            </div>
          </section>

          {/* Types We Use */}
          <section>
            <h2 className="mb-4">Types of Cookies We Use</h2>
            <div className="space-y-6 text-gray-700 leading-[160%]">
              <div>
                <h3 className="mb-2">Strictly Necessary Cookies</h3>
                <p>
                  These cookies are essential for the website to function properly. They enable core
                  features such as navigation, session management, and security. Without these cookies,
                  certain services cannot be provided. These cookies do not store any personally
                  identifiable information and cannot be disabled.
                </p>
              </div>

              <div>
                <h3 className="mb-2">Functional Cookies</h3>
                <p>
                  These cookies allow the website to remember choices you make (such as your username,
                  language preference, or region) and provide enhanced, personalized features. The
                  information collected by these cookies may be anonymized and cannot track your browsing
                  activity on other websites.
                </p>
              </div>

              <div>
                <h3 className="mb-2">Analytics Cookies</h3>
                <p>
                  We use analytics cookies to understand how visitors interact with our website. These
                  cookies collect information about which pages you visit, how long you stay, and any
                  errors you encounter. This helps us improve the website's performance and user
                  experience. All data is aggregated and anonymous.
                </p>
              </div>

              <div>
                <h3 className="mb-2">Marketing Cookies</h3>
                <p>
                  Marketing cookies track your online activity to help advertisers deliver more relevant
                  advertising or to limit how many times you see an ad. These cookies can share
                  information with other organizations or advertisers. We use these cookies to measure
                  the effectiveness of our campaigns and personalize offers.
                </p>
              </div>
            </div>
          </section>

          {/* Third-party Tools */}
          <section>
            <h2 className="mb-4">Third-Party Tools & Services</h2>
            <div className="space-y-4 text-gray-700 leading-[160%]">
              <p>
                We work with trusted third-party service providers who may set cookies when you visit our
                website. These include:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                  <span>
                    <strong>Analytics providers:</strong> Google Analytics, to help us understand website
                    usage and improve our services
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                  <span>
                    <strong>Advertising partners:</strong> For targeted advertising and campaign measurement
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                  <span>
                    <strong>Customer support tools:</strong> To provide live chat and help desk functionality
                  </span>
                </li>
              </ul>
              <p>
                These third parties have their own privacy policies that govern their use of your
                information. We recommend reviewing their policies to understand how they handle your data.
              </p>
            </div>
          </section>

          {/* Retention & Control */}
          <section>
            <h2 className="mb-4">Cookie Retention & Your Control</h2>
            <div className="space-y-4 text-gray-700 leading-[160%]">
              <p>
                <strong>Session cookies</strong> are temporary and are deleted when you close your browser.
                <strong> Persistent cookies</strong> remain on your device for a set period or until you
                delete them manually.
              </p>
              <p>
                You have full control over which cookies you accept:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                  <span>
                    Use our cookie preferences tool (available at the bottom of every page and in the footer)
                    to enable or disable specific cookie categories
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                  <span>
                    Configure your browser settings to block or delete cookies (note that this may affect
                    website functionality)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                  <span>
                    Opt out of third-party advertising cookies through industry opt-out platforms
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="border-t-2 border-gray-300 pt-8">
            <h2 className="mb-4">Questions or Concerns</h2>
            <div className="space-y-4 text-gray-700 leading-[160%]">
              <p>
                If you have any questions about our use of cookies or this Cookie Policy, please contact
                our privacy team:
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@inviti.vip" className="text-gray-900 underline hover:text-gray-600 transition-colors">
                  privacy@inviti.vip
                </a>
              </p>
              <p>
                We are committed to protecting your privacy and will respond to your inquiry as soon as
                possible.
              </p>
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t-2 border-gray-300">
          <WireframeButton
            variant="secondary"
            size={isMobile ? 'sm' : 'md'}
            onClick={onManagePreferences}
          >
            Manage cookie preferences
          </WireframeButton>
        </div>
      </div>
    </div>
  );
};
