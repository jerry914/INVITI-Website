import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface HCSearchBarProps {
  placeholder: string;
  isMobile?: boolean;
  onSearch?: (query: string) => void;
}

export const HCSearchBar: React.FC<HCSearchBarProps> = ({ 
  placeholder, 
  isMobile = false,
  onSearch 
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className={`relative ${isMobile ? '' : ''}`}>
        <Search 
          className={`absolute text-gray-400 ${
            isMobile ? 'left-3 top-1/2 -translate-y-1/2' : 'left-4 top-1/2 -translate-y-1/2'
          }`} 
          size={20} 
        />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full bg-white border transition-colors outline-none leading-[150%] ${
            isFocused ? 'border-gray-400' : 'border-gray-300'
          } ${
            isMobile 
              ? 'h-12 pl-10 pr-4 text-base' 
              : 'h-12 pl-12 pr-4'
          }`}
        />
      </div>
    </form>
  );
};
