import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface HCTopicCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  isMobile?: boolean;
}

export const HCTopicCard: React.FC<HCTopicCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  onClick,
  isMobile = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all group ${
        isMobile ? 'p-4' : 'p-5'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <Icon size={20} className="text-gray-700" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="mb-1.5 text-gray-900 leading-[140%]">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-[150%] mb-2">
            {description}
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
            <span>Learn more</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </button>
  );
};
