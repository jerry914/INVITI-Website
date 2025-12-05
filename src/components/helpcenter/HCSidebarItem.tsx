import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface HCSidebarItemProps {
  label: string;
  hasChildren?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
}

export const HCSidebarItem: React.FC<HCSidebarItemProps> = ({ 
  label, 
  hasChildren = false,
  isActive = false,
  onClick,
  children,
  defaultExpanded = false
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  // Update expanded state when defaultExpanded changes (e.g., when active category changes)
  useEffect(() => {
    if (defaultExpanded) {
      setIsExpanded(true);
    }
  }, [defaultExpanded]);

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
    onClick?.();
  };

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className={`w-full flex items-center justify-between px-3 py-2 text-left text-sm transition-colors leading-[140%] ${
          isActive 
            ? 'text-gray-900 bg-gray-100' 
            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
        }`}
      >
        <span className="text-sm">{label}</span>
        {hasChildren && (
          <ChevronRight 
            size={16} 
            className={`text-gray-400 transition-transform ${
              isExpanded ? 'rotate-90' : ''
            }`} 
          />
        )}
      </button>
      
      {hasChildren && isExpanded && children && (
        <div className="ml-3 mt-1 border-l border-gray-200 pl-3 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};
