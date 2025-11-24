import React, { useState, useEffect } from 'react';
import { X, Cookie, BarChart3, Target, Settings } from 'lucide-react';
import { Switch } from '../ui/switch';
import { WireframeButton } from './WireframeButton';

export interface CookiePreferences {
  strictlyNecessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: CookiePreferences;
  onSave: (preferences: CookiePreferences) => void;
  isMobile?: boolean;
}

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({
  isOpen,
  onClose,
  preferences,
  onSave,
  isMobile = false
}) => {
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(preferences);

  useEffect(() => {
    setLocalPreferences(preferences);
  }, [preferences]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      strictlyNecessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    setLocalPreferences(allAccepted);
    onSave(allAccepted);
    onClose();
  };

  const handleRejectAll = () => {
    const allRejected: CookiePreferences = {
      strictlyNecessary: true, // Always on
      functional: false,
      analytics: false,
      marketing: false
    };
    setLocalPreferences(allRejected);
    onSave(allRejected);
    onClose();
  };

  const handleSave = () => {
    onSave(localPreferences);
    onClose();
  };

  const cookieCategories = [
    {
      id: 'strictlyNecessary' as keyof CookiePreferences,
      icon: <Cookie size={22} className="text-gray-700" />,
      title: 'Strictly Necessary',
      description: 'Required to deliver core features such as navigation and session security.',
      required: true
    },
    {
      id: 'functional' as keyof CookiePreferences,
      icon: <Settings size={22} className="text-gray-700" />,
      title: 'Functional',
      description: 'Remember settings to personalize your experience.',
      required: false
    },
    {
      id: 'analytics' as keyof CookiePreferences,
      icon: <BarChart3 size={22} className="text-gray-700" />,
      title: 'Analytics',
      description: 'Help us understand usage to improve the product.',
      required: false
    },
    {
      id: 'marketing' as keyof CookiePreferences,
      icon: <Target size={22} className="text-gray-700" />,
      title: 'Marketing',
      description: 'Used to measure campaigns and personalize offers.',
      required: false
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl shadow-2xl ${
          isMobile ? 'w-full max-w-[343px] mx-4' : 'w-full max-w-[640px] md:max-w-[560px] lg:max-w-[640px]'
        } max-h-[90vh] overflow-hidden flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex items-center justify-between border-b border-[#E6E6E6] ${isMobile ? 'p-4' : 'p-6'}`}>
          <h3 className="leading-[140%]">Cookie Preferences</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Close modal"
          >
            <X size={20} className="text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div className={`flex-1 overflow-y-auto ${isMobile ? 'p-4' : 'p-6'}`}>
          <div className="space-y-5">
            {cookieCategories.map((category) => (
              <div
                key={category.id}
                className="flex items-start gap-4 pb-5 border-b border-[#E6E6E6] last:border-0 last:pb-0"
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  {category.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h4 className={`mb-1 ${isMobile ? 'text-sm' : ''}`}>
                    {category.title}
                    {category.required && (
                      <span className="ml-2 text-xs text-gray-500">(Required)</span>
                    )}
                  </h4>
                  <p className={`text-gray-600 leading-[150%] ${isMobile ? 'text-xs' : 'text-sm'}`}>
                    {category.description}
                  </p>
                </div>

                {/* Toggle */}
                <div className="flex-shrink-0">
                  <Switch
                    checked={localPreferences[category.id]}
                    onCheckedChange={(checked) =>
                      setLocalPreferences({ ...localPreferences, [category.id]: checked })
                    }
                    disabled={category.required}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`border-t border-[#E6E6E6] ${isMobile ? 'p-4' : 'p-6'}`}>
          <div className={isMobile ? 'flex flex-col gap-2' : 'flex items-center justify-between gap-3'}>
            <WireframeButton
              variant="primary"
              size={isMobile ? 'sm' : 'md'}
              onClick={handleSave}
              className={isMobile ? 'w-full' : ''}
            >
              Save preferences
            </WireframeButton>
            <div className={isMobile ? 'flex flex-col gap-2' : 'flex gap-3'}>
              <WireframeButton
                variant="secondary"
                size={isMobile ? 'sm' : 'md'}
                onClick={handleAcceptAll}
                className={isMobile ? 'w-full' : ''}
              >
                Accept all
              </WireframeButton>
              <WireframeButton
                variant="secondary"
                size={isMobile ? 'sm' : 'md'}
                onClick={handleRejectAll}
                className={isMobile ? 'w-full' : ''}
              >
                Reject all
              </WireframeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
