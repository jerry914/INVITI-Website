import React from 'react';
import { Mail, MessageCircle, Users } from 'lucide-react';

interface ContactOption {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface HCContactBlockProps {
  title: string;
  emailLabel: string;
  communityLabel?: string;
  supportLabel?: string;
  isMobile?: boolean;
}

export const HCContactBlock: React.FC<HCContactBlockProps> = ({ 
  title,
  emailLabel,
  communityLabel,
  supportLabel,
  isMobile = false
}) => {
  const options: ContactOption[] = [
    {
      icon: <Mail size={20} className="text-gray-700" />,
      label: emailLabel,
      href: 'mailto:contact@inviti.vip'
    }
  ];

  if (communityLabel) {
    options.push({
      icon: <Users size={20} className="text-gray-700" />,
      label: communityLabel,
      href: '#community'
    });
  }

  if (supportLabel) {
    options.push({
      icon: <MessageCircle size={20} className="text-gray-700" />,
      label: supportLabel,
      href: '#support'
    });
  }

  return (
    <div className={`bg-gray-50 border border-gray-200 ${isMobile ? 'p-5' : 'p-6'}`}>
      <h3 className="mb-4 text-gray-900 leading-[140%]">
        {title}
      </h3>
      
      <div className="space-y-2">
        {options.map((option, index) => (
          <a
            key={index}
            href={option.href}
            className="flex items-center gap-3 p-3 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors group"
          >
            <div className="flex-shrink-0">
              {option.icon}
            </div>
            <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-[140%]">
              {option.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
