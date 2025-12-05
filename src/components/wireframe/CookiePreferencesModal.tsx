import React, { useState, useEffect } from 'react';
import { X, Cookie, BarChart3, Target, Settings } from 'lucide-react';
import { Switch } from '../ui/switch';
import { WireframeButton } from './WireframeButton';
import { useIsMobile } from '../ui/use-mobile';

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
  isMobile: isMobileProp = false
}) => {
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(preferences);
  // Auto-detect mobile using hook, use detected value as primary source
  // Prop can override if explicitly set to true (for forced mobile view in dev)
  const detectedMobile = useIsMobile();
  const isMobile = isMobileProp === true ? true : detectedMobile;

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
      title: '嚴格必要 Cookie',
      titleEn: 'Strictly Necessary Cookies',
      purpose: '支撐網站核心功能與安全性，例如登入、權限驗證、工作階段維護。',
      example: '維持您在不同頁面之間的登入狀態，防止未授權的存取。',
      canDisable: false,
      required: true
    },
    {
      id: 'functional' as keyof CookiePreferences,
      icon: <Settings size={22} className="text-gray-700" />,
      title: '功能性 Cookie',
      titleEn: 'Functional Cookies',
      purpose: '記住您的個人偏好，讓網站依您的使用習慣呈現適合的內容與介面。',
      example: '記住您選擇的語言、顯示方式或部分功能設定。',
      canDisable: true,
      required: false
    },
    {
      id: 'analytics' as keyof CookiePreferences,
      icon: <BarChart3 size={22} className="text-gray-700" />,
      title: '分析 Cookie',
      titleEn: 'Analytics / Performance Cookies',
      purpose: '協助我們以統計方式了解網站使用情況，作為改善產品與內容的參考，不用於直接辨識個人身分。',
      example: '統計頁面瀏覽次數、停留時間、瀏覽路徑等。',
      canDisable: true,
      required: false
    },
    {
      id: 'marketing' as keyof CookiePreferences,
      icon: <Target size={22} className="text-gray-700" />,
      title: '行銷 Cookie',
      titleEn: 'Marketing Cookies',
      purpose: '衡量行銷活動與宣傳素材的成效，在適用情況下，調整我們在自有管道上的溝通方式與推薦內容。',
      example: '分析不同活動頁、電子報或宣傳連結帶來的註冊與使用情形。',
      canDisable: true,
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
          <div>
            <h3 className="leading-[140%] mb-1">Cookie 偏好設定</h3>
            <p className="text-sm text-gray-600">Cookie Preferences</p>
          </div>
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
          <div className="space-y-6">
            {cookieCategories.map((category) => {
              const isChecked = localPreferences[category.id];
              return (
                <div
                  key={category.id}
                  className="pb-6 border-b border-[#E6E6E6] last:border-0 last:pb-0"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 mt-1 ${isChecked ? 'opacity-100' : 'opacity-70'}`}>
                      {category.icon}
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className={`font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>
                          {category.title}
                        </h4>
                        {category.required && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            必要
                          </span>
                        )}
                        {!category.required && (
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            isChecked 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {isChecked ? '已啟用' : '已停用'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mb-1">{category.titleEn}</p>
                      
                      <div className="space-y-2 mt-3">
                        <div>
                          <p className={`text-gray-700 leading-relaxed ${isMobile ? 'text-xs' : 'text-sm'} mb-1`}>
                            <span className="font-medium">用途：</span>
                            {category.purpose}
                          </p>
                        </div>
                        <div>
                          <p className={`text-gray-600 leading-relaxed ${isMobile ? 'text-xs' : 'text-sm'}`}>
                            <span className="font-medium">範例：</span>
                            {category.example}
                          </p>
                        </div>
                        {!category.required && (
                          <p className={`text-gray-500 italic ${isMobile ? 'text-xs' : 'text-sm'} mt-2`}>
                            {category.canDisable 
                              ? '可以關閉。關閉後網站仍可使用，但部分功能可能會受到影響。'
                              : '無法關閉。若您在瀏覽器中完全停用 Cookie，本網站部分功能可能無法正常使用。'
                            }
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Toggle */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-2">
                      <Switch
                        checked={isChecked}
                        onCheckedChange={(checked) =>
                          setLocalPreferences({ ...localPreferences, [category.id]: checked })
                        }
                        disabled={category.required}
                        className={isChecked ? 'opacity-100' : 'opacity-70'}
                      />
                      {!category.required && (
                        <span className={`text-xs font-medium ${
                          isChecked ? 'text-green-600' : 'text-gray-400'
                        }`}>
                          {isChecked ? 'ON' : 'OFF'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className={`border-t border-[#E6E6E6] bg-gray-50 ${isMobile ? 'p-4' : 'p-6'}`}>
          <div className={isMobile ? 'flex flex-wrap gap-2' : 'flex items-center justify-between gap-3'}>
            <WireframeButton
              variant="primary"
              size={isMobile ? 'sm' : 'md'}
              onClick={handleSave}
              className={isMobile ? 'w-full' : ''}
            >
              儲存偏好設定
            </WireframeButton>
            <div className={isMobile ? 'flex flex-col gap-2 w-full' : 'flex gap-3'}>
              <WireframeButton
                variant="secondary"
                size={isMobile ? 'sm' : 'md'}
                onClick={handleAcceptAll}
                className={isMobile ? 'w-full' : ''}
              >
                全部接受
              </WireframeButton>
              <WireframeButton
                variant="secondary"
                size={isMobile ? 'sm' : 'md'}
                onClick={handleRejectAll}
                className={isMobile ? 'w-full' : ''}
              >
                全部拒絕
              </WireframeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
