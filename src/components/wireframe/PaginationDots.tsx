import React from 'react';

interface PaginationDotsProps {
  total: number;
  active: number;
}

export const PaginationDots: React.FC<PaginationDotsProps> = ({ total, active }) => {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`rounded-full transition-all ${
            index === active
              ? 'w-6 h-2 bg-gray-900'
              : 'w-2 h-2 bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};
