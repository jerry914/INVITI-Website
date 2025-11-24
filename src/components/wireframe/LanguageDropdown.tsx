import React from 'react';
import { Check } from 'lucide-react';
import { Locale, localeOptions } from '../../locales/translations';

interface LanguageDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocale: Locale;
  onSelectLocale: (locale: Locale) => void;
  isMobile?: boolean;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  isOpen,
  onClose,
  currentLocale,
  onSelectLocale,
  isMobile = false
}) => {
  if (!isOpen) return null;

  const handleSelect = (locale: Locale) => {
    onSelectLocale(locale);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="language-dropdown-backdrop" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Dropdown Menu */}
      <div 
        className={`dropdown-menu show language-dropdown-menu ${isMobile ? 'w-100' : ''}`}
        style={{
          position: 'absolute',
          top: isMobile ? 'calc(78% + 8px)' : 'calc(100% + 8px)',
          right: isMobile ? undefined : 0,
          left: isMobile ? 0 : undefined,
          minWidth: isMobile ? '100%' : '120px'
        }}
      >
        {localeOptions.map((option) => (
          <button
            key={option.code}
            onClick={() => handleSelect(option.code)}
            className={`dropdown-item d-flex align-items-center justify-content-between ${currentLocale === option.code ? 'active' : ''}`}
            type="button"
          >
            <span className="text-dark">{option.label}</span>
            {currentLocale === option.code && (
              <Check size={16} className="text-dark" />
            )}
          </button>
        ))}
      </div>
    </>
  );
};
